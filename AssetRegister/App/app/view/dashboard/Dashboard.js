
Ext.define('AssetRegister.view.dashboard.Dashboard',{
    extend: 'Ext.Container',

    xtype: 'dashboard',

    requires: [
        'AssetRegister.view.dashboard.DashboardController',
        'AssetRegister.view.dashboard.DashboardModel',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.interactions.Rotate'
    ],

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },

    margin: 16,

    layout: 'vbox',

    items: [{
        xtype: 'container',
        flex: 1,
        layout: 'hbox',
        cls: 'dashboard',
        items: [{
            xtype: 'container',
            margin: '0 8 8 0',
            style: {
                background: '#7986CB',
                color: '#FFF'
            },
            flex: 1,
            bind: {
                html: '<div class="dashboardOuter"><div class="dashboardInner"><span style="font-weight: bold;">{summary.totalCount}</span> <span style="font-size: 50%">assets</span></div></div>'
            }
        }, {
            xtype: 'container',
            margin: '0 0 8 8',
            style: {
                background: '#9575CD',
                color: '#FFF'
            },
            flex: 1,
            bind: {
                html: '<div class="dashboardOuter"><div class="dashboardInner"><span style="font-weight: bold;">{summary.totalValue:currency("$", 0)}</span> <span style="font-size: 50%"> total value</span></div></div>'
            }
        }]
    }, {
        xtype: 'container',
        flex: 1,
        layout: 'hbox',
        cls: 'dashboard',
        items: [{
            xtype: 'container',
            margin: '8 8 0 0',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 'polar',
                bind: '{CategorySpend}',
                interactions: ['rotate', 'itemhighlight'],
                legend: {
                    hidden: true
                },
                background: '#78909C',
                innerPadding: 5,
                series: [{
                    type: 'pie',
                    xField: 'totalValue',
                    label: {
                        field: 'assetTypeName',
                        color: '#FFFFFF',
                        fontSize: 20
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
        }, {
            xtype: 'container',
            margin: '8 0 0 8',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 'cartesian',
                bind: '{MonthlySpend}',
                /*insetPadding: {
                    top: 50,
                    bottom: 10,
                    left: 0,
                    right: 10
                },*/
                background: '#039BE5',
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
        }]
    }]
});
