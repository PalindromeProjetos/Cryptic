//@charset UTF-8
Ext.define( 'Cryptic.model.client.ClientModule', {
    extend: 'Smart.data.ModelBase',

    requires: [
        'Smart.data.ModelBase'
    ],

    route: {
        modules:'clients/modules/{clientid}'
    },

    routePrefix: 'clients',

    startWithRoutePrefix: true,

    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'clientid',
            type: 'int'
        }, {
            name: 'moduleid',
            type: 'int'
        }, {
            name: 'modulename',
            type: 'auto'
        }
    ]

});