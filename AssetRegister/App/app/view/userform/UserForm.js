
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

    bodyPadding: 10,

    defaults: {
        labelAlign: 'top'
    },

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            iconCls: 'x-fa fa-chevron-left',
            text: 'Back',
            handler: 'onBack'
        }, {
            iconCls: 'x-fa fa-floppy-o',
            text: 'Save',
            handler: 'onSave'
        }, {
            iconCls: 'x-fa fa-trash-o',
            text: 'Delete'
        }]
    }, {
        xtype: 'textfield',
        label: 'Name',
        name: 'name'
    }, {
        xtype: 'emailfield',
        label: 'Email Address',
        name: 'emailAddress'
    }, {
        xtype: 'checkboxfield',
        label: 'Admin User?',
        name: 'admin'
    }]
});