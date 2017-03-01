//@charset UTF-8
Ext.define( 'Smart.ux.modern.login.Login', {
    extend: 'Ext.form.Panel',

    requires: [
        'Smart.ux.modern.login.LoginComeIn'
    ],

    shadow: true,

    items: [
        {
            height: 128,
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
                // align: 'middle'
            },
            items: [
                {
                    width: 128,
                    height: 128,
                    xtype: 'image',
                    src: '/cryptic/resources/img/Cryptic2.png'
                }
            ]
        }, {
            flex: 1,
            xtype: 'container',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    height: 250,
                    layout: 'card',
                    items: [
                        {
                            xtype: 'logincomein'
                        }
                    ]
                }
            ]

        }
    ]

});