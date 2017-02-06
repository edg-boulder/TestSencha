Ext.define('AssetRegister.model.User', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.validator.Presence'
    ],

    fields: [{
        name: 'name'
    }, {
        name: 'emailAddress'
    }, {
        name: 'password'
    }, {
        name: 'confirmPassword'
    }, {
        name: 'admin',
        type: 'boolean'
    }, {
        name: 'apiKey'
    }, {
        name: 'lastLogin',
        type: 'date'
    }, {
        name: 'lastAccess',
        type: 'date'
    }],

    identifier: 'sequential',

    proxy: {
        type: 'rest',
        url: 'api/user',
        writer: {
            type: 'json',
            writeAllFields: true
        }
    },

    validators: {
        name: { 
            type: 'presence'
        },
        emailAddress: [{
            type: 'presence'
        }, {
            type: 'email'
        }],
        password: {
            type: 'password'
        }
    }
});