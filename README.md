# Sencha Test Workshop - Asset Register app

This repo holds the Asset Register sample app for the Sencha Test Workshop.

## Technical details

This app has been built using the following technologies, to replicate a real-world application:

  * Sencha Ext JS 6.2 (Modern Toolkit)
  * .NET Web API (for RESTful APIs)
  * .NET Entity Framework (for communication with the database)
  * Microsoft SQL Server (for the database)

## Setup and Configuration

In order for the app to run, you will need a Windows machine running a recent version of IIS, along with .NET Framework 4.5.

  1. Create a virtual directory that maps to the root `AssetRegister` folder
  1. Restore the database from the `AssetRegister\Database` folder to SQL Server, as `AssetRegister`
  1. Add a new SQL User via SQL Server Management Studio, called `AssetRegister`, and give the user `db_datawriter` and `db_datareader` membership
  1. Update the `AssetRegisterEntities` database connection string in the `web.config` file, to point to your SQL Server, and with the updated credentials
  1. Try accessing the app via your web browser, and register for a new account. In the database, you can modify your user record to be an Admin user if needed, and set any other additional user flags
  
## Email notifications

For email notifications to work, you will need to create an account with SendGrid, and add your SendGrid API Key as a new Environment Variable on the Windows machine hosting the Asset Register app. The Environment Variable must be called `SendGridApiKey` - the Asset Register app looks for that key, and uses it when sending registration/forgot password emails etc.
