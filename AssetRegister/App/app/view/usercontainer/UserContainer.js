
Ext.define('AssetRegister.view.usercontainer.UserContainer',{
    extend: 'Ext.Container',

    requires: [
        'AssetRegister.view.usercontainer.UserContainerController',
        'AssetRegister.view.usercontainer.UserContainerModel'
    ],

    xtype: 'usercontainer',

    controller: 'usercontainer',
    viewModel: {
        type: 'usercontainer'
    },
    
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

    layout: 'card',

    items: [{
        xtype: 'usergrid'
    }]
});
