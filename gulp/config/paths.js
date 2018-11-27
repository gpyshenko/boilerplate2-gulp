const paths = {
    src: './src',
    dist: './dist',
    templates: '/templates',
    assets: '/assets/',
    fonts: 'fonts/',
    icons: 'iconfonts',
    maps: './maps',
    tasks: './tasks/',
    vendors: './vendors/'
};

paths.iconFonts = paths.src + paths.assets + paths.fonts + paths.icons;

module.exports = paths;