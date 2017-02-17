
Ext.define('AssetRegister.view.dashboard.CategorySpend',{
    extend: 'Ext.Container',

    requires: [
        'AssetRegister.view.dashboard.CategorySpendModel',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.interactions.Rotate'
    ],

    viewModel: {
        type: 'categoryspend'
    },

    xtype: 'categoryspend',

    layout: 'fit',

    items: [{
        xtype: 'polar',
        bind: '{CategorySpend}',
        interactions: ['rotate'],
        itemId: 'assetCategorySpend',
        legend: {
            hidden: true
        },
        background: '#78909C',
        innerPadding: 20,
        series: [{
            type: 'pie',
            xField: 'totalValue',
            label: {
                field: 'assetTypeName',
                color: '#FFFFFF',
                fontSize: 16
            },
            donut: 30,
            highlightCfg: {
                margin: 20
            },
            style: {
                stroke: '#EEEEEE',
                miterLimit: 10,
                lineCap: 'miter',
                lineWidth: 1
            }
        }],
        axes: []
    }]
});
