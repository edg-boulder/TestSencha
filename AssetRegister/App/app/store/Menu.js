/**
 * Store that contains the application's navigation menu items
 */
Ext.define('AssetRegister.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'dashboard',
        text: 'Dashboard',
        icon: 'dashboard'
    }, {
        id: 'asset',
        text: 'Assets',
        icon: 'cubes'
    }, {
        id: 'user',
        text: 'Users',
        icon: 'users'
    }, {
        id: 'userdetails',
        text: 'User Details',
        icon: 'user'
    }, {
        id: 'about',
        text: 'About',
        icon: 'info-circle'
    }]
});