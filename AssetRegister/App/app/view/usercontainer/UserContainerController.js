Ext.define('AssetRegister.view.usercontainer.UserContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usercontainer',
    
    recordId: null,

    loadRecord: function (recordId) {
        var me = this,
            view = me.getView(),
            store = me.getStore('Users'),
            record;

        if (recordId == -1) {
            me.setRecord(Ext.create('AssetRegister.model.User'));
        } else if (!store.isLoaded()) {
            me.recordId = recordId;
        } else {
            record = store.getById(recordId);
            me.setRecord(record);
        }
    },

    onStoreLoad: function (store, records) {
        var me = this,
            record;

        if (me.recordId != null) {
            record = store.getById(me.recordId);

            if (record != null) {
                me.setRecord(record);
            } else {
                // TODO: Show exception - record not found
            }
        }
    },

    setRecord: function (record) {
        var me = this,
            view = me.getView(),
            form = view.down('userform'),
            fieldset, deleteButton;

        if (form == null) {
            form = view.add({
                xtype: 'userform',
                record: record
            });
        }

        form.reset();
        form.setRecord(record);
        fieldset = form.lookup('setPassword');
        deleteButton = form.down('button[text=Delete]');

        if (record.phantom) {
            fieldset.show();
            deleteButton.hide();
        } else {
            fieldset.hide();
            deleteButton.show();
        }

        view.setActiveItem(view.items.length - 1);
    },

    showMainView: function () {
        var me = this,
            view = me.getView();

        view.setActiveItem(0);
    }
});
