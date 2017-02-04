
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

    disableSelection: true,

    columns: [{
        text: 'Name',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Email',
        flex: 1,
        dataIndex: 'emailAddress'
    }, {
        xtype: 'datecolumn',
        text: 'Last Login',
        width: 240,
        dataIndex: 'lastLogin',
        format: 'Y-m-d @ h:ia O'
    }, {
        xtype: 'datecolumn',
        text: 'Last Access',
        width: 200,
        dataIndex: 'lastAccess',
        format: 'Y-m-d @ h:ia'
    }],

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            text: 'Add New',
            handler: 'onAdd'
        }]
    }],

    listeners: {
        itemtap: 'onItemTap'
    }
});