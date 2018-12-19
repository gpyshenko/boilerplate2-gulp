# Gulp-simple
> Boilerplate for optimized layout

## Установка

Для начала надо установить все зависимости для сборки проекта

```shell
npm i
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

## Что входит

#### Плагины для CSS

- [PostCSS](https://postcss.org/)
    - [autoprefixer](https://github.com/postcss/autoprefixer)
    - [precss](https://github.com/jonathantneal/precss)