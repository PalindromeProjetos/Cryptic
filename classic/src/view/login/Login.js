//@charset UTF-8
Ext.define( 'Cryptic.view.login.Login', {
    extend: 'Smart.ux.classic.login.Login',

    xtype: 'app-login',

    requires: [
        'Ext.plugin.Viewport',
        'Smart.ux.classic.login.Login'
    ],

    plugins: 'viewport'

});