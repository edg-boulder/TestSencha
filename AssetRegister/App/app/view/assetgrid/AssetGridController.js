Ext.define('AssetRegister.view.assetgrid.AssetGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.assetgrid',

    onItemTap: function (grid, index, target, record) {
        var me = this;

        me.redirectTo(record);
        grid.deselectAll();
    },

    onAdd: function () {
        var me = this;

        me.redirectTo('asset/-1');
    }
});