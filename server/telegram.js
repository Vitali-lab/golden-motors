/**
 * Функция для отправки сообщений в Telegram через Bot API
 */

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8186376750:AAEhEwgUwtBOzd4hiPMGNIcsKuPbBOBTbIQ";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "492982383";

/**
 * Отправляет сообщение в Telegram
 * @param {string} message - Текст сообщения (поддерживает HTML)
 * @param {string} chatId - ID чата (если не указан, нужно будет настроить через getUpdates)
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendToTelegram(message, chatId = null) {
  try {
    // Используем chatId из параметра или из переменных окружения
    const targetChatId = chatId || TELEGRAM_CHAT_ID;

    if (!targetChatId) {
      console.warn("⚠️ TELEGRAM_CHAT_ID не указан. Пытаемся получить через getUpdates...");
      
      // Попробуем получить chat_id через getUpdates
      try {
        const updatesUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`;
        const updatesResponse = await fetch(updatesUrl);
        const updatesData = await updatesResponse.json();

        if (updatesData.ok && updatesData.result.length > 0) {
          // Берем chat_id из последнего сообщения
          const lastUpdate = updatesData.result[updatesData.result.length - 1];
          const chatIdFromUpdate = lastUpdate.message?.chat?.id;
          
          if (chatIdFromUpdate) {
            console.log(`✅ Найден chat_id: ${chatIdFromUpdate}`);
            return await sendMessage(message, chatIdFromUpdate);
          }
        }
      } catch (updateError) {
        console.error("Error getting updates:", updateError);
      }

      return {
        success: false,
        error: "Не удалось определить chat_id. Пожалуйста, укажите TELEGRAM_CHAT_ID в .env файле.",
      };
    }

    return await sendMessage(message, targetChatId);
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return {
      success: false,
      error: error.message || "Ошибка отправки в Telegram",
    };
  }
}

/**
 * Отправляет сообщение в указанный чат
 */
async function sendMessage(message, chatId) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML", // Поддержка HTML разметки
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return { success: true };
    } else {
      return {
        success: false,
        error: data.description || "Ошибка отправки сообщения",
      };
  }
  } catch (error) {
    throw new Error(`Failed to send message: ${error.message}`);
  }
}

/**
 * Получает информацию о боте
 */
export async function getBotInfo() {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting bot info:", error);
    return null;
  }
}
