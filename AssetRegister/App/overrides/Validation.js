
Ext.define('AssetRegister.data.Validation', {
    override: 'Ext.data.Validation',

    getValidationErrors: function (form) {
        var me = this,
            data = me.data,
            fields = form.getFields(),
            errors = {
                items: [],
                errorText: ''
            },
            error, dataIndex;

        for (var field in fields) {
            dataIndex = fields[field].getName();
            
            if (data[dataIndex] && 
                data[dataIndex] !== true) {
                errors.items.push({
                    field: field,
                    label: fields[field].getLabel(),
                    text: data[dataIndex]
                });
            }
        }

        if (errors.items.length > 0) {
            errors.errorText = '<ul>';

            for (var i = 0; i < errors.items.length; i++) {
                error = errors.items[i];
                errors.errorText += Ext.String.format('<li><span style="font-weight: bold;">{0}</span> {1}</li>', error.label, error.text);
            }

            errors.errorText += '</ul>';
        }

        return errors;
    },

    showValidationErrors: function (form) {
        var me = this,
            errors = me.getValidationErrors(form);

        AssetRegister.app.msg = Ext.Msg.alert('Validation errors', '<p>Please address the following validation errors:</p>' + errors.errorText, Ext.emptyFn);
    }
});