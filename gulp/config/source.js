const { vendorsScripts, commonsScripts, browsersList } = require('../../lib/get-options');

const source = {
    name: ['vendors', 'main'],
    css: {
        main: 'main.css',
        vendors: 'vendors.css', 
        icons: 'iconfonts.css'
    },
    js: {
        main: 'main.js',
        vendors: 'vendors.js',
        vendorsArr: vendorsScripts,
        commonArr: commonsScripts 
    },
    renameProps: { suffix: ".min" },
    browsersList: browsersList
};

module.exports = source;