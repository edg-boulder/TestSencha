
Ext.define('EXTJS_23647.data.Model', {
    override: 'Ext.data.Model',

    cancelEdit: function () {
        var me = this,
            editMemento = me.editMemento,
            validation = me.validation;

        if (editMemento) {
            me.editing = false;

            // reset the modified state, nothing changed since the edit began
            Ext.apply(me, editMemento);
            me.editMemento = null;

            if (validation && validation.syncGeneration !== me.generation) {
                validation.syncGeneration = 0;
            }
        }
    }
});