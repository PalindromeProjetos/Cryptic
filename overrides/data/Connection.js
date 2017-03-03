//@charset UTF-8
Ext.define( 'Ext.overrides.data.Connection', {
    override: 'Ext.data.Connection',

    // timeout: 30000,

    onRequestComplete: function ( request ) {

    },

    request: function(options) {
        var headers = {
                'Credential-Type' : Ext.manifest.appType
            };

        if(Ext.manifest.auth) {
            headers.Authorization = 'Bearer ' + Ext.manifest.auth;
        }

        options.headers = headers;

        return this.callParent(arguments);
    }

});