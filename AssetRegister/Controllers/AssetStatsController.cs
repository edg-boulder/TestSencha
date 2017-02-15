using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AssetRegister.Controllers
{
    [Authorize]
    public class AssetStatsController : ApiController
    {
        private AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };
        
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
                summary = new
                {
                    totalCount = totalCount,
                    totalValue = totalValue
                },
                categorySpend = categorySpend,
                monthlySpend = monthlySpend
            };
        }

    }
}
