/**
 * Created by dan on 1/18/17.
 */
Ext.define('AssetRegister.view.users.Users', {
    extend: 'Ext.Container',

    requires: [
        'AssetRegister.view.users.UsersModel',
		'AssetRegister.view.users.UsersController'
    ],

    xtype: 'users',

    viewModel: {
        type: 'users'
    },

    controller: 'users',

    layout: 'hbox',

    items: [{
        xtype: 'grid',
        title: 'Users',
        reference: 'usergrid',
        bind: '{users}',
        columns: [{
            text: 'Name',
            flex: 1,
            dataIndex: 'name'
        }],
        flex: 1,
        listeners: {
            selectionchange: 'onSelectionChange'
        }
    }, {
        xtype: 'formpanel',
        title: 'User Details',
        reference: 'userform',
        flex: 0.8,
        bodyPadding: 10,
        items: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                text: 'Save',
                iconCls: 'x-fa fa-disk'
            }, {
                text: 'Delete',
                iconCls: 'x-fa fa-delete'
            }]
        }, {
            xtype: 'textfield',
            label: 'Name',
            labelAlign: 'top',
            name: 'name'
        }, {
            xtype: 'textfield',
            label: 'Email Address',
            labelAlign: 'top',
            name: 'emailAddress'
        }, {
            xtype: 'checkboxfield',
            label: 'Admin User?',
            labelAlign: 'top',
            name: 'admin'
        }]
    }]
});