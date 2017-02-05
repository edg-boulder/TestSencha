Ext.define('AssetRegister.model.AssetType', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'name'
    }],

    identifier: 'sequential',

    proxy: {
        type: 'rest',
        url: 'api/assettype',
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});