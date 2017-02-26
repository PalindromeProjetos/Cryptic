//@charset UTF-8
Ext.define( 'Ext.overrides.app.BaseController', {
    override: 'Ext.app.BaseController',
    
    onHistoryBack: function () {
        history.back();
    },

    notFullscreen: function () {
        var me = this;
        if (document.exitFullscreen) {
            document.exitFullscreen();
            me.fullscreenState = 'not';
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            me.fullscreenState = 'not';
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
            me.fullscreenState = 'not';
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            me.fullscreenState = 'not';
        }
    },

    yepFullscreen: function () {
        var me = this;
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
            me.fullscreenState = 'yep';
        }
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
            me.fullscreenState = 'yep';
        }
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
            me.fullscreenState = 'yep';
        }
        else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
            me.fullscreenState = 'yep';
        }
    },

    togglesFullscreen: function () {
        var me = this;

        if(me.fullscreenState == "yep") {
            me.notFullscreen();
        } else me.yepFullscreen();
    }

});