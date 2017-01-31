Ext.define('AssetRegister.view.main.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmenu',

    privates: {
        onMenuItemTap: function (menu, index, el, record) {
            this.redirectTo(record.getId());
        }
    }
});