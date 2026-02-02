import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contacts.css";

export const Contacts = () => {
  const [blockRef, blockVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="contacts" id="contacts">
      <div
        ref={blockRef}
        className={`contacts-block scroll-reveal-bottom-scale ${
          blockVisible ? "revealed" : ""
        }`}
      >
        <div className="contacts-info">
          <h2>Контакты и локация</h2>
          <p className="contacts-subtitle">
            Приезжайте к нам или запишитесь онлайн — мы всегда рады вам и вашему
            автомобилю.
          </p>
          <div className="contacts-grid">
            <div className="contacts-item">
              <h3>Адрес</h3>
              <p>г. Минск, ул. Примерная, 10</p>
              <p className="contacts-muted">Уточните фактический адрес мойки</p>
            </div>
            <div className="contacts-item">
              <h3>Телефон</h3>
              <a href="tel:+375291234567" className="contacts-phone">
                +375 (29) 123-45-67
              </a>
              <p className="contacts-muted">
                Звоните для быстрых вопросов и уточнений
              </p>
            </div>
            <div className="contacts-item">
              <h3>График работы</h3>
              <p>Пн–Вс: 9:00 – 21:00</p>
              <p className="contacts-muted">Без выходных</p>
            </div>
            <div className="contacts-item">
              <h3>Мессенджеры</h3>
              <p className="contacts-muted">
                По желанию клиента можем добавить реальные ссылки на Telegram /
                WhatsApp.
              </p>
            </div>
          </div>
        </div>
        <div className="contacts-map-wrapper">
          <div className="contacts-map">
            <iframe
              title="Карта Golden Motors"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0d4e3d0d5b9c4f27b4efb6e1d58b95e3c9b3f1f83d1c6a6d1c7c2f1d8c2a5f3&amp;source=constructor"
              loading="lazy"
            ></iframe>
          </div>
          <p className="contacts-map-note">
            Вставьте сюда реальную карту с точкой вашей мойки (Яндекс или
            Google карты).
          </p>
        </div>
      </div>
    </section>
  );
}

