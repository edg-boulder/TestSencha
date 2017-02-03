Ext.define('AssetRegister.model.Asset', {
    extend: 'Ext.data.Model',

    fields: [],

    identifier: 'sequential',

    proxy: {
        type: 'rest',
        url: 'api/asset',
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});