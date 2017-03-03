//@charset UTF-8
Ext.define( 'Cryptic.model.client.ClientModule', {
    extend: 'Smart.data.ModelBase',

    requires: [
        'Smart.data.ModelBase'
    ],

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
        }
    ]

});