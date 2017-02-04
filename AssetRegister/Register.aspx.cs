using SimpleCrypto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AssetRegister
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                AssetRegisterEntities entities = new AssetRegisterEntities();
                RegexUtilities regex = new RegexUtilities();
                PBKDF2 crypto = new PBKDF2();
                bool valid = false;
                string errorText = "";
                errors.InnerHtml = "";

                List<User> existingUsers = entities.Users.Where(u => u.emailAddress == email.Value.Trim()).ToList();

                if (existingUsers.Count() > 0)
                {
                    errorText += "<li>A user with this email address already exists.</li>";
                }

                if (!regex.IsValidEmail(email.Value.Trim()))
                {
                    errorText += "<li>Email address is not in the correct format.</li>";
                }

                if (email.Value.Trim() == "")
                {
                    errorText += "<li>Email address is required.</li>";
                }

                if (name.Value.Trim() == "")
                {
                    errorText += "<li>Full Name is required.</li>";
                }

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

                // Add user
                if (valid)
                {
                    var user = new User()
                    {
                        admin = false,
                        emailAddress = email.Value.Trim(),
                        name = name.Value.Trim(),
                        password = crypto.Compute(password.Value),
                        passwordSalt = crypto.Salt,
                        apiKey = Security.GenerateApiKey()
                    };

                    entities.Users.Add(user);
                    entities.SaveChanges();

                    success.InnerHtml = "<p><span style='font-weight: bold;'>Your user account has been created!</span> You will be able to <a href='Login.aspx'>login</a> using your Email address and chosen password.</p>" +
                        "<p>In order to reset data in the app via an API call, you will require the following unique API Key. <span style='font-weight: bold;'>Please take a note of this now:</span></p>" + 
                        "<p style='font-family: Courier, Courier New; font-weight: bold;'>" + user.apiKey + "</p>";
                }
            }
        }
    }
}