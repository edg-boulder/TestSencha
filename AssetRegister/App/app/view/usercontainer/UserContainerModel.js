Ext.define('AssetRegister.view.usercontainer.UserContainerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usercontainer-usercontainer',

    requires: [
        'AssetRegister.model.User'
    ],

    stores: {
        Users: {
            model: 'AssetRegister.model.User',
            autoLoad: true,
            listeners: {
                load: 'onStoreLoad'
            },
            sorters: [{
                property: 'name'
            }]
        }
    }
});
