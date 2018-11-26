const paths = {
    src: './src',
    dist: './dist',
    templates: '/templates',
    styles: '/styles/',
    scripts: '/scripts/',
    vendors: '/vendors/',
    assets: '/assets/',
    fonts: 'fonts/',
    icons: 'iconfonts',
    maps: '../maps',
    tasks: './tasks/',
};

paths.iconFonts = paths.src + paths.assets + paths.fonts + paths.icons;

module.exports = paths;