Ext.define('AssetRegister.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'AssetRegister.view.main.MainController',
        'AssetRegister.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'fit',

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'spacer',
            width: 5
        }, {
            xtype: 'label',
            html: 'Company Asset Register',
            style: {
                'font-size': '125%',
                'font-weight': 'bold'
            }
        }, {
            xtype: 'spacer'
        }, {
            xtype: 'label',
            reference: 'displayName'
        }, {
            xtype: 'spacer',
            width: 10
        }, {
            xtype: 'button',
            reference: 'logout',
            text: 'Logout',
            handler: 'logout'
        }]
    }, {
        xtype: 'tabcontainer',
        reference: 'tabcontainer'
    }]
});
