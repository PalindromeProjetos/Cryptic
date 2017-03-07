//@charset UTF-8
Ext.define( 'Cryptic.controller.App', {
    extend: 'Smart.app.ControllerBase',

    views: [
        'Cryptic.view.main.Main',
        'Cryptic.view.login.Login'
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

    refs: [
        {
            ref: 'main',
            selector: 'app-main'
        }, {
            ref: 'login',
            selector: 'app-login'
        }
    ],

    init: function () {
        var me = this;

        me.control({
            'app-login label': {
                click: me.onChangeRouter
            },
            'app-login button[name=comeinsend]': {
                click: me.onComeInSend
            }
        });
    },

    onSelectGoMain: function () {
        var me = this;
        if(me.getMain()) me.getMain().destroy();
        if(me.getLogin()) me.getLogin().destroy();
        Ext.create({ xtype: 'app-main' });
    },

    onComeInGoView: function () {
        var me = this;
        if(me.getMain()) me.getMain().destroy();
        if(me.getLogin()) me.getLogin().destroy();
        Ext.create({ xtype: 'app-login' });
    },

    onForgotGoView: function () {
        var me = this,
            layout = me.getLogin().down('container[name=userlogin]').getLayout();
        layout.setActiveItem(1);
    },

    onChangeRouter: function (cmp) {
        var me = this;
        me.redirectTo(cmp.router);
    },

    onComeInSend: function () {
        var me = this,
            view = me.getLogin(),
            form = view.down('logincomein'),
            store = Ext.getStore('Users') || Ext.create('Cryptic.store.profile.Users'),
            model = store.getModel(),
            field = form.getValues(),
            routeList = (new model).getRouteList();

        if(!form.isValid()) {
            return false;
        }

        view.setLoading('Autenticando usuário...');

        store.getProxy().setRoute(routeList.route.logincomein + '?username=' + field.username + '&password=' + field.password);

        store.load({
            scope: me,
            callback: function(records, operation, success) {
                Ext.manifest.auth = '';
                view.setLoading(false);

                if(success == true) {
                    view.destroy();
                    me.redirectTo('app');
                    Ext.manifest.auth = Ext.decode(operation.getResponse().responseText).message;
                }
            }
        });
    },

    onForgotSend: function () {
        var me = this,
            view = me.getView(),
            form = view.down('loginforgot');

        if(!form.isValid()) {
            return false;
        }

    }

});