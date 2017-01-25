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
    public class AssetTypeController : ApiController
    {
        private AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };

        // GET: api/AssetType
        public IQueryable<AssetType> GetAssetTypes()
        {
            return db.AssetTypes;
        }

        // GET: api/AssetType/5
        [ResponseType(typeof(AssetType))]
        public IHttpActionResult GetAssetType(int id)
        {
            AssetType assetType = db.AssetTypes.Find(id);
            if (assetType == null)
            {
                return NotFound();
            }

            return Ok(assetType);
        }

        // PUT: api/AssetType/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAssetType(int id, AssetType assetType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != assetType.id)
            {
                return BadRequest();
            }

            db.Entry(assetType).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssetTypeExists(id))
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

        // POST: api/AssetType
        [ResponseType(typeof(AssetType))]
        public IHttpActionResult PostAssetType(AssetType assetType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AssetTypes.Add(assetType);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = assetType.id }, assetType);
        }

        // DELETE: api/AssetType/5
        [ResponseType(typeof(AssetType))]
        public IHttpActionResult DeleteAssetType(int id)
        {
            AssetType assetType = db.AssetTypes.Find(id);
            if (assetType == null)
            {
                return NotFound();
            }

            db.AssetTypes.Remove(assetType);
            db.SaveChanges();

            return Ok(assetType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AssetTypeExists(int id)
        {
            return db.AssetTypes.Count(e => e.id == id) > 0;
        }
    }
}