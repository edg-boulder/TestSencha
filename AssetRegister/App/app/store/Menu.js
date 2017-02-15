/**
 * Store that contains the application's navigation menu items
 */
Ext.define('AssetRegister.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'dashboard',
        text: 'Asset Register - Dashboard',
        icon: 'dashboard'
    }, {
        id: 'asset',
        text: 'Asset Register - Assets',
        icon: 'cubes'
    }, {
        id: 'user',
        text: 'Asset Register - Users',
        icon: 'users'
    }, {
        id: 'userdetails',
        text: 'Asset Register - User Details',
        icon: 'user'
    }, {
        id: 'about',
        text: 'Asset Register - About',
        icon: 'info-circle'
    }]
});