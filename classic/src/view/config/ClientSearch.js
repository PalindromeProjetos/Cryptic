/**
 * Created by samuc on 13/03/2017.
 */
//@charset UTF-8
Ext.define( 'Cryptic.view.config.ClientSearch', {
    extend: 'Smart.form.field.ComboSearch',

    xtype: 'clientsearch',

    requires: [
        'Cryptic.store.client.Client',
        'Smart.form.field.ComboSearch'
    ],

    displayField: 'name',

    pageSize: 10,
    showClear: true,

    store: 'Cryptic.store.client.Client'

});
