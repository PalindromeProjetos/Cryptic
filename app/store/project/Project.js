//@charset UTF-8
Ext.define( 'Cryptic.store.project.Project', {
    extend: 'Ext.data.Store',

    alias: 'store.project',

    pageSize: 10,

    storeId: 'project',

    model: Ext.create('Cryptic.model.project.Project')

});