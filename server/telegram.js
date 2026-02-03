/**
 * Функция для отправки сообщений в Telegram через Bot API
 * Токен и chat_id задаются только через переменные окружения (.env)
 * Читаем env при вызове, т.к. dotenv.config() выполняется после импортов
 */

/**
 * Отправляет сообщение в Telegram
 * @param {string} message - Текст сообщения (поддерживает HTML)
 * @param {string} chatId - ID чата (если не указан, нужно будет настроить через getUpdates)
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendToTelegram(message, chatId = null) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  try {
    if (!TELEGRAM_BOT_TOKEN) {
      return {
        success: false,
        error: "TELEGRAM_BOT_TOKEN не задан. Добавьте его в .env",
      };
    }

    // Поддержка нескольких chat_id через запятую: 123,456,-100789
    const chatIdsRaw = chatId || TELEGRAM_CHAT_ID;
    const targetChatIds = chatIdsRaw
      ? String(chatIdsRaw)
          .split(",")
          .map((id) => id.trim())
          .filter(Boolean)
      : [];

    if (targetChatIds.length === 0) {
      console.warn(
        "⚠️ TELEGRAM_CHAT_ID не указан. Пытаемся получить через getUpdates...",
      );

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
            return await sendMessage(
              TELEGRAM_BOT_TOKEN,
              message,
              chatIdFromUpdate,
            );
          }
        }
      } catch (updateError) {
        console.error("Error getting updates:", updateError);
      }

      return {
        success: false,
        error:
          "Не удалось определить chat_id. Пожалуйста, укажите TELEGRAM_CHAT_ID в .env файле.",
      };
    }

    // Отправляем во все указанные чаты
    let lastError = null;
    let anySuccess = false;
    for (const cid of targetChatIds) {
      const result = await sendMessage(TELEGRAM_BOT_TOKEN, message, cid);
      if (result.success) {
        anySuccess = true;
      } else {
        lastError = result.error;
        console.warn(`⚠️ Не удалось отправить в чат ${cid}: ${result.error}`);
      }
    }

    return anySuccess
      ? { success: true }
      : {
          success: false,
          error: lastError || "Ошибка отправки во все чаты",
        };
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
async function sendMessage(token, message, chatId) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

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
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return null;
  try {
    const url = `https://api.telegram.org/bot${token}/getMe`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting bot info:", error);
    return null;
  }
}
