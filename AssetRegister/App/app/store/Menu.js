/**
 * Store that contains the application's navigation menu items
 */
Ext.define('AssetRegister.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'dashboard',
        xtype: 'dashboard',
        text: 'Asset Register - Dashboard',
        icon: 'dashboard'
    }, {
        id: 'asset',
        xtype: 'panel',
        text: 'Asset Register - Assets',
        icon: 'cubes'
    }, {
        id: 'user',
        xtype: 'usergrid',
        text: 'Asset Register - Users',
        icon: 'users'
    }, {
        id: 'about',
        xtype: 'panel',
        text: 'Asset Register - About',
        icon: 'info-circle'
    }]
});