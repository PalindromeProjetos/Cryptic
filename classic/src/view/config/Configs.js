//@charset UTF-8
Ext.define( 'Cryptic.view.config.Configs', {
    extend: 'Ext.panel.Panel',

    xtype: 'configs',

    requires: [
        'Ext.grid.Panel',
        'Cryptic.view.config.ConfigsController'
    ],

    controller: 'configs',

    layout: 'fit',

    showSmartAnimate: true,

    initComponent: function () {
        var me = this;

        me.buildItems();
        me.callParent();
    },

    buildItems: function () {
        var me = this,
            clientModule = Ext.create('Cryptic.store.client.ClientModule');

        me.items = [
            {
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
    },

    buttons: [
        {
            text: 'Load',
            handler: 'onLoadModule'
        }
    ]

});