Ext.define('AssetRegister.model.SimpleUser', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.validator.Email',
        'AssetRegister.data.validator.Password'
    ],

    fields: [{
        name: 'name'
    }, {
        name: 'emailAddress'
    }, {
        name: 'password'
    }, {
        name: 'confirmPassword'
    }],

    identifier: 'sequential',

    proxy: {
        type: 'rest',
        url: 'api/simpleuser',
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