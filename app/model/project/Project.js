//@charset UTF-8
Ext.define( 'Cryptic.model.project.Project', {
    extend: 'Smart.data.ModelBase',

    requires: [
        'Smart.data.ModelBase'
    ],

    route: {
        id:'projects/{id}',
        list: 'projects/list'
    },

    routePrefix: 'projects',

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