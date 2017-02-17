
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
            xtype: 'spacer',
            platformConfig: {
                '!phone': {
                    hidden: true
                }
            }
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
        title: 'Asset Details',
        items: [{
            xtype: 'textfield',
            label: 'Name',
            name: 'name'
        }, {
            xtype: 'textareafield',
            label: 'Description',
            name: 'description',
            maxRows: 5
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
    }, {
        xtype: 'fieldset',
        maxWidth: 650,
        title: 'Purchase',
        items: [{
            xtype: 'datepickerfield',
            label: 'Date',
            name: 'purchaseDate'
        }, {
            xtype: 'numberfield',
            label: 'Quantity',
            name: 'quantity',
            stepValue: 1,
            //minValue: 1,
            maxValue: 10000000
        }, {
            xtype: 'numberfield',
            label: 'Per Unit Cost',
            name: 'cost',
            stepValue: 0.01,
            //minValue: 0.01,
            maxValue: 10000000
        }]
    }]
});
