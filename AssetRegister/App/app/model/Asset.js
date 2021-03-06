Ext.define('AssetRegister.model.Asset', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.validator.Range'
    ],

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
        },
        quantity: {
            type: 'range',
            min: 1
        },
        cost: {
            type: 'range',
            min: 0.01
        }
    }
});