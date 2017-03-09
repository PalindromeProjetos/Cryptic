//@charset UTF-8
Ext.define( 'Cryptic.view.main.MainController', {
    extend: 'Smart.app.ViewControllerBase',

    alias: 'controller.main',

    requires: [
        'Smart.app.ViewControllerBase'
    ],

    routes: {
        'app/configs': {
            action: 'onShowConfigs'
        }
    },

    onMainPageView: function(config, fn) {
        var me = this,
            mainPage = me.getView().down('panel[name=center]'),
            cmp = mainPage ? mainPage.down(config.xtype) : null,
            updateRegion = function () {
                config.id = config.xtype;
                if(mainPage.items) mainPage.removeAll();
                cmp = mainPage.add( config );

                if (Ext.isFunction( fn ) == true) {
                    fn();
                }
            };

        try {
            if(mainPage) {
                if(mainPage.items.getCount()) {
                    var panelCenter = mainPage.down(mainPage.items.getAt(0));
                    mainPage.down(panelCenter.xtype).getEl().slideIn('l', {
                        easing: 'easeOut',
                        duration: 5000
                    });
                    // mainPage.down(panelCenter.xtype).removeCls(panelCenter.animateClsIn);
                    // mainPage.down(panelCenter.xtype).addCls(panelCenter.animateClsOut);
                    Ext.defer(function () { updateRegion(); }, 300);
                }
                else updateRegion();
            }
            return cmp;
        }
        catch(err) {
            console.info(err);
            return cmp;
        }
    },

    onChangeRouter: function(rm, rc) {
        var me = this,
            router = rc ? rc.get('router') : null;
        if(router) {
            me.redirectTo( router );
        }
    },

    onShowConfigs: function () {
        var me = this,
            rc = me.getView().down('treelist').getSelection();

        me.onMainPageView({ xtype: 'config', iconCls: rc.get("iconCls") });
    }

});