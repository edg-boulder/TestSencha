Ext.define('AssetRegister.view.main.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmenu',

    privates: {
        onMenuItemTap: function (menu, index, el, record) {
            var me = this,
                view = me.getView();

            if (Ext.platformTags.phone) {
                view.hide();
            }

            this.redirectTo(record.getId());
        }
    }
});