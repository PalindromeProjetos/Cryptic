//@charset UTF-8
Ext.define( 'Cryptic.store.profile.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',

    pageSize: 10,

    storeId: 'users',

    model: Ext.create('Cryptic.model.profile.Users')

});