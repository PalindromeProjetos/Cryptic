//@charset UTF-8
Ext.define( 'Smart.data.StoreBase', {
    extend: 'Ext.data.Store',

    pageSize: 10,

    requires: [
        'Smart.data.ModelBase'
    ],

    model: Ext.create('Smart.data.ModelBase'),

    getRouteList: function () {
        var me = this,
            model = Ext.isFunction(me.model) ? (new me.model) : me.model;

        return model.getRouteList();
    }

});