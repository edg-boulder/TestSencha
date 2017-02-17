
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
        xtype: 'assetgrid'
    }]
});
