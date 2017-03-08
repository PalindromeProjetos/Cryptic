//@charset UTF-8
Ext.define( 'Cryptic.view.main.Main', {
    extend: 'Ext.panel.Panel',
    // extend: 'Smart.ux.classic.main.Main',
    
    xtype: 'app-main',

    requires: [
        'Ext.list.Tree',
        'Ext.plugin.Viewport',
        'Smart.ux.classic.main.Main',
        'Cryptic.view.main.MainController'
    ],

    plugins: 'viewport',

    controller: 'main',

    layout: 'border',

    headerPosition: 'bottom',

    header: {
        title: Ext.manifest.name,
        items: [
            {
                xtype: 'label',
                text: Ext.manifest.version,
                style: { color: 'white;' }
            }
        ]
    },

    // items: [
    //     {
    //         region: 'west',
    //         width: 250,
    //         split: true,
    //         //reference: 'treelistContainer',
    //         layout: {
    //             type: 'vbox',
    //             align: 'stretch'
    //         },
    //         border: false,
    //         scrollable: 'y',
    //         items: [
    //             {
    //                 xtype: 'treelist',
    //                 //reference: 'treelist',
    //                 bind: '{navItems}'
    //             }
    //         ]
    //     }, {
    //         region: 'center',
    //         bodyPadding: 10,
    //         bind: {
    //             html: '{selectionText}'
    //         }
    //     }
    // ],

    items: [
        {
            width: 250,
            region: 'west',
            xtype: 'treelist',
            title: 'OlaMundo',
            listeners: {
                selectionchange: 'onChangeRouter'
            },
            store: {
                root: {
                    expanded: true,
                    children: [{
                        text: 'detention',
                        leaf: true,
                        iconCls: 'x-fa fa-frown-o'
                    }, {
                        text: 'homework',
                        expanded: true,
                        iconCls: 'x-fa fa-folder',
                        children: [{
                            text: 'book report',
                            leaf: true,
                            iconCls: 'x-fa fa-book'
                        }, {
                            text: 'algebra',
                            leaf: true,
                            iconCls: 'x-fa fa-graduation-cap'
                        }]
                    }, {
                        text: 'buy lottery tickets',
                        leaf: true,
                        iconCls: 'x-fa fa-usd'
                    }]
                }
            }
        }, {
            region: 'center',
            bodyPadding: 10
        }
    ]

});