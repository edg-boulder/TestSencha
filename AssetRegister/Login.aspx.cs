using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SimpleCrypto;
using System.Web.Security;

namespace AssetRegister
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                PBKDF2 crypto = new PBKDF2();
                bool valid = false;
                string errorText = "";
                errors.InnerHtml = "";

                if (email.Value.Trim() == "")
                {
                    errorText += "<li>Email address is required</li>";
                }

                if (password.Value.Trim() == "")
                {
                    errorText += "<li>Password is required</li>";
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
                    AssetRegisterEntities entities = new AssetRegisterEntities();

                    var user = entities.Users.FirstOrDefault(u => u.emailAddress == email.Value.Trim());

                    if (user == null)
                    {
                        errors.InnerHtml = "<p>User with this email address not found.</p>";
                    }
                    else
                    {
                        if (!user.emailVerified)
                        {
                            errors.InnerHtml = "<p>Please activate your account by clicking the activation link in the Registration Confirmation email.</p>";
                        }
                        else if (user.password == crypto.Compute(password.Value, user.passwordSalt))
                        {
                            int userId = user.id;
                            string emailAddress = user.emailAddress;

                            user.lastLogin = DateTime.Now;
                            entities.SaveChanges();

                            FormsAuthenticationTicket authTicket = new
                                FormsAuthenticationTicket(1,
                                userId.ToString(),
                                DateTime.Now,
                                DateTime.Now.AddYears(1),
                                true,
                                emailAddress);

                            string encryptedTicket = FormsAuthentication.Encrypt(authTicket);

                            HttpCookie authCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);
                            authCookie.Expires = authTicket.Expiration;

                            Response.Cookies.Add(authCookie);

                            if (Request.Url.AbsoluteUri.IndexOf("://localhost") > 0)
                            {
                                Response.Redirect("DefaultDev.aspx");
                            }
                            else
                            {
                                Response.Redirect("Default.aspx");
                            }
                        }
                        else
                        {
                            errors.InnerHtml = "<p>You entered an invalid password. Please try again.</p>";
                        }
                    }
                }
            }
            else if (Request.Params["apiKey"] != null)
            {
                // API Key has been specified, so erase and restore a fresh set of data for that user
                string apiKey = Request.Params["apiKey"];

                Security.GenerateSampleData(apiKey);
            }
        }
    }
}