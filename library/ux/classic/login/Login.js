//@charset UTF-8
Ext.define( 'Smart.ux.classic.login.Login', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.panel.Panel',
        // 'Ext.plugin.Viewport',
        'Ext.container.Container',
        'Smart.ux.classic.login.LoginComeIn'
        // 'Smart.ux.classic.login.LoginForgot',
        // 'Smart.ux.classic.login.LoginInvite'
    ],

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
                xtype: 'container',
                width: '20%',
                minWidth: 300,
                maxWidth: 350,
                layout: 'card',
                items: [
                    {
                        xtype: 'logincomein'
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