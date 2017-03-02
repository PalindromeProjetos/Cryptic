//@charset UTF-8
Ext.define( 'Smart.ux.classic.main.Main', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.panel.Panel',
        'Ext.plugin.Viewport',
        'Ext.container.Container'
    ],

    plugins: 'viewport',

    plain: true

    // layout: 'border',
    //
    // initComponent: function () {
    //     var me = this;
    //     me.makeDocked();
    //     me.buildItems();
    //     me.callParent();
    // }

});