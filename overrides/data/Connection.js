//@charset UTF-8
Ext.define( 'Ext.overrides.data.Connection', {
    override: 'Ext.data.Connection',

    // timeout: 30000,

    onRequestComplete: function ( request ) {

    },

    request: function(options) {
        options = options || {};

        options.headers = {
            'Authorization': Ext.manifest.auth ? 'Bearer ' + Ext.manifest.auth : '',
            'Credential-Type' : Ext.manifest.appType,
            'Credential-Name' : 'Palindrome Projetos'
        };

        return this.callParent(arguments);
    }

});