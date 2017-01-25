<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="AssetRegister.Login" %>

<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

  <title>Asset Register - Login</title>
  
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
<hgroup>
  <h1>Asset Register</h1>
  <h3>Login</h3>
</hgroup>
<form runat="server">
  <div class="group">
    <input runat="server" type="email" name="email" id="email"><span class="highlight"></span><span class="bar"></span>
    <label>Email</label>
  </div>
  <div class="group">
    <input runat="server" type="password" name="password" id="password"><span class="highlight"></span><span class="bar"></span>
    <label>Password</label>
  </div>
  <button type="submit" class="button buttonBlue" id="submit">Login
    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
  </button>
  <button type="button" class="button buttonBlue" id="reset">Reset
    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
  </button>
  <div class="group" style="text-align: center;">
      <a href="Register.aspx" id="register">Register</a> | <a href="ForgotPassword.aspx" id="forgotpassword">Forgot Password</a>
  </div>
  <div class="errorgroup" id="errors" runat="server">

  </div>
</form>

  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src="js/login.js"></script>

</body>
</html>