Ext.define('AssetRegister.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function() {
        var me = this,
            view = me.getView(),
            hiddenName = Ext.get('username'),
            displayName = view.lookup('displayName');
        
        displayName.setHtml(hiddenName.getValue());
    },

    routes: {
        ':type(/.*)?': {
            action: 'handleNavigationRoute'
            /*conditions: {
                ':type': '(dashboard|alerts|about)'
            }*/
        }
    },

    handleNavigationRoute: function(type, args) {
        var me = this,
            view = me.getView(),
            tabpanel = view.lookup('tabcontainer'), tab, items;
            //store = Ext.getStore('Menu'),
            //entry = store.getById(type),
            //title = me.lookup('title'),
            //downloadBtn = me.lookup('download');

        items = tabpanel.query('container[historyToken=' + type + ']', tabpanel.items);

        if (items.length > 0) {
            tab = items[0];

            tabpanel.setActiveItem(tab);
        }
    },

    logout: function () {
        document.location = 'Logout.aspx';
    }
});
