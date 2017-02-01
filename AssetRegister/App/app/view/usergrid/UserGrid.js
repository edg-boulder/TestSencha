
Ext.define('AssetRegister.view.usergrid.UserGrid', {
    extend: 'Ext.grid.Grid',

    requires: [
        'AssetRegister.view.usergrid.UserGridModel',
		'AssetRegister.view.usergrid.UserGridController'
    ],

    xtype: 'usergrid',

    viewModel: {
        type: 'usergrid'
    },

    controller: 'usergrid',

    margin: 8,

    bind: {
        store: '{Users}'
    },

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'textfield',
            placeholder: 'Search'
        }]
    }],

    columns: [{
        text: 'Name',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Email',
        flex: 1,
        dataIndex: 'emailAddress'
    }],

    listeners: {
        selectionchange: 'onSelectionChange'
    }
});