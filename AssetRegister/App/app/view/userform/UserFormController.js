
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
            record, validation;

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

            // TODO: Need to build a helper method that will automatically loop through a Validation object and return
            //      errors in a nicely formatted string array. Would also need to pass in a reference to the form, so that 
            //      it can extract the field labels from the form fields, and associate those with the errors.
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