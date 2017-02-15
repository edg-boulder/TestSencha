Ext.define('AssetRegister.view.userform.SimpleUserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.simpleuserform',

    record: null,

    onBeforeShow: function () {
        var me = this,
            view = me.getView();

        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });

        var user = new AssetRegister.model.SimpleUser();

        user.load({
            callback: function (record, operation, success) {
                if (success) {
                    view.setRecord(record);
                } else {
                    if (operation.getError().response) {
                        Ext.Msg.alert('Error', 'An error occurred during loading: ' + operation.getError().response.responseText);
                    } else {
                        Ext.Msg.alert('Error', 'An unknown error has occurred. Please try again.');
                    }
                }

                Ext.Viewport.setMasked(false);
            }
        });
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
            main, fieldset, password1, password2;

        Ext.Viewport.setMasked(false);

        if (success) {
            // Clear the password from the client-side record
            record.set('password', null);
            record.set('confirmPassword', null);

            record.endEdit();
            
            Ext.toast('User details saved!');
            
            fieldset = view.lookup('setPassword');
            password1 = view.lookup('password1');
            password2 = view.lookup('password2');

            fieldset.hide();
            password1.setValue('');
            password2.setValue('');

            main = view.up('main');
            main.getController().updateDisplayName(record.get('name'));
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

    onChangePassword: function () {
        var me = this,
            view = me.getView(),
            fieldset = view.lookup('setPassword');

        if (fieldset.isVisible()) {
            fieldset.hide();
        } else {
            fieldset.show();
        }
    }
});