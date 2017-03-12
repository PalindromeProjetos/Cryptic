//@charset UTF-8
Ext.define( 'Smart.app.ViewControllerBase', {
    extend: 'Ext.app.ViewController',

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
            if(mainPage.items.getCount()) {
                Ext.defer(function () { updateRegion(); }, 300);
            }
            else updateRegion();

            return cmp;
        }
        catch(err) {
            console.info(err);
            return cmp;
        }
    }

});