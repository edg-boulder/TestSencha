Ext.define('AssetRegister.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'AssetRegister.view.main.MainController',
        'AssetRegister.view.main.MainModel',
        'Ext.plugin.Responsive',
        'Ext.Toast',
        'AssetRegister.view.usergrid.UserGrid'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'card',

    cls: 'main',

    items: [{
        xtype: 'toolbar',
        cls: 'mainHeader',
        docked: 'top',
        items: [{
            xtype: 'button',
            cls: 'menubutton',
            align: 'left',
            iconCls: 'x-fa fa-bars',
            handler: 'onShowHideMenuClick'
        }, {
            xtype: 'container',
            reference: 'title',
            html: 'Company Asset Register',
            style: {
                'font-size': '110%',
                'font-weight': 'lighter'
            }
        }, {
            xtype: 'spacer'
        }, {
            xtype: 'container',
            reference: 'displayName',
            platformConfig: {
                phone: {
                    hidden: true
                }
            }
        }, {
            xtype: 'spacer',
            width: 10
        }, {
            xtype: 'button',
            cls: 'menubutton',
            reference: 'logout',
            iconCls: 'x-fa fa-sign-out',
            handler: 'logout'
        }]
    }, {
        xtype: 'mainmenu',
        reference: 'mainmenu',
        docked: 'left',
        mode: 'micro',
        zIndex: 4,
        plugins: 'responsive',
        responsiveConfig: {
            'phone': {
                hidden: true
            }
        }
    }, {
        xtype: 'dashboard',
        reference: 'dashboard'
    }, {
        xtype: 'assetcontainer',
        reference: 'asset'
    }, {
        xtype: 'usercontainer',
        reference: 'user'
    }, {
        xtype: 'simpleuserform',
        reference: 'userdetails'
    }, {
        xtype: 'about',
        reference: 'about'
    }]
});
