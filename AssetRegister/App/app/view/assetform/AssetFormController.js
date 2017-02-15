Ext.define('AssetRegister.view.assetform.AssetFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.assetform',

    record: null,

    refreshDashboard: function () {
        var me = this,
            view = me.getView();

        view.up('main').down('dashboard').getController().refreshDashboard();
    },

    onSave: function () {
        var me = this,
            view = me.getView(),
            values = view.getValues(),
            record = view.getRecord(),
            phantom = record.phantom,
            validation, errors;

        delete values['id'];

        record.beginEdit();
        record.set(values);

        validation = record.getValidation();

        if (validation.isValid()) {
            Ext.Viewport.setMasked({
                xtype: 'loadmask',
                message: 'Saving...'
            });

            record.save({
                callback: function (record, operation, success) {
                    me.onSaveCallback(record, operation, success, phantom);
                }
            });
        } else {
            // Show validation errors to the user
            validation.showValidationErrors(view);

            record.cancelEdit();
        }
    },

    onSaveCallback: function (record, operation, success, phantom) {
        var me = this,
            view = me.getView(),
            container = view.up('assetcontainer'),
            store = container.getViewModel().getStore('Assets'),
            assetTypesStore = container.getViewModel().getStore('AssetTypes'),
            assetTypeId = record.get('assetTypeId');

        Ext.Viewport.setMasked(false);

        if (success) {
            record.set('assetTypeName', assetTypesStore.getById(assetTypeId).get('name'));
            record.endEdit();

            // If this is a new record, add it to the store
            if (phantom) {
                store.add(record);
            }

            Ext.toast('Record saved!');

            // Return to grid
            me.goBack();

            // Refresh the dashboard stats
            me.refreshDashboard();
        } else {
            if (operation.getError().response) {
                Ext.Msg.alert('Error', 'An error occurred during saving: ' + operation.getError().response.responseText);
            } else {
                Ext.Msg.alert('Error', 'An unknown error has occurred. Please try again.');
            }

            record.cancelEdit();
        }
    },

    onBack: function () {
        var me = this;

        me.goBack();
    },

    goBack () {
        var me = this;

        me.redirectTo('asset');
    },

    onDelete: function () {
        var me = this;

        Ext.Msg.confirm('Confirm deletion', 'Are you sure you want to permanently delete this asset?', me.onConfirmDelete, me);
    },

    onConfirmDelete: function (buttonText) {
        if (buttonText == 'no') {
            return;
        }

        var me = this,
            view = me.getView(),
            record = view.getRecord();

        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Deleting...'
        });

        record.erase({
            callback: function (record, operation, success) {
                me.onDeleteCallback(record, operation, success);
            }
        });
    },

    onDeleteCallback: function (record, operation, success) {
        var me = this;

        Ext.Viewport.setMasked(false);

        if (success) {
            Ext.toast('Record deleted!');

            me.refreshDashboard();

            me.goBack();
        } else {
            Ext.Msg.alert('Error', 'An error occurred during deletion: ' + operation.getError().response.responseText);
        }
    }
});