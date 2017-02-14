<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ForgotPassword.aspx.cs" Inherits="AssetRegister.ForgotPassword" %>

<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

  <title>Asset Register - Forgot Password</title>
  
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
<hgroup>
  <h1>Asset Register</h1>
  <h3>Forgot Password</h3>
</hgroup>
<form runat="server">
  <div class="group">
    <input runat="server" type="email" name="email" id="email"><span class="highlight"></span><span class="bar"></span>
    <label>Email</label>
  </div>
  <button type="submit" class="button buttonBlue" id="submit">Reset Password
    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
  </button>
  <div class="group" style="text-align: center;">
      <a href="Login.aspx" id="login">Login</a> | <a href="Register.aspx" id="register">Register</a>
  </div>
  <div class="errorgroup" id="errors" runat="server">

  </div>
  <div id="success" runat="server">

  </div>
</form>

  <script src='js/jquery.min.js'></script>
  <script src="js/login.js"></script>

</body>
</html>