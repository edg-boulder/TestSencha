using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace AssetRegister.Controllers
{
    [Authorize]
    public class SimpleUserController : ApiController
    {
        private AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };

        // GET: api/User
        public dynamic GetUser()
        {
            int userId = Security.GetUserID();

            var userDetails = from user in db.Users
                              where user.id == userId
                              select new
                              {
                                  user.id,
                                  user.name,
                                  user.emailAddress,
                                  user.apiKey
                              };

            return userDetails;
        }

        /*// GET: api/User/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }*/

        // PUT: api/User/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.id)
            {
                return BadRequest();
            }
            
            try
            {
                var dbUser = db.Users.Find(id);

                var duplicateEmailUser = db.Users.Where(u => u.id != id).FirstOrDefault(u => u.emailAddress == user.emailAddress);

                if (duplicateEmailUser != null)
                {
                    return Content(HttpStatusCode.BadRequest, "A user with this Email address already exists");
                }

                if (user.password != null && user.password != "")
                {
                    var crypto = new SimpleCrypto.PBKDF2();
                    var encryptedPassword = crypto.Compute(user.password);

                    dbUser.password = encryptedPassword;
                    dbUser.passwordSalt = crypto.Salt;
                }
                
                dbUser.emailAddress = user.emailAddress;
                dbUser.name = user.name;

                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return StatusCode(HttpStatusCode.OK);
        }

    }
}