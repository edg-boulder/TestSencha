Ext.define('AssetRegister.view.main.Menu', {
    extend: 'AssetRegister.view.widgets.Sidebar',
    xtype: 'mainmenu',

    config: {
        selection: null
    },

    controller: 'mainmenu',
    cls: 'main-menu',
    layout: 'vbox',
    ui: 'dark',

    items: [{
        xtype: 'list',
        width: '50px',
        reference: 'menu',
        itemId: 'menu',
        scrollable: false,
        store: 'Menu',
        flex: 1,
        itemTpl: '<i class="fa fa-{icon}"></i>',
        itemConfig: {
            ui: 'large flat dark'
        },
        listeners: {
            itemtap: 'onMenuItemTap'
        }
    }],

    updateSelection: function (value) {
        this.lookup('menu').setSelection(value);
    }
});