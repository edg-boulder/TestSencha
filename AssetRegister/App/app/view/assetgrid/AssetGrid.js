
Ext.define('AssetRegister.view.assetgrid.AssetGrid',{
    extend: 'Ext.grid.Grid',

    requires: [
        'AssetRegister.view.assetgrid.AssetGridController',
        'AssetRegister.view.assetgrid.AssetGridModel'
    ],

    xtype: 'assetgrid',

    controller: 'assetgrid',
    viewModel: {
        type: 'assetgrid'
    },

    bind: {
        store: '{Assets}'
    },

    disableSelection: true,

    columns: [{
        text: 'Name',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Type',
        flex: 1,
        dataIndex: 'assetTypeName'
    }, {
        xtype: 'numbercolumn', 
        format: '0,000',
        align: 'right',
        width: 150,
        dataIndex: 'quantity',
        text: 'Quantity'
    }, {
        xtype: 'numbercolumn',
        format: '$0,000.00',
        align: 'right',
        width: 150,
        dataIndex: 'cost',
        text: 'Unit Cost'
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
