/**
 * Created by dan on 12/21/16.
 */
Ext.define('AssetRegister.view.tabcontainer.TabContainer', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabcontainer',

    requires: [
        'AssetRegister.view.tabcontainer.TabContainerController',
        'AssetRegister.view.tabcontainer.TabContainerModel',
        'AssetRegister.view.usergrid.UserGrid'
    ],

    controller: 'tabcontainer',
    viewModel: 'tabcontainer',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'left',

    layout: {
        type: 'card',
        animation: {
            type: 'slide',
            direction: 'up'
        }
    },

    listeners: {
        activeitemchange: 'onTabChange'
    },

    items: [{
        historyToken: 'home',
        iconCls: 'x-fa fa-dashboard'
    }, {
        xtype: 'usergrid',
        historyToken: 'users',
        iconCls: 'x-fa fa-user'
    }]
});