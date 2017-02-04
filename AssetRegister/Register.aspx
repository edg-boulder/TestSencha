<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="AssetRegister.Register" %>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

  <title>Asset Register - Registration</title>
  
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
<hgroup>
  <h1>Asset Register</h1>
  <h3>Registration</h3>
</hgroup>
<form runat="server">
  <div class="group">
    <input runat="server" type="text" name="name" id="name"><span class="highlight"></span><span class="bar"></span>
    <label>Full Name</label>
  </div>
  <div class="group">
    <input runat="server" type="email" name="email" id="email"><span class="highlight"></span><span class="bar"></span>
    <label>Email</label>
  </div>
  <div class="group">
    <input runat="server" type="password" name="password" id="password"><span class="highlight"></span><span class="bar"></span>
    <label>Password</label>
  </div>
  <div class="group">
    <input runat="server" type="password" name="confirmpassword" id="confirmpassword"><span class="highlight"></span><span class="bar"></span>
    <label>Confirm Password</label>
  </div>
  <button type="submit" class="button buttonBlue" id="submit">Register
    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
  </button>
  <button type="button" class="button buttonBlue" id="reset">Reset
    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
  </button>
  <div class="group" style="text-align: center;">
      <a href="Login.aspx" id="login">Login</a> | <a href="ForgotPassword.aspx">Forgot Password</a>
  </div>
  <div class="errorgroup" id="errors" runat="server">

  </div>
  <div id="success" runat="server">

  </div>
</form>

  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src="js/login.js"></script>

</body>
</html>