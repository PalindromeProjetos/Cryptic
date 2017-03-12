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
            region: 'north',
            xtype: 'container',
            style: { "background-color":"#212121;" },
            layout: 'hbox',
            items: [
                {
                    flex: 1,
                    xtype: 'container'
                }, {
                    xtype: 'toolbar',
                    style: { "background-color":"transparent !important;" },
                    items: [
                        {
                            // allowDepress: false,
                            enableToggle: true,
                            iconCls: "fa fa-bars",
                            toggleHandler: 'setMicro'
                        }, {
                            iconAlign: 'left',
                            iconCls: "fa fa-power-off",
                            handler: 'setLogOut'
                        }
                    ]
                }
            ]
        }, {
            region: 'west',
            width: 250,
            split: true,
            layout: 'fit',
            border: false,
            scrollable: 'y',
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
            name: 'center',
            layout: 'fit'
        }
    ]

});