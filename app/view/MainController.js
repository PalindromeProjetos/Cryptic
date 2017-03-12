//@charset UTF-8
Ext.define( 'Cryptic.view.main.MainController', {
    extend: 'Smart.app.ViewControllerBase',

    alias: 'controller.main',

    requires: [
        'Smart.app.ViewControllerBase',
        'Cryptic.store.client.ClientModule'
    ],

    routes: {
        'app/configs': {
            action: 'onShowConfigs'
        }
    },

    onChangeRouter: function(rm, rc) {
        var me = this,
            router = rc ? rc.get('router') : null;
        if(router) {
            me.redirectTo( router );
        }
    },

    onShowConfigs: function () {
        var me = this,
            rc = me.getView().down('treelist').getSelection();

        me.onMainPageView({ xtype: 'config', iconCls: rc.get("iconCls") });
    },

    setMicro: function (button, pressed) {
        var me = this,
            tl = me.getView().down('treelist'),
            ct = tl.ownerCt;

        tl.setMicro(pressed);

        if (pressed) {
            me.oldWidth = ct.width;
            ct.setWidth(32);
        } else {
            ct.setWidth(me.oldWidth);
        }
    },

    setLogOut: function () {
        Ext.Msg.confirm('Encerramento do aplicativo', 'Esta aplicação será encerrada, confirma?',
            function (choice) {
                if (choice === 'yes') {
                    delete Ext.manifest.auth;
                    window.location.reload();
                }
            }
        );

    },

    onLoadModule: function (button) {
        var store = Ext.getStore('ClientModule') || Ext.create('Cryptic.store.client.ClientModule'),
            model = store.getModel(),
            route = (new model).getRouteList().route.module;

        store.getProxy().setRoute(route.replace('{clientid}',1));
        store.load();
    }

});