
Ext.define('AssetRegister.view.usercontainer.UserContainer',{
    extend: 'Ext.Container',

    requires: [
        'AssetRegister.view.usercontainer.UserContainerController',
        'AssetRegister.view.usercontainer.UserContainerModel'
    ],

    xtype: 'usercontainer',

    controller: 'usercontainer-usercontainer',
    viewModel: {
        type: 'usercontainer-usercontainer'
    },

    margin: 8,

    layout: 'card',

    items: [{
        xtype: 'usergrid'
    }]
});
