//@charset UTF-8
Ext.define( 'Cryptic.view.main.Main', {
    extend: 'Ext.form.Panel',

    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Cryptic.view.main.MainController'
    ],

    controller: 'main'

    // defaults: {
    //     tab: {
    //         iconAlign: 'top'
    //     },
    //     styleHtmlContent: true
    // },

});
