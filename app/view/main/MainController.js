//@charset UTF-8
Ext.define( 'Cryptic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Cryptic.model.profile.Users'
    ],

    routes: {
        'login/forgot': {
            action: 'onForgotGoView'
        },
        'login/comein': {
            action: 'onComeInGoView'
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

    onComeInGoView: function () {
        var me = this,
            layout = me.getView().down('container[name=userlogin]').getLayout();
        layout.setActiveItem(0);
    },

    onComeInSend: function () {
        var me = this,
            view = me.getView(),
            form = view.down('logincomein'),
            store = Ext.getStore('Users') || Ext.create('Cryptic.store.profile.Users'),
            model = store.getModel(),
            routeList = (new model).getRouteList();

        if(!form.isValid()) {
            return false;
        }

        var data = form.getValues();

        store.getProxy().setRoute(routeList.route.logincomein + '?username=' + data.username + '&password=' + data.password);

        store.load();

        // view.setLoading('Autenticando usuário...');

        // form.submit({
        //     scope: me,
        //     url: me.url,
        //     clientValidation: true,
        //     params: {
        //         action: 'select',
        //         method: 'selectComein',
        //         module: Ext.manifest.name,
        //         fields: Ext.encode(['id','username','fullname','password','filedata','fileinfo','isactive'])
        //     },
        //     success: me.onComeInSendSuccess,
        //     failure: me.onFormSubmitFailure
        // });
    },

    onForgotSend: function () {
        var me = this,
            view = me.getView(),
            form = view.down('loginforgot');

        if(!form.isValid()) {
            return false;
        }

        view.setLoading('Gerando senha convite...');

        form.submit({
            scope: me,
            url: me.url,
            clientValidation: true,
            params: {
                action: 'select',
                method: 'selectUserForgot',
                rows: Ext.encode(form.getValues())
            },
            success: function() {
                me.onInviteGoView();
                view.setLoading(false);
                form.reset();
            },
            failure: me.onFormSubmitFailure
        });
    }
    
});
