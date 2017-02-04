Ext.define('AssetRegister.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',

    init: function () {
        var me = this;
            
        me.refreshDashboard();        
    },

    refreshDashboard () {
        var me = this,
            viewModel = me.getViewModel();

        // Get data for all 4 of the dashboard panels
        Ext.Ajax.request({
            url: 'api/Asset/GetDashboardStats'
        }).then(function (response) {
            var data = Ext.decode(response.responseText);

            viewModel.set('summary', data.summary);
            viewModel.getStore('CategorySpend').setData(data.categorySpend);
            viewModel.getStore('MonthlySpend').setData(data.monthlySpend);
        });
    }
    
});
