Ext.define('AssetRegister.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',
    data: {
        summary: {
            totalCount: '',
            totalValue: ''
        }
    },

    stores: {
        CategorySpend: {
            fields: [{
                name: 'assetTypeId',
                type: 'int'
            }, {
                name: 'assetTypeName'
            }, {
                name: 'totalValue',
                type: 'float'
            }]
        },

        MonthlySpend: {
            fields: [{
                name: 'date'
            }, {
                name: 'totalValue',
                type: 'float'
            }]
        }
    }

});
