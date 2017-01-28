/**
 * Created by dan on 1/18/17.
 */
Ext.define('AssetRegister.view.users.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onSelectionChange: function(selModel, records) {
        var me = this;

        me.getView().lookup('userform').setRecord(records[0]);
    }
});