
Ext.define('AssetRegister.view.userform.SimpleUserForm',{
    extend: 'Ext.form.Panel',

    requires: [
        'AssetRegister.view.userform.SimpleUserFormModel',
		'AssetRegister.view.userform.SimpleUserFormController'
    ],

    xtype: 'simpleuserform',

    viewModel: {
        type: 'simpleuserform'
    },

    controller: 'simpleuserform',

    margin: 16,

    cls: 'appview',

    bodyPadding: 10,

    defaults: {
        labelAlign: 'top'
    },

    listeners: {
        beforeshow: 'onBeforeShow'
    },

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            iconCls: 'x-fa fa-floppy-o',
            text: 'Save',
            handler: 'onSave'
        }, {
            iconCls: 'x-fa fa-key',
            text: 'Change Password',
            handler: 'onChangePassword'
        }]
    }, {
        xtype: 'fieldset',
        maxWidth: 650,
        title: 'User Details',
        items: [{
            xtype: 'textfield',
            label: 'Name',
            name: 'name'
        }, {
            xtype: 'emailfield',
            label: 'Email Address',
            name: 'emailAddress'
        }]
    }, {
        xtype: 'fieldset',
        maxWidth: 650,
        title: 'Change Password',
        reference: 'setPassword',
        hidden: true,
        items: [{
            xtype: 'passwordfield',
            label: 'Password',
            name: 'password',
            reference: 'password1'
        }, {
            xtype: 'passwordfield',
            label: 'Confirm Password',
            name: 'confirmPassword',
            reference: 'password2'
        }]
    }, {
        xtype: 'fieldset',
        maxWidth: 650,
        title: 'API',
        items: [{
            xtype: 'textfield',
            label: 'API Key',
            name: 'apiKey',
            readOnly: true
        }]
    }]
});