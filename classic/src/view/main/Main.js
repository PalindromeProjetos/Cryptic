//@charset UTF-8
Ext.define( 'Cryptic.view.main.Main', {
    extend: 'Ext.form.Panel',

    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Cryptic.view.main.MainController'
    ],

    controller: 'main',

    title: Ext.manifest.name

});