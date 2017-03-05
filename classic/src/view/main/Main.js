//@charset UTF-8
Ext.define( 'Cryptic.view.main.Main', {
    extend: 'Smart.ux.classic.main.Main',
    
    xtype: 'app-main',

    requires: [
        'Smart.ux.classic.main.Main',
        'Cryptic.view.main.MainController'
    ],

    controller: 'main'

});