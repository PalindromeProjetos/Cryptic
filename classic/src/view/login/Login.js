//@charset UTF-8
Ext.define( 'Cryptic.view.login.Login', {
    extend: 'Smart.ux.classic.login.Login',

    xtype: 'app-login',

    router: 'login/comein',

    requires: [
        'Ext.plugin.Viewport',
        'Smart.ux.classic.login.Login',
        'Cryptic.view.main.MainController'
    ],

    controller: 'main',

    listeners: {
        render: 'onChangeRouter'
    }

});