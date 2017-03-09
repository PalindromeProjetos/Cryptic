//@charset UTF-8
Ext.define( 'Cryptic.view.config.Configs', {
    extend: 'Ext.panel.Panel',

    xtype: 'config',

    requires: [
        'Cryptic.view.main.MainController'
    ],

    controller: 'main',

    title: Ext.manifest.name

});