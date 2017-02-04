
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

    margin: 16,

    cls: 'appview',

    layout: 'card',

    items: [{
        xtype: 'usergrid'
    }]
});
