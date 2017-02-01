
Ext.define('AssetRegister.view.usergrid.UserGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usergrid',

    requires: [
        'AssetRegister.model.User'
    ],

    stores: {
        Users: {
            model: 'AssetRegister.model.User',
            autoLoad: true
        }
    }
});