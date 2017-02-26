//@charset UTF-8
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Smart.data': 'library/data',
        'Smart.data.proxy': 'library/data/proxy'
    }
});

Ext.application({
    name: 'Cryptic',

    extend: 'Cryptic.Application',

    requires: [
        'Cryptic.view.main.Main'
    ],

    mainView: 'Cryptic.view.main.Main'
	
});
