import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendToTelegram } from "./telegram.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";

// Middleware
const corsOptions = process.env.CORS_ORIGIN
  ? { origin: process.env.CORS_ORIGIN.split(",").map((o) => o.trim()) }
  : {};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Endpoint для приема данных формы
app.post("/api/book", async (req, res) => {
  try {
    const { name, phone, service, note } = req.body;

    // Валидация данных
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        error: "Имя и телефон обязательны для заполнения",
      });
    }

    // Валидация телефона (минимум 9 цифр)
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 9) {
      return res.status(400).json({
        success: false,
        error: "Некорректный номер телефона",
      });
    }

    // Формируем сообщение для Telegram
    const message = `
🚗 <b>Новая заявка на мойку</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
🔧 <b>Услуга:</b> ${service || "Не указана"}
${note ? `📝 <b>Примечание:</b> ${note}` : ""}

⏰ <b>Время:</b> ${new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Minsk",
    })}
    `.trim();

    // Отправляем в Telegram
    const telegramResult = await sendToTelegram(message);

    if (telegramResult.success) {
      res.json({
        success: true,
        message: "Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
      });
    } else {
      throw new Error(telegramResult.error || "Ошибка отправки в Telegram");
    }
  } catch (error) {
    console.error("Error processing booking:", error);
    res.status(500).json({
      success: false,
      error: "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.",
    });
  }
});

// Обработка несуществующих маршрутов
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`🚀 Server is running on http://${HOST}:${PORT}`);
  console.log(
    `📱 Telegram: ${process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID ? "✅ Configured" : "❌ Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env"}`,
  );
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10000);
};
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

// Uncaught errors
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});
