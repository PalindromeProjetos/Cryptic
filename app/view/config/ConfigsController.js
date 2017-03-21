//@charset UTF-8
Ext.define( 'Cryptic.view.config.ConfigsController', {
    extend: 'Smart.app.ViewControllerBase',

    alias: 'controller.configs',

    onShowClear: function (field, eOpts) {
        Ext.getStore('token').removeAll();
        Ext.getStore('clientmodule').removeAll();
    },

    onSelectClient: function (combo, record, eOpts) {
        var store = Ext.getStore('clientmodule'),
            route = store.getRouteList().route.modules;

        store.getProxy().setRoute(route.replace('{clientid}',combo.getValue()));
        store.load();
    },

    onEditModule: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);

        Ext.widget('configstoken').show(null,function () {
            this.down('hiddenfield[name=clientmoduleid]').setValue(rec.get('id'));
        });
    },

    onSelectionChangeToken: function (selectionModel, selected, eOpts) {
        var store = Ext.getStore('token'),
            route = store.getRouteList().route.tokens,
            record = selected[0];

        store.removeAll();

        if(!record) {
            return false;
        }

        store.getProxy().setRoute(route.replace('{clientmoduleid}',record.get('id')));
        store.load();
    },

    onSavePublicKey: function () {
        var me = this,
            view = me.getView();

        console.info(view);
        console.info(view.down('form').getValues());
    }

});