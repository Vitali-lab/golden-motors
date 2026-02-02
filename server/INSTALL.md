# Установка зависимостей сервера

## Проблема: "Cannot find package 'express'"

Эта ошибка возникает, когда зависимости не установлены в папке `server`.

## Решение:

### Шаг 1: Перейдите в папку server
```bash
cd server
```

### Шаг 2: Установите зависимости
```bash
npm install
```

Если возникает ошибка сети, попробуйте:

**Вариант A: Использовать yarn (если установлен)**
```bash
yarn install
```

**Вариант B: Использовать другой registry**
```bash
npm install --registry https://registry.npmmirror.com
```

**Вариант C: Проверить интернет и повторить**
```bash
# Проверьте интернет
ping registry.npmjs.org

# Если интернет работает, повторите установку
npm install
```

### Шаг 3: Проверьте установку
```bash
ls node_modules
# Должны быть папки: express, cors, dotenv
```

### Шаг 4: Запустите сервер
```bash
npm run dev
# или
npm start
```

## Если проблемы продолжаются:

1. **Очистите кэш npm:**
```bash
npm cache clean --force
```

2. **Удалите package-lock.json и node_modules:**
```bash
rm -rf node_modules package-lock.json
npm install
```

3. **Проверьте версию Node.js:**
```bash
node --version
# Должна быть версия 14 или выше
```

4. **Используйте nvm для управления версиями Node.js:**
```bash
nvm install 18
nvm use 18
npm install
```
