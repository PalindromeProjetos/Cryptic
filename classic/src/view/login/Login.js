//@charset UTF-8
Ext.define( 'Cryptic.view.login.Login', {
    extend: 'Ext.panel.Panel',

    xtype: 'app-login',

    requires: [
        'Ext.plugin.Viewport',
        'Cryptic.view.main.MainController'
    ],

    controller: 'main',

    layout: 'center',

    headerPosition: 'bottom',

    initComponent: function () {
        var me = this;

        me.header = {
            title: Ext.manifest.name,
            items: [
                {
                    xtype: 'label',
                    text: Ext.manifest.version,
                    style: {
                        color: 'white;'
                    }
                }
            ]
        };

        me.buildItems();
        me.callParent();
    },

    buildItems: function () {
        var me = this;

        me.items = [
            {
                xtype: 'form',
                width: '20%',
                minWidth: 300,
                maxWidth: 350,
                layout: 'card',
                items: [
                    {
                        xtype: 'textfield'
                        // }, {
                        //     xtype: 'loginforgot'
                        // }, {
                        //     xtype: 'logininvite'
                    }
                ]
            }
        ];
    }

});