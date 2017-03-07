//@charset UTF-8
Ext.define( 'Smart.ux.classic.login.Login', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.panel.Panel',
        'Ext.container.Container',

        'Smart.ux.classic.login.LoginComeIn',
        'Smart.ux.classic.login.LoginForgot'
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