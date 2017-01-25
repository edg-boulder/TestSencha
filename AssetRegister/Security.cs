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
    }
}