//@charset UTF-8
Ext.define( 'Cryptic.store.project.Module', {
    extend: 'Ext.data.Store',

    alias: 'store.module',

    pageSize: 10,

    storeId: 'module',

    model: Ext.create('Cryptic.model.project.Module')

});