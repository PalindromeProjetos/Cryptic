//@charset UTF-8
Ext.define( 'Cryptic.view.config.ConfigsController', {
    extend: 'Smart.app.ViewControllerBase',

    alias: 'controller.configs',

    onShowClear: function (field, eOpts) {
        Ext.getStore('clientmodule').removeAll();
    },

    onSelectClient: function (combo, record, eOpts) {
        var store = Ext.getStore('clientmodule'),
            route = store.getRouteList().route.modules;

        store.getProxy().setRoute(route.replace('{clientid}',combo.getValue()));
        store.load();
    }

});