import {
  companyAdress,
  companyHours,
  companyMapLink,
  companyPhone,
  companyPhoneHref,
  companyWhatsApp,
} from "../../app/appInfo";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <section className="section contacts" id="contacts">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__copy">
            <span className="eyebrow">Контакты</span>
            <h2 className="section-title">Приезжайте на Тимирязева, 46к8</h2>
            <p className="section-lead">
              Минск, Тимирязева, 46к8. Работаем каждый день с 9:00 до 19:00.
            </p>
          </div>
          <a
            className="btn btn--gold"
            href={companyMapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Построить маршрут
          </a>
        </div>

        <div className="contacts-grid">
          <div className="contacts-info">
            <div className="contact-card">
              <span>Адрес</span>
              <p>{companyAdress}</p>
              <a
                href={companyMapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Открыть на карте
              </a>
            </div>

            <div className="contact-card">
              <span>Телефон</span>
              <p>
                <a className="contact-card__strong" href={companyPhoneHref}>
                  {companyPhone}
                </a>
              </p>
              <a
                href={companyWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в WhatsApp
              </a>
            </div>

            <div className="contact-card">
              <span>График</span>
              <p>{companyHours}</p>
              <small>Без выходных</small>
            </div>

            <div className="contact-card">
              <span>Запись</span>
              <p>Онлайн или по телефону</p>
              <a href="#book">Выбрать время</a>
            </div>
          </div>

          <div className="contacts-map">
            <iframe
              title="Golden Motors на карте Минска"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A6b29b1da39e48fd38bc61fd0da9cfffa38f47b3bce64831ee293fe9f76a29b2b&amp;source=constructor"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
