//@charset UTF-8
Ext.define( 'Cryptic.controller.App', {
    extend: 'Smart.app.ControllerBase',

    views: [
        'main.Main',
        'login.Login'
    ],

    routes: {
        'app': {
            action: 'onSelectGoMain'
        },
        'login/comein': {
            action: 'onComeInGoView'
        },
        'login/forgot': {
            action: 'onForgotGoView'
        }
    },

    onChangeRouter: function (cmp) {
        var me = this;
        me.redirectTo(cmp.router);
    },

    onSelectGoMain: function () {
        Ext.create({ xtype: 'app-main' });
    },

    onForgotGoView: function () {
        var me = this,
            layout = me.getView().down('container[name=userlogin]').getLayout();
        layout.setActiveItem(1);
    },

    onComeInGoView: function () {
        Ext.create({ xtype: 'app-login' });
    }

});