//@charset UTF-8
Ext.define( 'Cryptic.view.config.Configs', {
    extend: 'Ext.panel.Panel',

    xtype: 'configs',

    requires: [
        'Ext.grid.Panel',
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
                xtype: 'container',
                html: 'Modulos registrados no sistema'
            }, {
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