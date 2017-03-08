//@charset UTF-8
Ext.define( 'Smart.ux.classic.login.LoginComeIn', {
    extend: 'Ext.form.Panel',

    xtype: 'logincomein',

    layout: 'anchor',

    requires: [
        'Ext.form.Panel'
    ],

    defaults: {
        anchor: '100%'
    },

    listeners: {
        afterrender: function () {
            this.down('textfield[name=username]').focus(false, 200);
        }
    },

    initComponent: function () {
        var me = this;
        me.buildItems();
        me.callParent();
    },

    buildItems: function () {
        var me = this;

        me.items = [
            {
                xtype: 'label',
                text: 'Login ...',
                style: {
                    fontSize: '46px;',
                    display: 'table-cell;',
                    textAlign: 'center;',
                    lineHeight: '50px;'
                }
            }, {
                height: 20,
                xtype: 'container'
            }, {
                xtype: 'fieldcontainer',
                layout: 'anchor',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%',
                    allowBlank: false
                },
                items: [
                    {
                        name: 'username',
                        fieldLabel: 'Nome'
                    }, {
                        name: 'password',
                        vtype: 'alphanum',
                        inputType: 'password',
                        fieldLabel: 'Senha',
                        listeners: {
                            specialkey: function (field, e, eOpts) {
                                if (e.getKey() === e.ENTER) {
                                    var button = field.up('form').down('button');
                                    button.fireEvent('click', button);
                                }
                            }
                        }
                    }, {
                        xtype: 'button',
                        text: 'Sign In',
                        scale: "small",
                        formBind: true,
                        name: 'comeinsend'
                    }, {
                        margin: '20 0 0 0',
                        xtype: 'container',
                        style: {
                            fontSize: '14px;',
                            lineHeight: '20px;'
                        },
                        items:[
                            {
                                xtype: 'label',
                                router: 'login/forgot',
                                text: 'Esqueci minha senha!',
                                style: {
                                    cursor: 'pointer;',
                                    textDecoration: 'underline;'
                                }
                            }
                        ]
                    }, {
                        margin: '3 0 0 0',
                        xtype: 'container',
                        style: {
                            fontSize: '14px;',
                            lineHeight: '20px;'
                        },
                        items:[
                            {
                                xtype: 'label',
                                router: 'login/invite',
                                text: 'Código de ativação...',
                                style: {
                                    cursor: 'pointer;',
                                    textDecoration: 'underline;'
                                }
                            }
                        ]
                    }
                ]
            }
        ];
    }

});