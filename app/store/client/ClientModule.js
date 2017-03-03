//@charset UTF-8
Ext.define( 'Cryptic.store.client.ClientModule', {
    extend: 'Ext.data.Store',

    alias: 'store.clientmodule',

    pageSize: 10,

    storeId: 'clientmodule',

    model: Ext.create('Cryptic.model.client.ClientModule')

});