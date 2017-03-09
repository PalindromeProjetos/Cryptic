//@charset UTF-8
Ext.define( 'Cryptic.view.main.Main', {
    extend: 'Ext.panel.Panel',

    xtype: 'app-main',

    requires: [
        'Ext.list.Tree',
        'Ext.plugin.Viewport',
        'Cryptic.view.main.MainModel',
        'Cryptic.view.main.MainController'
    ],

    plugins: 'viewport',

    viewModel: 'main',
    controller: 'main',

    layout: 'border',

    items: [
        {
            region: 'west',
            width: 250,
            split: true,
            layout: 'fit',
            border: false,
            scrollable: 'y',
            iconCls: "fa fa-dribbble",
            title: Ext.manifest.name,
            items: [
                {
                    xtype: 'treelist',
                    bind: '{navItems}',
                    expanderFirst: false,
                    listeners: {
                        selectionchange: 'onChangeRouter'
                    }
                }
            ]
        }, {
            region: 'center',
            bodyPadding: 10,
            xtype: 'panel',
            name: 'center'
        }
    ]

});