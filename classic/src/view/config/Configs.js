//@charset UTF-8
Ext.define( 'Cryptic.view.config.Configs', {
    extend: 'Ext.panel.Panel',

    xtype: 'configs',

    requires: [
        'Ext.grid.Panel',
        'Ext.view.View',
        'Ext.grid.column.*',
        'Ext.grid.column.Action',
        'Ext.form.field.ComboBox',
        'Cryptic.view.config.ClientSearch',
        'Cryptic.view.config.ConfigsController'
    ],

    controller: 'configs',

    showSmartAnimate: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function () {
        var me = this;

        me.buildItems();
        me.callParent();
    },

    buildItems: function () {
        var me = this,
            token = Ext.create('Cryptic.store.client.Token'),
            client = Ext.create('Cryptic.store.client.Client'),
            clientModule = Ext.create('Cryptic.store.client.ClientModule');

        me.items = [
            {
                padding: '20px 0 20px 0',
                xtype: 'container',
                html: '<span style="font-size: 24px;">Modulos registrados no sistema</span>'
            }, {
                xtype: 'container',
                layout: 'anchor',
                items: [
                    {
                        fieldLabel: 'Cliente',
                        xtype: 'clientsearch',
                        pageSize: 0,
                        width: '30%',
                        minWidth: 350,
                        listeners: {
                            showclear: 'onShowClear',
                            select: 'onSelectClient'
                        }
                    }
                ]
            }, {
                flex: 2,
                height: 300,
                xtype: 'gridpanel',
                store: clientModule,
                columns: [
                    {
                        flex: 1,
                        text: 'Nome',
                        dataIndex: 'modulename'
                    }, {
                        xtype:'actioncolumn',
                        width: 30,
                        items: [
                            {
                                iconCls: 'x-fa fa-file-text',
                                tooltip: 'Editar modulo',
                                handler: 'onEditModule'
                            }
                        ]
                    }
                ],
                listeners: {
                    selectionchange: 'onSelectionChangeToken'
                }
            }, {
                flex: 5,
                xtype: 'dataview',
                store: token,
                tpl: new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div style="margin-bottom: 10px;" class="thumb-wrap">',
                    '<img src="{src}" />',
                    '<br/><span>{caption}</span>',
                    '</div>',
                    '</tpl>'
                ),
                itemSelector: 'div.thumb-wrap'
            }
        ];
    }

});