
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
            xtype: 'spacer',
            platformConfig: {
                '!phone': {
                    hidden: true
                }
            }
        }, {
            iconCls: 'x-fa fa-key',
            reference: 'changepassword',
            platformConfig: {
                '!phone': {
                    text: 'Change Password'
                }
            },
            handler: 'onChangePassword'
        }, {
            iconCls: 'x-fa fa-floppy-o',
            reference: 'save',
            platformConfig: {
                '!phone': {
                    text: 'Save'
                }
            },
            handler: 'onSave'
        }, {
            iconCls: 'x-fa fa-trash-o',
            reference: 'delete',
            platformConfig: {
                '!phone': {
                    text: 'Delete'
                }
            },            
            handler: 'onDelete'
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
        }, {
            xtype: 'checkboxfield',
            label: 'Admin User?',
            name: 'admin'
        }]
    }, {
        xtype: 'fieldset',
        maxWidth: 650,
        title: 'Set Password',
        reference: 'setPassword',
        hidden: true,
        items: [{
            xtype: 'passwordfield',
            label: 'Password',
            name: 'password'
        }, {
            xtype: 'passwordfield',
            label: 'Confirm Password',
            name: 'confirmPassword'
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