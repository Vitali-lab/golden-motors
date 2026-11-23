// API Configuration
// Dev uses the Vite proxy; production can point to VITE_API_URL.
// On GitHub Pages there is no backend, so the booking form falls back to WhatsApp.
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export const IS_STATIC_BUILD = !import.meta.env.DEV && !API_BASE_URL;

export const API_ENDPOINTS = {
  BOOK: `${API_BASE_URL}/api/book`,
  HEALTH: `${API_BASE_URL}/health`,
};

export default API_BASE_URL;
