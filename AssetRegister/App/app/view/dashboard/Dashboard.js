
Ext.define('AssetRegister.view.dashboard.Dashboard',{
    extend: 'Ext.panel.Panel',

    xtype: 'dashboard',

    requires: [
        'AssetRegister.view.dashboard.DashboardController',
        'AssetRegister.view.dashboard.DashboardModel'
    ],

    controller: 'dashboard-dashboard',
    viewModel: {
        type: 'dashboard-dashboard'
    },

    html: 'Hello, World!!'
});
