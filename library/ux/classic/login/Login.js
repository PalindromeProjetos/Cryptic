//@charset UTF-8
Ext.define( 'Smart.ux.classic.login.Login', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.panel.Panel',
        'Ext.plugin.Viewport',
        'Ext.container.Container',

        'Smart.ux.classic.login.LoginComeIn',
        'Smart.ux.classic.login.LoginForgot'
    ],

    plugins: 'viewport',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

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
        //     flex: 1,
        //     minHeight: 128,
        //     xtype: 'container',
        //     layout: 'center',
        //     cls: 'x-dock-over',
        //     items: [
        //         {
        //             width: 128,
        //             height: 128,
        //             xtype: 'image',
        //             src: '/cryptic/resources/img/Cryptic2.png'
        //         }
        //     ]
        // }, {
            flex: 1,
            xtype: 'container',
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    layout: 'fit',
                    width: '20%',
                    minWidth: 300,
                    maxWidth: 350,
                    layout: 'card',
                    name: 'userlogin',
                    items: [
                        {
                            xtype: 'logincomein'
                        }, {
                            xtype: 'loginforgot'
                        }
                    ]
                }
            ]
        }
    ]

});