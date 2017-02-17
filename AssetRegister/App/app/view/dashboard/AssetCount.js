
Ext.define('AssetRegister.view.dashboard.AssetCount',{
    extend: 'Ext.Container',

    requires: [
        'AssetRegister.view.dashboard.AssetCountModel'
    ],

    viewModel: {
        type: 'assetcount'
    },

    xtype: 'assetcount',
    
    bind: {
        html: '<div class="dashboardOuter"><div class="dashboardInner"><span style="font-weight: bold;">{summary.totalCount}</span> <span style="font-size: 50%">assets</span></div></div>'
    }
});
