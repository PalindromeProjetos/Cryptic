//@charset UTF-8
Ext.define( 'Cryptic.view.config.Configs', {
    extend: 'Ext.panel.Panel',

    xtype: 'configs',

    requires: [
        'Ext.grid.Panel',
        'Ext.form.field.ComboBox',
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
                xtype: 'combobox',
                store: {
                    fields: ['abbr', 'name'],
                    data : [
                        {"abbr":"AL", "name":"Alabama"},
                        {"abbr":"AK", "name":"Alaska"},
                        {"abbr":"AZ", "name":"Arizona"}
                    ]
                },
                fieldLabel: 'Choose State',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'abbr',
                pageSize: 0
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
    },

    buttons: [
        {
            text: 'Load',
            handler: 'onLoadModule'
        }
    ]

});