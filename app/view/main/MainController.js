//@charset UTF-8
Ext.define( 'Cryptic.view.main.MainController', {
    extend: 'Smart.app.ViewControllerBase',

    alias: 'controller.main'

    // routes: {
    //     'app': {
    //         action: 'onSelectGoMain'
    //     },
    //     'login/comein': {
    //         action: 'onComeInGoView'
    //     },
    //     'login/forgot': {
    //         action: 'onForgotGoView'
    //     }
    // },

    // onSelectGoMain: function () {
    //     var me = this,
    //         view = me.getView();
    //     if(view) view.destroy();
    //     Ext.create({ xtype: 'app-main' });
    // },
    //
    // onComeInGoView: function () {
    //     var me = this,
    //         view = me.getView();
    //     if(view) view.destroy();
    //     Ext.create({ xtype: 'app-login' });
    // },
    //
    // onForgotGoView: function () {
    //     var me = this,
    //         layout = me.getView().down('container[name=userlogin]').getLayout();
    //     layout.setActiveItem(1);
    // },
    //
    // onChangeRouter: function (cmp) {
    //     var me = this;
    //     me.redirectTo(cmp.router);
    // },
    //
    // onComeInSend: function () {
    //     var me = this,
    //         view = me.getView(),
    //         form = view.down('logincomein'),
    //         store = Ext.getStore('Users') || Ext.create('Cryptic.store.profile.Users'),
    //         model = store.getModel(),
    //         field = form.getValues(),
    //         routeList = (new model).getRouteList();
    //
    //     if(!form.isValid()) {
    //         return false;
    //     }
    //
    //     view.setLoading('Autenticando usuário...');
    //
    //     store.getProxy().setRoute(routeList.route.logincomein + '?username=' + field.username + '&password=' + field.password);
    //
    //     store.load({
    //         scope: me,
    //         callback: function(records, operation, success) {
    //             Ext.manifest.auth = '';
    //             view.setLoading(false);
    //
    //             if(success == true) {
    //                 view.destroy();
    //                 me.redirectTo('app');
    //                 Ext.manifest.auth = Ext.decode(operation.getResponse().responseText).message;
    //             }
    //         }
    //     });
    // },
    //
    // onForgotSend: function () {
    //     var me = this,
    //         view = me.getView(),
    //         form = view.down('loginforgot');
    //
    //     if(!form.isValid()) {
    //         return false;
    //     }
    //
    //     view.setLoading('Gerando senha convite...');
    //
    //     form.submit({
    //         scope: me,
    //         url: me.url,
    //         clientValidation: true,
    //         params: {
    //             action: 'select',
    //             method: 'selectUserForgot',
    //             rows: Ext.encode(form.getValues())
    //         },
    //         success: function() {
    //             me.onInviteGoView();
    //             view.setLoading(false);
    //             form.reset();
    //         },
    //         failure: me.onFormSubmitFailure
    //     });
    // }
    
});
