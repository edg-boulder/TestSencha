
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
    
    bind: {
        store: '{Users}'
    },

    disableSelection: true,

    /**
     * On phones just show one column with a custom renderer.
     */
    platformConfig: {
        phone: {
            hideHeaders: true,

            columns: [{
                text: 'Name',
                dataIndex: 'name',
                sortable: false,
                flex: 1
            }]
        },
        '!phone': {
            columns: [{
                text: 'Name',
                flex: 1,
                dataIndex: 'name'
            }, {
                text: 'Email',
                flex: 1,
                dataIndex: 'emailAddress'
            }, {
                xtype: 'booleancolumn',
                width: 110,
                text: 'Admin',
                trueText: 'Yes',
                falseText: 'No',
                dataIndex: 'admin'
            }, {
                xtype: 'datecolumn',
                text: 'Last Login',
                width: 200,
                dataIndex: 'lastLogin',
                format: 'Y-m-d @ h:ia'
            }, {
                xtype: 'datecolumn',
                text: 'Last Access',
                width: 200,
                dataIndex: 'lastAccess',
                format: 'Y-m-d @ h:ia'
            }]
        }
    },

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