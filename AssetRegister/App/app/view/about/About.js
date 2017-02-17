
Ext.define('AssetRegister.view.about.About',{
    extend: 'Ext.Panel',

    xtype: 'about',

    margin: 16,

    platformConfig: {
        phone: {
            cls: '',
            margin: 0
        },
        '!phone': {
            cls: 'appview',
            margin: 16
        }
    },

    bodyPadding: 16,

    scrollable: true,

    html: '<h1>About the Asset Register app</h1><br/>' +
            '<p>The Asset Register app was built using Ext JS 6.2 as a demonstration of how to build and test a real-world ' +
            'end-to-end app. ' +
            'It features a .NET (C#) and Microsoft SQL Server backend, plus a separate login screen that authenticates ' +
            'users and secures the underlying application data.<br/><br/>' +
            'A third party service, SendGrid, is also being used for sending of verification emails when new users ' +
            'signup and password reset emails.<br/><br/>' +
            'Each user has their own private dataset, allowing multiple users to access the application ' +
            'simultaneously without worrying about impacting other users data during a test run.<br/><br/></p>' +
            '<h1>About Sencha</h1><br/>' +
            '<p>More than 10,000 customers and 60% of the Fortune 100 rely on Sencha solutions to deliver innovative ' +
            'applications that drive their businesses. With a longstanding commitment to web technologies, Sencha ' +
            'dramatically reduces the cost and complexity of developing and delivering enterprise applications ' +
            'across multiple device types.<br/><br/></p>' +
            '<h2>Create feature-rich HTML5 applications using JavaScript</h2><br/>' +
            '<p>Sencha Ext JS is the most comprehensive MVC/MVVM JavaScript framework for building feature-rich, ' +
            'cross-platform web applications targeting desktops, tablets, and smartphones. Ext JS leverages HTML5 ' +
            'features on modern browsers while maintaining compatibility and functionality for legacy browsers.<br/>' +
            '<br/>Ext JS features hundreds of high-performance UI widgets that are meticulously designed to fit the ' +
            'needs of the simplest as well as the most complex web applications. Ext JS templates and layout manager ' +
            'give you full control over your display irrespective of devices and screen sizes. An advanced charting ' +
            'package allows you to visualize large quantities of data. The framework includes a robust data package ' +
            'that can consume data from any backend data source. Ext JS also offers several out-of-the-box themes, ' +
            'and complete theming support that lets you build applications that reflect your brand.<br/><br/></p>' +
            '<div style="width: 100%; text-align: center;">' +
            '<img style="width: 200px;" src="resources/images/sencha.png">' +
            '</div>'
});
