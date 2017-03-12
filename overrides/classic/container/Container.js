//@charset UTF-8
Ext.define( 'Ext.overrides.container.Container', {
    override: 'Ext.container.Container',

    xdata: null,

    showSmartAnimate: false,

    animateClsIn: 'animated fadeInLeft',
    animateClsOut: 'animated fadeOutLeft',

    initComponent: function () {
        var me = this;

        if(me.showSmartAnimate) {
            me.onAfter( 'render', function() { me.addCls(me.animateClsIn); }, me);
            me.onBefore( 'destroy', function () { me.addCls(panelCenter.animateClsOut); }, me);
        }

        me.callParent();

		me.onAfter('afterrender', me.fnAfterRender, me);
    },

	fnAfterRender: function (panel, eOpts) {
        var me = this;
		me.getEl().on('keydown', me.fnElKeyDown, me);
	},
	
	fnElKeyDown: function(e) {
        var me = this;
		me.fireEvent('keydown', me, e, {});
    }

});