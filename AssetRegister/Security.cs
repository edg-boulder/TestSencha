using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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
    }
}