//@charset UTF-8
Ext.define( 'Cryptic.model.client.Token', {
    extend: 'Smart.data.ModelBase',

    requires: [
        'Smart.data.ModelBase'
    ],

    route: {
        id:'clients/module-token/{id}',
        tokens:'clients/module-tokens/{clientmoduleid}'
    },

    routePrefix: 'clients/module-tokens',

    startWithRoutePrefix: true,

    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'clientmoduleid',
            type: 'int'
        }, {
            name: 'creationdate',
            type: 'date'
        }, {
            name: 'creationusername',
            type: 'auto'
        }, {
            name: 'days',
            type: 'int'
        }, {
            name: 'observation',
            type: 'auto'
        }
    ]

});