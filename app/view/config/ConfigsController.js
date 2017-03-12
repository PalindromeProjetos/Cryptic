//@charset UTF-8
Ext.define( 'Cryptic.view.config.ConfigsController', {
    extend: 'Smart.app.ViewControllerBase',

    alias: 'controller.configs',

    onLoadModule: function () {
        var store = Ext.getStore('clientmodule'),
            route = store.getRouteList().route.modules;

        store.getProxy().setRoute(route.replace('{clientid}',1));
        store.load();
    }

});