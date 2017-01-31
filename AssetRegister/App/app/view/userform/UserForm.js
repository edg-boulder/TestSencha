
Ext.define('AssetRegister.view.userform.UserForm', {
    extend: 'Ext.form.Panel',

    requires: [
        'AssetRegister.view.userform.UserFormModel',
		'AssetRegister.view.userform.UserFormController'
    ],

    xtype: 'userform',

    viewModel: {
        type: 'userform'
    },

    controller: 'userform',

    title: 'User Details',
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
});