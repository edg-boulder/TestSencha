
Ext.define('AssetRegister.view.assetcontainer.AssetContainer',{
    extend: 'Ext.Container',

    requires: [
        'AssetRegister.view.assetcontainer.AssetContainerController',
        'AssetRegister.view.assetcontainer.AssetContainerModel'
    ],

    xtype: 'assetcontainer',

    controller: 'assetcontainer',
    viewModel: {
        type: 'assetcontainer'
    },

    margin: 16,

    cls: 'appview',

    layout: 'card',

    items: [{
        xtype: 'assetgrid'
    }]
});
