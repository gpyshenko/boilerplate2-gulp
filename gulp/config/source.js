const { browsersList, vendors } = require('../../lib/get-options');

const source = {
    css: {
        icons: 'iconfonts.css'
    },
    vendors: {
        scripts: vendors.scripts,
        styles: vendors.styles
    },
    browsersList: browsersList
};

module.exports = source;