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

namespace AssetRegister.Controllers
{
    public class UserController : ApiController
    {
        private AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };

        // GET: api/User
        //[Authorize]
        public dynamic GetUsers()
        {
            var users = from oUser in db.Users
                        select new
                        {
                            oUser.id,
                            oUser.name,
                            oUser.emailAddress,
                            oUser.admin
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

            db.Entry(user).State = EntityState.Modified;

            try
            {
                var crypto = new SimpleCrypto.PBKDF2();
                var encryptedPassword = crypto.Compute(user.password);

                user.password = encryptedPassword;
                user.passwordSalt = crypto.Salt;
                
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

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/User
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var crypto = new SimpleCrypto.PBKDF2();
            var encryptedPassword = crypto.Compute(user.password);

            user.password = encryptedPassword;
            user.passwordSalt = crypto.Salt;

            db.Users.Add(user);
            db.SaveChanges();
            
            return CreatedAtRoute("DefaultApi", new { id = user.id }, user);
        }

        // DELETE: api/User/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
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

            return Ok(user);
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