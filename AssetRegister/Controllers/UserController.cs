using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AssetRegister;
using System.Security.Cryptography;

namespace AssetRegister.Controllers
{
    public class UserController : ApiController
    {
        private AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };

        // GET: api/User
        [Authorize]
        public dynamic GetUsers()
        {
            if (!Security.IsAdmin())
            {
                return Unauthorized();
            }

            var users = from oUser in db.Users
                        select new
                        {
                            oUser.id,
                            oUser.name,
                            oUser.emailAddress,
                            oUser.admin,
                            oUser.apiKey
                        };

            return users.AsEnumerable();
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
        [Authorize]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!Security.IsAdmin())
            {
                return Unauthorized();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.id)
            {
                return BadRequest();
            }

            //db.Entry(user).State = EntityState.Modified;
            
            try
            {
                var dbUser = db.Users.Find(id);

                if (user.password != null && user.password != "")
                {
                    var crypto = new SimpleCrypto.PBKDF2();
                    var encryptedPassword = crypto.Compute(user.password);

                    dbUser.password = encryptedPassword;
                    dbUser.passwordSalt = crypto.Salt;
                }

                dbUser.admin = user.admin;
                dbUser.emailAddress = user.emailAddress;
                dbUser.name = user.name;
                
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.OK);
        }

        // POST: api/User
        [Authorize]
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!Security.IsAdmin())
            {
                return Unauthorized();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var duplicateEmailUser = db.Users.FirstOrDefault(u => u.emailAddress == user.emailAddress);

            if (duplicateEmailUser != null)
            {
                return Content(HttpStatusCode.BadRequest, "A user with this Email address already exists");
            }

            var crypto = new SimpleCrypto.PBKDF2();
            var encryptedPassword = crypto.Compute(user.password);

            user.password = encryptedPassword;
            user.passwordSalt = crypto.Salt;

            var key = new byte[32];
            using (var generator = RandomNumberGenerator.Create())
                generator.GetBytes(key);

            user.apiKey = Convert.ToBase64String(key);

            db.Users.Add(user);
            db.SaveChanges();
            
            return CreatedAtRoute("DefaultApi", new { id = user.id, apiKey = user.apiKey }, new { id = user.id });
        }

        // DELETE: api/User/5
        [Authorize]
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            if (!Security.IsAdmin())
            {
                return Unauthorized();
            }

            User user = db.Users.Find(id); 
            if (user == null)
            {
                return NotFound();
            }

            // Can't delete an admin user (should only be a couple of admin users anyway). Change status to normal user then delete.
            if (user.admin)
            {
                return Unauthorized();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(new { id = user.id });
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.id == id) > 0;
        }
    }
}