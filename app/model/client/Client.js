//@charset UTF-8
Ext.define( 'Cryptic.model.client.Client', {
    extend: 'Smart.data.ModelBase',

    requires: [
        'Smart.data.ModelBase'
    ],

    route: {
        id:'clients/{id}',
        list: 'clients/list'
    },

    routePrefix: 'clients',

    startWithRoutePrefix: true,

    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'name',
            type: 'auto'
        }
    ]

});