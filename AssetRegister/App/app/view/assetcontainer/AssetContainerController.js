Ext.define('AssetRegister.view.assetcontainer.AssetContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.assetcontainer',
  
    recordId: null,

    loadRecord: function (recordId) {
        var me = this,
            view = me.getView(),
            store = me.getStore('Assets'),
            record;

        if (recordId == -1) {
            me.setRecord(Ext.create('AssetRegister.model.Asset'));
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
            form = view.down('assetform'),
            fieldset;

        if (form == null) {
            form = view.add({
                xtype: 'assetform',
                record: record
            });
        }

        form.reset();
        form.setRecord(record);

        view.setActiveItem(view.items.length - 1);
    },

    showMainView: function () {
        var me = this,
            view = me.getView();

        view.setActiveItem(0);
    }
});