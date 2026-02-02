// API Configuration
// В режиме разработки используем прокси из vite.config.js
// В продакшене используем относительный путь или переменную окружения
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const API_ENDPOINTS = {
  BOOK: `${API_BASE_URL}/api/book`,
  HEALTH: `${API_BASE_URL}/health`,
};

export default API_BASE_URL;
