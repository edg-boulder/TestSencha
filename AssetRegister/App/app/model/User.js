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
    }
});