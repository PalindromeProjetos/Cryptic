//@charset UTF-8
Ext.define( 'Smart.ux.classic.main.Main', {
    extend: 'Ext.panel.Panel',

    id: 'app-main',

    requires: [
        'Ext.panel.Panel',
        // 'Ext.plugin.Viewport',
        'Ext.container.Container'
    ],

    plugins: 'viewport'

    // layout: 'border',
    //
    // plain: true,
    //
    // module: {},

    // initComponent: function () {
    //     var me = this;
    //     me.makeDocked();
    //     me.buildItems();
    //     me.callParent();
    // },


});