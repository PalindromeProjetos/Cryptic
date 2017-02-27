//@charset UTF-8
Ext.define( 'Cryptic.view.login.Login', {
    extend: 'Ext.form.Panel',

    xtype: 'app-login',

    requires: [
        'Ext.MessageBox',
        'Ext.field.Text',
        'Ext.form.FieldSet',
        'Ext.field.TextArea',
        'Cryptic.view.main.MainController'
    ],

    controller: 'main',

    shadow: true,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [
        {
            xtype: 'fieldset',
            title: 'Personal Info',
            instructions: 'Favor entrar com as informações acima!',
            defaults: {
                // width: '100%',
                // labelWidth: '35%',
                labelAlign: 'top'
            },
            items: [
                {
                    xtype: 'textfield',
                    // name: 'name',
                    label: 'Nome',
                    placeHolder: 'Tom Roy',
                    labelAlign: 'placeholder',
                    // autoCapitalize: true,
                    required: true
                    // clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    // revealable: true,
                    // name : 'password',
                    label: 'Senha',
                    labelAlign: 'placeholder',
                    required: true
                    // clearIcon: true
                },
                {
                    xtype: 'emailfield',
                    // name: 'email',
                    label: 'Email',
                    placeHolder: 'me@sencha.com',
                    labelAlign: 'placeholder',
                    required: true
                    // clearIcon: true
                }
            ]
        }
    ]

});