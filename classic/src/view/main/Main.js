//@charset UTF-8
Ext.define( 'Cryptic.view.main.Main', {
    extend: 'Smart.ux.classic.main.Main',
    
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Smart.ux.classic.main.Main'
    ],

    plugins: 'viewport'

});