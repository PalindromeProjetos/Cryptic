//@charset UTF-8
Ext.define( 'Smart.ux.classic.main.Main', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.grid.Panel',
        'Ext.data.Store',
        'Ext.panel.Panel',
        'Ext.container.Container'
    ],

    plain: true,

    layout: 'center',

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

    items: [
        {
            xtype: 'container',
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    width: '30%',
                    minWidth: 500,
                    maxWidth: 550,
                    layout: 'card',
                    items: [
                        {
                            title: Ext.manifest.made,
                            xtype: 'panel'
                        }, {

                        }
                    ]
                }
            ]
        }
    ]

});