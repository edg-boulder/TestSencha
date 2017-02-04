Ext.define('AssetRegister.view.assetcontainer.AssetContainerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.assetcontainer',

    requires: [
        'AssetRegister.model.Asset'
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
        }
    }

});
