//@charset UTF-8
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Smart.app': 'library/app',
        'Smart.data': 'library/data',
        'Smart.data.proxy': 'library/data/proxy',
        'Smart.data.field': 'library/data/field',
        'Smart.ux.app': 'library/ux/app',

        'Smart.ux.classic.main': 'library/ux/classic/main',
        'Smart.ux.classic.login': 'library/ux/classic/login',
        
        // 'Smart.ux.modern.main': 'library/ux/modern/main',
        'Smart.ux.modern.login': 'library/ux/modern/login'
    }
});

Ext.application({
    name: 'Cryptic',

    extend: 'Cryptic.Application'

});
