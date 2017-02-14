using SimpleCrypto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AssetRegister
{
    public partial class ResetPassword : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Params["key"] != null) 
            {
                string key = Request.Params["key"];
                AssetRegisterEntities db = new AssetRegisterEntities();

                var user = db.Users.FirstOrDefault(u => u.resetPasswordKey == key);

                if (user != null)
                {
                    if (user.resetPasswordDate < DateTime.Now.AddDays(-1))
                    {
                        errors.InnerHtml = "Reset link has expired";
                        reset.Visible = false;
                    }
                    else
                    {
                        reset.Visible = true;

                        if (IsPostBack)
                        {
                            PBKDF2 crypto = new PBKDF2();
                            bool valid = false;
                            string errorText = "";
                            errors.InnerHtml = "";

                            if (password.Value.Trim() == "")
                            {
                                errorText += "<li>Password is required.</li>";
                            }

                            if (password.Value.Length < 8)
                            {
                                errorText += "<li>Password must be 8 or more characters in length.</li>";
                            }

                            if (password.Value != confirmpassword.Value)
                            {
                                errorText += "<li>Passwords do not match.</li>";
                            }

                            if (errorText.Length == 0)
                            {
                                valid = true;
                            }
                            else
                            {
                                errors.InnerHtml = "<p>Please resolve the following errors:</p><ul>" + errorText + "</ul>";
                            }

                            // Add new password for the user
                            if (valid)
                            {
                                user.password = crypto.Compute(password.Value);
                                user.passwordSalt = crypto.Salt;
                                user.resetPasswordDate = null;
                                user.resetPasswordKey = null;

                                db.SaveChanges();

                                success.InnerHtml = "<p>Your password has been reset successfully.</p>";
                                reset.Visible = false;
                            }
                        }
                    }
                }
                else
                {
                    errors.InnerHtml = "Invalid API Key or link has expired";
                    reset.Visible = false;
                }
            }
            else
            {
                errors.InnerHtml = "Missing API Key parameter";
                reset.Visible = false;
            }
        }
    }
}