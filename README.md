# Golden Motors

Лендинг автомойки и детейлинга в Минске. Тёмная премиальная тема, крупная
типографика, живая галерея работ и запись на мойку.

- Production: https://vitali-lab.github.io/golden-motors/
- Frontend: `client/wash` - React 19, Vite 7
- Backend для формы: `server` - Node.js + Telegram (не обязателен для GitHub Pages)

## Что внутри

- Hero с фото мойки, ценами и быстрым переходом к записи.
- Прайс из 15 услуг с превью, комплекс «Всё включено».
- Оклейка плёнкой: элементы, готовые комплекты и доп. услуги.
- Галерея реальных работ с лайтбоксом.
- Блоки «почему мы», «как записаться», отзывы с Яндекс Карт.
- Форма записи и контакты с картой.
- Адаптив от 320 px, клавиатурная навигация, reduced motion.

## Локальный запуск

```bash
cd client/wash
npm install
npm run dev
```

Фронтенд откроется на `http://localhost:5173`. Если нужен бэкенд для формы:

```bash
cd server
npm install
npm run dev
```

Vite проксирует `/api` на `http://localhost:3001`.

## Сборка

```bash
cd client/wash
npm run build
npm run preview
```

Сборка использует base `/golden-motors/` - это путь project page на GitHub
Pages. Если репозиторий переименовать, поправьте `repoName` в
`client/wash/vite.config.js`.

## Публикация на GitHub Pages

1. Запушьте ветку `main` в GitHub.
2. Откройте **Settings → Pages**.
3. В **Build and deployment → Source** выберите **GitHub Actions**.
4. Запустите workflow **Deploy site to GitHub Pages** (пуш в `main` или
   вручную через **Actions → Run workflow**).

Workflow лежит в `.github/workflows/deploy.yml`: собирает `client/wash`,
загружает `dist` как artifact и публикует его на Pages.

## Форма на статичном хостинге

На GitHub Pages нет backend, поэтому в production-сборке без `VITE_API_URL`
форма не отправляет запрос на сервер, а открывает WhatsApp с уже заполненным
текстом заявки. Нажимать «Отправить» всё равно нужно в WhatsApp - это честно
и работает без сервера.

Если появится API, задайте переменную окружения при сборке:

```bash
VITE_API_URL=https://api.example.com npm run build
```

Тогда форма снова начнёт отправлять `POST /api/book`.

## Структура

```
client/wash/          React-приложение
  src/app/            данные услуг, контактов и галереи
  src/components/     секции лендинга
  src/assets/         оптимизированные WebP-изображения
  src/styles/         анимации входа
server/               Node.js-сервер для заявок в Telegram
.github/workflows/    деплой на GitHub Pages
```

## Изображения

Оригинальные PNG заменены на WebP (q78, до 900 px по длинной стороне), чтобы
страница не тянула десятки мегабайт. Галерея использует реальные фото
автомойки с Яндекс Карт. Логотип и знак лежат в `src/assets/logo*.png`.
