
Ext.define('AssetRegister.view.usergrid.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergrid',

    onItemTap: function (grid, index, target, record) {
        var me = this;

        me.redirectTo(record);
        grid.deselectAll();
    }
});