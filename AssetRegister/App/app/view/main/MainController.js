Ext.define('AssetRegister.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function () {
        var me = this,
            view = me.getView(),
            hiddenName = Ext.get('username'),
            displayName = view.lookup('displayName');
        
        if (hiddenName.getValue() != '') {
            displayName.setHtml('Welcome, <span style="font-weight: bolder;">' + Ext.String.htmlEncode(hiddenName.getValue()) + '</span>');
        }
    },

    routes: {
        ':type(/.*)?': {
            action: 'handleNavigationRoute'
            /*conditions: {
                ':type': '(dashboard|alerts|about)'
            }*/
        }
    },

    /*handleNavigationRoute: function(type, args) {
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
    },*/

    handleNavigationRoute: function (type, args) {
        var me = this,
            view = me.getView(),
            store = Ext.getStore('Menu'),
            entry = store.getById(type),
            title = me.lookup('title'),
            childView, childController, recordId;

        me.lookup('mainmenu').setSelection(entry);
        
        if (!entry) {
            return null;
        }

        childView = view.lookup(type);

        // If there is a message box visible, hide it on navigation through the app.
        // Need to store a reference to the current message box at the app level in order for this to work.
        if (AssetRegister.app.msg) {
            AssetRegister.app.msg.hide();
            AssetRegister.app.msg = null;
        }

        if (childView) {
            view.setActiveItem(view.lookup(type));

            childController = childView.getController();

            if (args) {
                recordId = Ext.Number.from(args.substring(1));
                childController.loadRecord(recordId);
            } else {
                // If the view being shown (e.g. Users) has a main view (e.g. the Grid of Users), show it
                if (childController.showMainView) {
                    childController.showMainView();
                }
            }
        }


        title.setHtml(entry.get('text'));
    },

    logout: function () {
        document.location = 'Logout.aspx';
    },

    onShowHideMenuClick: function (button) {
        var me = this,
            menu = me.lookup('mainmenu');

        if (menu.isHidden()) {
            menu.show();
        } else {
            menu.hide();
        }
    }
});
