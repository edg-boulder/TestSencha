using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AssetRegister
{
    public partial class ForgotPassword : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                bool valid = false;
                string errorText = "";
                errors.InnerHtml = "";
                success.InnerHtml = "";

                if (email.Value.Trim() == "")
                {
                    errorText += "<li>Email address is required</li>";
                }
                
                if (errorText.Length == 0)
                {
                    valid = true;
                }
                else
                {
                    errors.InnerHtml = "<p>Please resolve the following errors:</p><ul>" + errorText + "</ul>";
                }

                // Lookup user
                if (valid)
                {
                    string emailAddress = email.Value.Trim();

                    AssetRegisterEntities db = new AssetRegisterEntities();

                    var user = db.Users.FirstOrDefault(u => u.emailAddress == emailAddress);

                    if (user == null)
                    {
                        errors.InnerHtml = "<p>User with this email address not found.</p>";
                    }
                    else
                    {
                        // Reset password here - send email
                        Security.ForgotPassword(emailAddress).Wait();

                        success.InnerHtml = "<p>Reset instructions have been sent to the email address provided.<p>";
                        reset.Visible = false;

                        db.SaveChanges();
                    }
                }
            }
        }
    }
}