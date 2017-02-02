Ext.define('AssetRegister.model.User', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'name'
    }, {
        name: 'emailAddress'
    }, {
        name: 'password'
    }, {
        name: 'admin',
        type: 'boolean'
    }],

    proxy: {
        type: 'rest',
        url: 'api/user'
    },

    validators: {
        name: { 
            type: 'presence'
        },
        emailAddress: [{
            type: 'presence'
        }, {
            type: 'email'
        }]
    }
});