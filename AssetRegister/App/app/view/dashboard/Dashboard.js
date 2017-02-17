
Ext.define('AssetRegister.view.dashboard.Dashboard',{
    extend: 'Ext.Container',

    xtype: 'dashboard',

    requires: [
        'AssetRegister.view.dashboard.DashboardController',
        'AssetRegister.view.dashboard.DashboardModel'
    ],

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },

    layout: 'vbox',

    platformConfig: {
        phone: {
            margin: 8,
            scrollable: true,
            cls: 'dashboard',

            items: [{
                xtype: 'assetcount',
                itemId: 'assetCount',
                height: 150,
                margin: '0 0 8 0',
                style: {
                    background: '#7986CB',
                    color: '#FFF'
                }
            }, {
                xtype: 'assetvalue',
                itemId: 'assetValue',
                height: 150,
                margin: '0 0 8 0',
                style: {
                    background: '#9575CD',
                    color: '#FFF'
                }
            }, {
                xtype: 'categoryspend',
                height: 300,
                margin: '0 0 8 0',
                style: {
                    background: '#78909C'
                }
            }, {
                xtype: 'monthlyspend',
                height: 300,
                style: {
                    background: '#039BE5'
                }
            }]
        },
        '!phone': {
            margin: 16,

            items: [{
                xtype: 'container',
                flex: 0.4,
                minHeight: 150,
                layout: 'hbox',
                cls: 'dashboard',
                items: [{
                    xtype: 'assetcount',
                    itemId: 'assetCount',
                    margin: '0 8 8 0',
                    flex: 1,
                    style: {
                        background: '#7986CB',
                        color: '#FFF'
                    }
                }, {
                    xtype: 'assetvalue',
                    itemId: 'assetValue',
                    margin: '0 0 8 8',
                    flex: 1,
                    style: {
                        background: '#9575CD',
                        color: '#FFF'
                    }
                }]
            }, {
                xtype: 'container',
                flex: 0.6,
                layout: 'hbox',
                cls: 'dashboard',
                items: [{
                    xtype: 'categoryspend',
                    margin: '8 8 0 0',
                    flex: 1,
                    style: {
                        background: '#78909C'
                    }
                }, {
                    xtype: 'monthlyspend',
                    margin: '8 0 0 8',
                    flex: 1,
                    style: {
                        background: '#039BE5'
                    }
                }]
            }]
        }
    }

    
});
