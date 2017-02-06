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
    [Authorize]
    public class AssetController : ApiController
    {
        private AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };

        // GET: api/Asset
        public dynamic GetAssets()
        {
            int userId = Security.GetUserID();

            var data = from asset in db.Assets
                       where asset.userId == userId
                       select new
                       {
                           asset.id,
                           asset.name,
                           asset.assetTypeId,
                           assetTypeName = asset.AssetType.name,
                           asset.cost,
                           asset.quantity,
                           asset.purchaseDate,
                           asset.description
                       };

            return data;
        }

        /*// GET: api/Asset/5
        [ResponseType(typeof(Asset))]
        public IHttpActionResult GetAsset(int id)
        {
            Asset asset = db.Assets.Find(id);
            if (asset == null)
            {
                return NotFound();
            }

            return Ok(asset);
        }*/

        // PUT: api/Asset/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAsset(int id, Asset asset)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != asset.id)
            {
                return BadRequest();
            }

            //db.Entry(asset).State = EntityState.Modified;

            try
            {
                int userId = Security.GetUserID();

                var dbAsset = db.Assets.Find(id);

                // If the user is trying to update an asset not belonging to them, throw unauthorized exception
                if (dbAsset.userId != userId)
                {
                    return StatusCode(HttpStatusCode.Unauthorized);
                }
                else
                {
                    dbAsset.assetTypeId = asset.assetTypeId;
                    dbAsset.cost = asset.cost;
                    dbAsset.description = asset.description;
                    dbAsset.name = asset.name;
                    dbAsset.purchaseDate = asset.purchaseDate;
                    dbAsset.quantity = asset.quantity;
                    
                    db.SaveChanges();
                }
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssetExists(id))
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

        // POST: api/Asset
        [ResponseType(typeof(Asset))]
        public IHttpActionResult PostAsset(Asset asset)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int userId = Security.GetUserID();

            asset.userId = userId;

            db.Assets.Add(asset);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = asset.id }, asset);
        }

        // DELETE: api/Asset/5
        [ResponseType(typeof(Asset))]
        public IHttpActionResult DeleteAsset(int id)
        {
            int userId = Security.GetUserID();

            Asset asset = db.Assets.Find(id);

            if (asset == null)
            {
                return NotFound();
            }

            if (asset.userId != userId)
            {
                return Unauthorized(null);
            }

            db.Assets.Remove(asset);
            db.SaveChanges();

            return Ok(asset);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AssetExists(int id)
        {
            return db.Assets.Count(e => e.id == id) > 0;
        }
    }
}