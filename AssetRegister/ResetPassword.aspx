﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ResetPassword.aspx.cs" Inherits="AssetRegister.ResetPassword" %>

<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

  <title>Asset Register - Reset Password</title>
  
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
<hgroup>
  <h1>Asset Register</h1>
  <h3>Reset Password</h3>
</hgroup>
<form runat="server">
  <div id="reset" runat="server" style="width: 100%;">
      <div class="group">
        <input runat="server" type="password" name="password" id="password"><span class="highlight"></span><span class="bar"></span>
        <label>Password</label>
      </div>
      <div class="group">
        <input runat="server" type="password" name="confirmpassword" id="confirmpassword"><span class="highlight"></span><span class="bar"></span>
        <label>Confirm Password</label>
      </div>
      <button type="submit" class="button buttonBlue" id="submit">Reset Password
        <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
      </button>
  </div>
  <div class="group" style="text-align: center;">
    <a href="Login.aspx" id="login">Login</a> | <a href="Register.aspx" id="register">Register</a>
  </div>
  
  <div class="errorgroup" id="errors" runat="server">

  </div>
  <div id="success" runat="server">

  </div>
</form>

  <script src='js/jquery.min.js'></script>
  <script src="js/entry.js"></script>

</body>
</html>