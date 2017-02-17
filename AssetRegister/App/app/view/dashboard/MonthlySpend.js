
Ext.define('AssetRegister.view.dashboard.MonthlySpend',{
    extend: 'Ext.Container',

    requires: [
        'AssetRegister.view.dashboard.MonthlySpendModel',
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric'
    ],

    viewModel: {
        type: 'monthlyspend'
    },

    xtype: 'monthlyspend',

    layout: 'fit',

    items: [{
        xtype: 'cartesian',
        bind: '{MonthlySpend}',
        background: '#039BE5',
        itemId: 'assetMonthlySpend',
        insetPadding: 30,
        axes: [{
            type: 'numeric',
            position: 'left',
            titleMargin: 20,
            minimum: 0,
            title: {
                color: '#fff',
                text: 'Spend ($k)'
            },
            style: {
                strokeStyle: '#fff'
            },
            label: {
                color: '#fff'
            }
        }, {
            type: 'category',
            position: 'bottom',
            style: {
                strokeStyle: '#fff'
            },
            label: {
                color: '#fff'
            }
        }],
        series: {
            type: 'bar',
            xField: 'date',
            yField: 'totalValue',
            colors: ['#78909C'],
            style: {
                minGapWidth: 15,
                stroke: '#EEEEEE'
            },
            label: {
                color: '#FFFFFF',
                field: 'totalValue',
                display: 'insideEnd',
                orientation: 'horizontal',
                renderer: function (value) {
                    return Ext.util.Format.currency(value, '$', 1) + 'k';
                }
            }
        }
    }]
});
