Ext.define('AssetRegister.model.Asset', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'name'
    }],

    identifier: 'sequential',

    proxy: {
        type: 'rest',
        url: 'api/asset/GetAssets',
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});