/**
 * Created by dan on 1/18/17.
 */
Ext.define('AssetRegister.view.users.UsersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.users',

    stores: {
        users: {
            model: 'AssetRegister.model.User',
            autoLoad: true
        }
    }
});