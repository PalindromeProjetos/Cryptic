//@charset UTF-8
Ext.define( 'Ext.overrides.data.Store', {
    override: 'Ext.data.Store',

    autoLoad: false,

    config: {
        extraParams: {}
    },

    setParams: function (params) {
        var me = this,
            extraParams = me.getExtraParams();

        //me.currentPage = 1;
        me.setExtraParams(Ext.Object.merge(extraParams,params));

        return me;
    }

});