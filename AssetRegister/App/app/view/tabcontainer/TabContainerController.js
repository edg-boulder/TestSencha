/**
 * Created by dan on 12/21/16.
 */
Ext.define('AssetRegister.view.tabcontainer.TabContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tabcontainer',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onTabChange: function(tabpanel, newTab) {
        var me = this;

        me.redirectTo(newTab.historyToken);
    }
});