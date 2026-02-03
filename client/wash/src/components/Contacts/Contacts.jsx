import { useScrollReveal } from "../../hooks/useScrollReveal";
import { companyAdress, companyPhone } from "../../app/appInfo";
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
              <p>{companyAdress}</p>
              <p className="contacts-muted">Фактический адрес мойки</p>
            </div>
            <div className="contacts-item">
              <h3>Телефон</h3>
              <a href="tel:+375291234567" className="contacts-phone">
                {companyPhone}
              </a>
              <p className="contacts-muted">
                Звоните для быстрых вопросов и уточнений
              </p>
            </div>
            <div className="contacts-item">
              <h3>График работы</h3>
              <p>Пн–Вс: 9:00 – 19:00</p>
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
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A6b29b1da39e48fd38bc61fd0da9cfffa38f47b3bce64831ee293fe9f76a29b2b&amp;source=constructor"
              width="500"
              height="400"
              frameborder="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
