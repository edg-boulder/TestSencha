using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AssetRegister
{
    public partial class DefaultDev : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Security.IsAuthenticated())
            {
                Response.Redirect("Login.aspx");
            }
            else
            {
                AssetRegisterEntities db = new AssetRegisterEntities();
                int userId = Security.GetUserID();
                User user = db.Users.FirstOrDefault(u => u.id == userId);

                user.lastAccess = DateTime.Now;
                db.SaveChanges();

                username.Value = Security.GetUserName();
                admin.Value = Security.IsAdmin().ToString().ToLower();
            }
        }
    }
}