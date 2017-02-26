//@charset UTF-8
Ext.define( 'Smart.data.ModelBase', {
    extend: 'Ext.data.Model',

    requires: [
        'Smart.data.proxy.RestBase'
    ],

    route: {},

    routePrefix: '',	
	
    proxy: {
        type: 'restbase'
    },

    startWithRoutePrefix: false,

    constructor: function () {
        var me = this;

        me.callParent(arguments);

        if(me.startWithRoutePrefix == true) {
            me.setProxyByRoutePrefix();
        }
    },

    getRoute: function () {
        var me = this;
        return me.route;
    },

    getRoutePrefix: function () {
        var me = this;
        return me.routePrefix;
    },

    getRouteList: function () {
        var me = this;
        return {
            route: me.route,
            routePrefix: me.routePrefix
        };
    },

    setProxyByRoutePrefix: function () {
        var me = this;
        me.getProxy().setRoute(me.routePrefix);
    }

});