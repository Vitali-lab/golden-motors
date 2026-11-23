import {
  companyName,
  companyAdress,
  companyPhone,
  companyPhoneHref,
  companyHours,
} from "../../app/appInfo";
import { getCurrentYear } from "../../functions/getCurrentDate";
import mark from "../../assets/logo-mark@2x.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={mark} alt="" width="27" height="38" />
            <span>{companyName}</span>
          </div>
          <p>
            Автомойка и детейлинг в Минске. Кузов, салон, стёкла и защита
            покрытия.
          </p>
        </div>

        <nav className="footer-col" aria-label="Навигация в подвале">
          <h3>Разделы</h3>
          <a href="#services">Услуги</a>
          <a href="#complex">Комплекс</a>
          <a href="#wrap">Защита плёнкой</a>
          <a href="#gallery">Галерея</a>
        </nav>

        <div className="footer-col">
          <h3>Контакты</h3>
          <a href={companyPhoneHref}>{companyPhone}</a>
          <p>{companyAdress}</p>
          <p>{companyHours}</p>
        </div>

        <div className="footer-col">
          <h3>Запись</h3>
          <a href="#book">Оставить заявку</a>
          <a href="#contacts">Как добраться</a>
          <a href="#reviews">Отзывы</a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>
          © {getCurrentYear()} {companyName}. Все права защищены.
        </p>
        <p>
          Дизайн и разработка -{" "}
          <a
            href="https://github.com/Vitali-lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vitali-lab
          </a>
        </p>
      </div>
    </footer>
  );
};
