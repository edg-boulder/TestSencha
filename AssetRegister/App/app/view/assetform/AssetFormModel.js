Ext.define('AssetRegister.view.assetform.AssetFormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.assetform',

    stores: {
        AssetTypes: {
            model: 'AssetRegister.model.AssetType',
            autoLoad: true,
            sorters: [{
                property: 'name'
            }]
        }
    }
});
