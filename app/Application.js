//@charset UTF-8
Ext.define( 'Cryptic.Application', {
    extend: 'Smart.ux.app.Application',
    
    name: 'Cryptic',

    requires: [
        'Cryptic.controller.App'
    ],

    // stores: [
    //     'Cryptic.store.profile.Users'
    // ],

    launch: function () {
        var me = this;
        me.callParent(arguments);
        me.getController('App').redirectTo('login/comein');
    }

});