//@charset UTF-8
Ext.define( 'Cryptic.model.profile.Token', {
    extend: 'Smart.data.ModelBase',

    requires: [
        'Smart.data.ModelBase'
    ],

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