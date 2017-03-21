//@charset UTF-8
Ext.define( 'Cryptic.store.client.Token', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.token',

    pageSize: 10,

    storeId: 'token',

    model: Ext.create('Cryptic.model.client.Token')

});