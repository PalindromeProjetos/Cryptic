//@charset UTF-8
Ext.define('Cryptic.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Cryptic',

    requires: [
        'Smart.ux.classic.login.Login',
        'Cryptic.view.login.Login'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],

    init: function() {
        var me = this;

        Cryptic.app = me;
        Ext.USE_NATIVE_JSON = true;
        Cryptic.appType = 'pro';
        Ext.enableAriaButtons = false;
        me.setDefaultToken(Ext.manifest.name.toLowerCase());
    },

    launch: function () {
        //<debug>
            Cryptic.appType = 'dev';
            document.cookie = 'XDEBUG_SESSION=PHPSTORM;path=/;';
        //</debug>
        Ext.create({ xtype: 'app-login' });
        Ext.manifest.appType = Cryptic.appType;
    }

});
