//@charset UTF-8
Ext.define( 'Cryptic.store.client.Client', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.client',

    pageSize: 10,

    storeId: 'client',

    model: Ext.create('Cryptic.model.client.Client')

});