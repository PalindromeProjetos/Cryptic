//@charset UTF-8
Ext.define( 'Smart.ux.app.Application', {
    extend: 'Ext.app.Application',

     requires: [
         'Ext.app.Application'
     ],

     init: function () {
         Ext.USE_NATIVE_JSON = true;
         Ext.manifest.appType = 'pro';
         Ext.enableAriaButtons = false;
     },

     launch: function () {
         //<debug>
         Ext.manifest.appType = 'dev';
         document.cookie = 'XDEBUG_SESSION=PHPSTORM;path=/;';
         //</debug>
     }

});