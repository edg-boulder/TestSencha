
Ext.define('AssetRegister.view.assetform.AssetForm',{
    extend: 'Ext.form.Panel',

    requires: [
        'AssetRegister.view.assetform.AssetFormController',
        'AssetRegister.view.assetform.AssetFormModel'
    ],

    xtype: 'assetform',

    controller: 'assetform',
    viewModel: {
        type: 'assetform'
    },
    
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
            text: 'Delete',
            handler: 'onDelete'
        }]
    }, {
        xtype: 'fieldset',
        title: 'Asset Details',
        items: [{
            xtype: 'textfield',
            label: 'Name',
            name: 'name'
        }, {
            xtype: 'selectfield',
            label: 'Type',
            name: 'assetTypeId',
            autoSelect: false,
            bind: {
                store: '{AssetTypes}'
            },
            displayField: 'name',
            valueField: 'id'
        }]
    }]
});
