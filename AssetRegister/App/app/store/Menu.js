/**
 * Store that contains the application's navigation menu items
 */
Ext.define('AssetRegister.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'dashboard',
        xtype: 'dashboard',
        text: 'Asset Register Dashboard',
        icon: 'dashboard'
    }, {
        id: 'assets',
        xtype: 'panel',
        text: 'Assets',
        icon: 'bell-o'
    }, {
        id: 'users',
        xtype: 'usergrid',
        text: 'Users',
        icon: 'users'
    }, {
        id: 'about',
        xtype: 'panel',
        text: 'About',
        icon: 'info-circle'
    }]
});