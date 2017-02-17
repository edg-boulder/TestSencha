
Ext.define('AssetRegister.view.dashboard.AssetValue',{
    extend: 'Ext.Container',

    requires: [
        'AssetRegister.view.dashboard.AssetValueModel'
    ],

    viewModel: {
        type: 'assetvalue'
    },

    xtype: 'assetvalue',

    bind: {
        html: '<div class="dashboardOuter"><div class="dashboardInner"><span style="font-weight: bold;">{summary.totalValue:currency("$", 0)}</span> <span style="font-size: 50%">total value</span></div></div>'
    }
});
