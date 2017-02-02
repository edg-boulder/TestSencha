
Ext.define('AssetRegister.view.usergrid.UserGrid', {
    extend: 'Ext.grid.Grid',

    requires: [
        'AssetRegister.view.usergrid.UserGridModel',
		'AssetRegister.view.usergrid.UserGridController',
        'Ext.grid.plugin.Editable'
    ],

    xtype: 'usergrid',

    viewModel: {
        type: 'usergrid'
    },

    controller: 'usergrid',

    plugins: [
        'grideditable'
    ],

    bind: {
        store: '{Users}'
    },

    columns: [{
        text: 'Name',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Email',
        flex: 1,
        dataIndex: 'emailAddress'
    }],

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            text: 'Add New'
        }]
    }],

    listeners: {
        itemtap: 'onItemTap'
    }
});