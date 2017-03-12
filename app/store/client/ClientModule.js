//@charset UTF-8
Ext.define( 'Cryptic.store.client.ClientModule', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.clientmodule',

    pageSize: 10,

    storeId: 'clientmodule',

    model: Ext.create('Cryptic.model.client.ClientModule')

});