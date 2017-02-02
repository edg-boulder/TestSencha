
Ext.define('AssetRegister.view.userform.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userform',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onSave: function () {
        var me = this,
            view = me.getView(),
            values = view.getValues(),
            record, validation, errors;

        record = Ext.create('AssetRegister.model.User', values);

        validation = record.getValidation();

        if (validation.isValid()) {
            // Apply form values to original record and submit it to the server. May still fail on the server.

            record = view.getRecord();
            record.setValues(values);
            record.save({
                callback: me.onSaveCallback
            });
        } else {
            // Show validation errors to the user
            validation.showValidationErrors(view);
        }
    },

    onSaveCallback: function (record, operation, success) {
        // If successful return user to the grid.
        // If errors occur on the server-side, show the errors to the user.
    },

    onBack: function () {
        var me = this;

        me.redirectTo('user');
    }
});