<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ConfirmEmail.aspx.cs" Inherits="AssetRegister.ConfirmEmail" %>

<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

  <title>Asset Register - Confirm Email Address</title>
  
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
<hgroup>
  <h1>Asset Register</h1>
  <h3>Confirm Email Address</h3>
</hgroup>
<form runat="server">
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