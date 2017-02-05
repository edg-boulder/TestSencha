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

        public dynamic GetDashboardStats()
        {
            int userId = Security.GetUserID();

            List<Asset> assets = db.Assets.Include("AssetType").Where(asset => asset.userId == userId).ToList();

            // Get summary info
            int totalCount = assets.Sum(asset => asset.quantity);
            decimal totalValue = assets.Sum(asset => asset.cost * asset.quantity);

            // Get total costs separated by category
            var categorySpend = from asset in assets
                                group asset by new { asset.assetTypeId, asset.AssetType.name } into grouping
                                select new
                                {
                                    assetTypeId = grouping.Key.assetTypeId,
                                    assetTypeName = grouping.Key.name,
                                    totalValue = grouping.Sum(a => a.cost * a.quantity)
                                };

            // Get total costs by month for the past 6 months
            var now = DateTime.Now;
            now = now.Date.AddDays(1 - now.Day);
            var months = Enumerable.Range(-5, 6)
                .Select(x => new {
                    year = now.AddMonths(x).Year,
                    month = now.AddMonths(x).Month
                });

            var monthlySpend =
                months.GroupJoin(assets,
                    m => new { month = m.month, year = m.year },
                    asset => new {
                        month = asset.purchaseDate.Month,
                        year = asset.purchaseDate.Year
                    },
                    (p, g) => new {
                        date = p.month.ToString() + '/' + p.year.ToString(),
                        totalValue = g.Sum(a => a.cost * a.quantity) / 1000
                    });

            return new
            {
                summary = new {
                    totalCount = totalCount,
                    totalValue = totalValue
                },
                categorySpend = categorySpend,
                monthlySpend = monthlySpend
            };
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

            db.Entry(asset).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
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

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Asset
        [ResponseType(typeof(Asset))]
        public IHttpActionResult PostAsset(Asset asset)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Assets.Add(asset);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = asset.id }, asset);
        }

        // DELETE: api/Asset/5
        [ResponseType(typeof(Asset))]
        public IHttpActionResult DeleteAsset(int id)
        {
            Asset asset = db.Assets.Find(id);
            if (asset == null)
            {
                return NotFound();
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