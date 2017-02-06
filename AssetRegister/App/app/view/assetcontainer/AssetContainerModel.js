Ext.define('AssetRegister.view.assetcontainer.AssetContainerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.assetcontainer',

    requires: [
        'AssetRegister.model.Asset',
        'AssetRegister.model.AssetType'
    ],

    stores: {
        Assets: {
            model: 'AssetRegister.model.Asset',
            autoLoad: true,
            listeners: {
                load: 'onStoreLoad'
            },
            sorters: [{
                property: 'name'
            }]
        },

        AssetTypes: {
            model: 'AssetRegister.model.AssetType',
            autoLoad: true,
            sorters: [{
                property: 'name'
            }]
        }
    }

});
