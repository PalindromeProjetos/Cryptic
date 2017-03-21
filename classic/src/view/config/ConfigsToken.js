//@charset UTF-8
Ext.define( 'Cryptic.view.config.ConfigsToken', {
    extend: 'Ext.window.Window',

    xtype: 'configstoken',

    requires: [
        'Ext.window.Window',
        'Cryptic.view.config.ConfigsController'
    ],

    width: 650,

    controller: 'configs',

    layout: 'fit',

    title: 'Gerar Chave Publica',

    initComponent: function () {
        var me = this;

        me.buildItems();
        me.callParent();
    },

    buildItems: function () {
        var me = this;

        me.items = [
            {
                xtype: 'form',
                padding: '20px 30px 20px 30px',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'clientmoduleid'
                    }, {
                        anchor: '30%',
                        fieldLabel: 'Dias',
                        xtype: 'numberfield',
                        name: 'days'
                    }, {
                        fieldLabel: 'Observações',
                        xtype: 'textareafield',
                        name: 'observation'
                    }
                ]
            }
        ];
    },

    buttons: [
        {
            text: 'Salvar',
            handler: 'onSavePublicKey'
        }, {
            text: 'Cancelar'
        }
    ]

});