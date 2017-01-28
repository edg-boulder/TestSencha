using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AssetRegister
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Security.IsAuthenticated())
            {
                Response.Redirect("Login.aspx");
            }
            else
            {
                username.Value = Security.GetUserName();
                admin.Value = Security.IsAdmin().ToString().ToLower();
            }
        }
    }
}