//@charset UTF-8
Ext.define( 'Cryptic.view.main.MainController', {
    extend: 'Smart.app.ViewControllerBase',

    alias: 'controller.main',

    requires: [
        'Smart.app.ViewControllerBase'
    ],

    onChangeRouter: function(rm, rc) {

        console.info(rm, rc);
        // var me = this,
        //     router = rc ? rc.get('router') : null;
        // if(router) {
        //     me.redirectTo( router );
        // }
    }

});