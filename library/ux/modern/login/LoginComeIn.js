//@charset UTF-8
Ext.define( 'Smart.ux.modern.login.LoginComeIn', {
    extend: 'Ext.form.Panel',

    xtype: 'logincomein',

    requires: [
        'Ext.form.Panel'
    ],

    fullscreen: true,

    items: [
        {
            xtype: 'fieldset',
            // title: 'Login ...',
            items: [
                {
                    xtype: 'textfield',
                    name : 'username',
                    label: 'Nome',
                    labelAlign: 'placeholder',
                    required: true,
                    clearIcon: false
                }, {
                    xtype: 'passwordfield',
                    name : 'password',
                    label: 'Senha',
                    labelAlign: 'placeholder',
                    required: true,
                    clearIcon: false
                // }, {
                //     xtype: 'emailfield',
                //     label: 'Email',
                //     placeHolder: 'me@sencha.com',
                //     labelAlign: 'placeholder',
                //     required: true,
                //     clearIcon: false
                }
            ]
        }, {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 0.5em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    text: 'Sign In',
                    ui: 'action',
                    height: 40
                }
            ]
        }
    ]

});