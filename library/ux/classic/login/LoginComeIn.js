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
                        height: 40,
                        formBind: true,
                        style: { color: 'white;' },
                        listeners: { click: 'onComeInSend' }
                    }, {
                        margin: '20 0 0 0',
                        xtype: 'container',
                        items:[
                            {
                                xtype: 'label',
                                router: 'login/forgot',
                                text: 'Esqueci minha senha!',
                                listeners: {
                                    click: 'onChangeRouter'
                                },
                                style: {
                                    cursor: 'pointer;',
                                    textDecoration: 'underline;'
                                }
                            }
                        ]
                    }, {
                        margin: '3 0 0 0',
                        xtype: 'container',
                        items:[
                            {
                                xtype: 'label',
                                router: 'login/invite',
                                text: 'Código de ativação...',
                                listeners: {
                                    click: 'onChangeRouter'
                                },
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
    },

    dockedItems_: [
        {
            xtype: 'panel',
            dock: 'bottom',
            layout: 'anchor',
            bodyStyle: 'padding-top: 20px;',
            style: {
                borderTop: 'dotted 1px #cecece'
            },
            defaultType: 'button',
            defaults: {
                anchor: '100%',
                scale: 'large'
            },
            items: [
                {
                    xtype: 'container'
                }, {
                    text: 'Login',
                    formBind: true,
                    showSmartTheme: 'blue',
                    listeners: {
                        click: 'onComeInSend'
                    }
                }, {
                    xtype: 'splitter'
                }, {
                    xtype: 'label',
                    text: 'Esqueci minha senha!',
                    listeners: {
                        click: 'onForgotGoView'
                    },
                    style: {
                        cursor: 'pointer;',
                        textDecoration: 'underline;'
                    }
                }, {
                    xtype: 'splitter'
                }, {
                    xtype: 'label',
                    text: 'Código de ativação...',
                    listeners: {
                        click: 'onInviteGoView'
                    },
                    style: {
                        cursor: 'pointer;',
                        textDecoration: 'underline;'
                    }
                }
            ]
        }
    ]

});