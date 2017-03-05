//@charset UTF-8
Ext.define( 'Cryptic.Application', {
    extend: 'Smart.ux.app.Application',
    
    name: 'Cryptic',

    launch: function () {
        var me = this;

        me.callParent();
        me.getController('App').redirectTo('login/comein');
    }

});