//@charset UTF-8
Ext.define( 'Cryptic.view.config.Configs', {
    extend: 'Ext.panel.Panel',

    xtype: 'configs',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.*',
        'Ext.form.field.ComboBox',
        'Cryptic.view.config.ClientSearch',
        'Cryptic.view.config.ConfigsController'
    ],

    controller: 'configs',

    showSmartAnimate: true,

    initComponent: function () {
        var me = this;

        me.buildItems();
        me.callParent();
    },

    buildItems: function () {
        var me = this,
            client = Ext.create('Cryptic.store.client.Client'),
            clientModule = Ext.create('Cryptic.store.client.ClientModule');

        me.items = [
            {
                padding: '20px 0 20px 0',
                xtype: 'container',
                html: '<span style="font-size: 24px;">Modulos registrados no sistema</span>'
            }, {
                fieldLabel: 'Cliente',
                xtype: 'clientsearch',
                pageSize: 0,
                width: '30%',
                minWidth: 350,
                listeners: {
                    showclear: 'onShowClear',
                    select: 'onSelectClient'
                }
            }, {
                xtype: 'gridpanel',
                store: clientModule,
                columns: [
                    {
                        flex: 1,
                        text: 'Nome',
                        dataIndex: 'modulename'
                    }
                ]
            }
        ];
    }

});