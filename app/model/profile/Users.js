//@charset UTF-8
Ext.define( 'Cryptic.model.profile.Users', {
    extend: 'Smart.data.ModelBase',

    requires: [
        'Smart.data.ModelBase'
    ],

    route: {
        id:'users/{id}',
        list: 'users/list',
        logincomein:'users/logincomein'
    },

    routePrefix: 'users',

    startWithRoutePrefix: true,

    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'username',
            type: 'auto'
        }, {
            name: 'password',
            type: 'auto'
        }, {
            name: 'fullname',
            type: 'auto'
        }, {
            name: 'mainmail',
            type: 'auto'
        }, {
            name: 'isactive',
            type: 'boolean'
        }
    ]

});