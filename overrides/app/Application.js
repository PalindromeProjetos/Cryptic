//@charset UTF-8
Ext.define( 'Ext.overrides.app.Application', {
    override: 'Ext.app.Application',

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }

});