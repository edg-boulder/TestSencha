Ext.define('AssetRegister.model.Asset', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'name'
    }, {
        name: 'description'
    }, {
        name: 'assetTypeId',
        type: 'int',
        defaultValue: undefined,
        allowNull: true
    }, {
        name: 'cost',
        type: 'float'
    }, {
        name: 'quantity',
        type: 'int'
    }, {
        name: 'purchaseDate',
        type: 'date',
        dateWriteFormat: 'c',
        defaultValue: undefined
    }],

    identifier: 'sequential',

    proxy: {
        type: 'rest',
        url: 'api/asset',
        writer: {
            type: 'json',
            writeAllFields: true
        }
    },

    validators: {
        name: {
            type: 'presence'
        },
        description: {
            type: 'presence'
        },
        assetTypeId: {
            type: 'presence'
        },
        purchaseDate: {
            type: 'presence'
        }
    }
});