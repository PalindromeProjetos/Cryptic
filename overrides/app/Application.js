//@charset UTF-8
Ext.define( 'Ext.overrides.app.Application', {
    override: 'Ext.app.Application',

    onAppUpdate: function () {
        Ext.Msg.confirm('Atualização do aplicativo', 'Esta aplicação tem uma atualização, recarregar?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }

});