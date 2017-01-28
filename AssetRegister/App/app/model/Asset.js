Ext.define('AssetRegister.model.Asset', {
    extend: 'Ext.data.Model',

    fields: [],

    proxy: {
        type: 'rest',
        url: 'api/asset'
    }
});