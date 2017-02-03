
Ext.define('AssetRegister.data.validator.Password', {
    extend: 'Ext.data.validator.Validator',
    alias: 'data.validator.password',
    
    validate: function (value, record) {
        if (!record.phantom && (value == null || value.trim() == '')) {
            return true;
        } else {
            if (value == null || value.length < 8) {
                return 'Does not meet requirements (8 character minimum)';
            }

            if (value != record.get('confirmPassword')) {
                return 'Does not match confirmation password';
            }
            
            if (value == record.get('emailAddress')) {
                return 'Can not be the same as Email address';
            }

            return true;
        }
    }
});