//@charset UTF-8
Ext.define( 'Cryptic.view.config.Configs', {
    extend: 'Ext.panel.Panel',

    xtype: 'config',

    requires: [
        'Ext.grid.Panel',
        'Cryptic.view.main.MainController'
    ],

    controller: 'main',

    title: Ext.manifest.name,

    layout: 'fit',

    items: [
        {
            xtype: 'gridpanel',
            store: Ext.create('Ext.data.Store', {
                storeId: 'simpsonsStore',
                fields:[ 'name', 'email', 'phone'],
                data: [
                    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
                    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
                    { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
                    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
                ]
            }),
            columns: [
                { text: 'Name', dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone' }
            ]
        }
    ]

});