using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AssetRegister
{
    public partial class ConfirmEmail : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            errors.InnerHtml = "";
            success.InnerHtml = "";

            if (Request.Params["key"] != null)
            {
                string key = Request.Params["key"];
                AssetRegisterEntities db = new AssetRegisterEntities();

                var user = db.Users.FirstOrDefault(u => u.confirmEmailKey == key);

                if (user != null)
                {
                    user.emailVerified = true;
                    user.confirmEmailDate = DateTime.Now;
                    user.confirmEmailKey = null;

                    db.SaveChanges();

                    success.InnerHtml = "Account activated. You can now <a href='Login.aspx'>login</a>.";
                }
                else
                {
                    errors.InnerHtml = "Invalid API Key";
                }
            }
            else
            {
                errors.InnerHtml = "Missing API Key parameter";
            }
        }
    }
}