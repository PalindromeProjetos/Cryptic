//@charset UTF-8
Ext.define( 'Cryptic.view.login.Login', {
    extend: 'Smart.ux.modern.login.Login',

    xtype: 'app-login',

    requires: [
        'Ext.MessageBox',
        'Ext.field.Text',
        'Ext.form.FieldSet',
        'Ext.field.TextArea',
        'Smart.ux.modern.login.Login',
        'Cryptic.view.main.MainController'
    ],

    controller: 'main'

});