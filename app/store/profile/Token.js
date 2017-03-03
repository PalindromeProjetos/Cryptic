//@charset UTF-8
Ext.define( 'Cryptic.store.profile.Token', {
    extend: 'Ext.data.Store',

    alias: 'store.token',

    pageSize: 10,

    storeId: 'token',

    model: Ext.create('Cryptic.model.profile.Token')

});