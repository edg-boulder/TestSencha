/**
 * Created by dan on 12/21/16.
 */
Ext.define('AssetRegister.view.tabcontainer.TabContainer', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabcontainer',

    requires: [
        'AssetRegister.view.tabcontainer.TabContainerController',
        'AssetRegister.view.tabcontainer.TabContainerModel'
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
        title: 'Home',
        historyToken: 'home',
        iconCls: 'x-fa fa-home'
    },{
        xtype: 'users',
        title: 'Users',
        historyToken: 'users',
        iconCls: 'x-fa fa-user'
    },{
        title: 'Groups',
        historyToken: 'groups',
        iconCls: 'x-fa fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    },{
        title: 'Settings',
        historyToken: 'settings',
        iconCls: 'x-fa fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});