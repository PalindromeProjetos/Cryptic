//@charset UTF-8
Ext.define( 'Cryptic.model.project.Module', {
    extend: 'Smart.data.ModelBase',

    requires: [
        'Smart.data.ModelBase'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'projectid',
            type: 'int'
        }, {
            name: 'name',
            type: 'auto'
        }
    ]

});