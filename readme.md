# Gulp-simple
> Boilerplate for optimized layout

## Установка

Для начала надо установить все зависимости для сборки проекта

```shell
npm i или yarn install
```

## Как использовать

- `npm run dev`: Компиляция проекта под разработку.

- `npm run prod`: Компиляция проекта под деплой.

- `npm run validate`: Валидация HTML.

- `npm run clean`: Удаление папки `dist`.

- `npm run fonts`: Генерация `woff/woff2` шрифтов из шрифта `ttf` .

- `npm run iconfonts`: Генерация иконочного шрифта из `svg` изображений.

- `npm run zip`: Создание архива из папки `dist`.

- `npm run links`: Создание файла `links.txt` с ссылками на все страницы.

## Структура проекта

- `./src` - корневая папка и исходниками
- `./src/templates` - папка шаблонов с расширением .njk
    - На одном уровне с директорой нужно создавать страницы
    - `./src/templates/base` - основная разметка для всех страниц
    - `./src/templates/blocks` - шаблоны блоков
    - `./src/templates/components` - шаблоны компонентов
- `./src/styles` - папка с общими стилями для всего сайта
    - `./src/styles/default` - шрифты, сетка, типография, переменные, сброс стандартных стилей
- `./src/scripts` - папка с общими скриптами для всего сайта
- `./src/assets` - папка с общими скриптами для всего сайта
    - `./src/assets/fonts` - папка со шрифтами
    - `./src/assets/img` - папка с изображениями
    - `./src/assets/iconfonts` - папка `svg` иконок для генерации из них шрифта

## Что входит

#### Плагины для CSS

- [PostCSS](https://postcss.org/)
    - [autoprefixer](https://github.com/postcss/autoprefixer)
    - [precss](https://github.com/jonathantneal/precss)