using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;

namespace AssetRegister
{
    public class Security
    {
        public static int GetUserID()
        {
            int UserID = int.Parse(HttpContext.Current.User.Identity.Name);

            return UserID;
        }

        public static string GetUserName()
        {
            AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };
            int UserID = Security.GetUserID();

            string name = db.Users.FirstOrDefault(user => user.id == UserID).name;

            return name;
        }

        public static bool IsAdmin()
        {
            AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };
            int UserID = Security.GetUserID();

            bool admin = db.Users.FirstOrDefault(user => user.id == UserID).admin;

            return admin;
        }

        public static bool IsAuthenticated()
        {
            HttpContext context = HttpContext.Current;

            if ((context == null) || (context.User == null) || (context.User.Identity == null))
                return false;
            else if (context.User.Identity.IsAuthenticated)
            {
                return true;
            }

            return false;
        }

        public static string GenerateApiKey()
        {
            int length = 32;
            Random random = new Random();
            const string chars = "abcdefghijklmnopqrstuvwxyz0123456789";

            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public static void GenerateSampleData(string apiKey)
        {
            // API Key has been specified, so erase and restore a fresh set of data for that user
            AssetRegisterEntities db = new AssetRegisterEntities() { Configuration = { LazyLoadingEnabled = false } };

            User user = db.Users.FirstOrDefault(u => u.apiKey == apiKey);

            if (user != null)
            {
                // Delete existing data associated with the user
                db.Assets.RemoveRange(db.Assets.Where(a => a.userId == user.id));
                db.SaveChanges();

                // Add new data for the user - copy from the base set of data
                var assets = db.Assets.Where(a => a.userId == null);

                foreach (var asset in assets)
                {
                    db.Assets.Add(new Asset()
                    {
                        assetTypeId = asset.assetTypeId,
                        cost = asset.cost,
                        quantity = asset.quantity,
                        description = asset.description,
                        name = asset.name,
                        purchaseDate = asset.purchaseDate,
                        userId = user.id
                    });
                }

                db.SaveChanges();
            }
        }

        public static async Task ForgotPassword(string emailAddress)
        {
            AssetRegisterEntities db = new AssetRegisterEntities();

            var user = db.Users.FirstOrDefault(u => u.emailAddress == emailAddress);

            if (user != null && user.emailVerified)
            {
                string apiKey = Environment.GetEnvironmentVariable("SendGridApiKey", EnvironmentVariableTarget.Machine);
                dynamic sendgrid = new SendGridAPIClient(apiKey);

                string resetApiKey = Security.GenerateApiKey();
                user.resetPasswordKey = resetApiKey;
                user.resetPasswordDate = DateTime.Now;

                db.SaveChanges();

                Email from = new Email("donotreply-assetregister@sencha.com");
                string subject = "Asset Register - Forgot Password";
                Email to = new Email(user.emailAddress);
                Content content = new Content("text/html", "<h3>Asset Register - Forgot Password</h3><p>To reset your password, please click on the unique link below.</p>");
                Mail mail = new Mail(from, subject, to, content);

                dynamic response = await sendgrid.client.mail.send.post(requestBody: mail.Get());
            }
        } 
    }
}