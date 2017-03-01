//@charset UTF-8
Ext.define('Cryptic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        'login/forgot': {
            action: 'onForgotGoView'
        },
        'login/invite': {
            action: 'onInviteGoView'
        }
    },

    onRenderRouter: function(pnl) {
        var me = this;

        me.onChangeRouter(pnl);
    },

    onChangeRouter: function(btn) {
        var me = this;
        me.redirectTo(btn.router);
    },

    onForgotGoView: function () {
        var me = this,
            layout = me.getView().down('container[name=userlogin]').getLayout();
        layout.setActiveItem(1);
    },

    onInviteGoView: function () {
        var me = this,
            layout = me.getView().down('container[name=userlogin]').getLayout();
        layout.setActiveItem(0);
    }
    
    
});
