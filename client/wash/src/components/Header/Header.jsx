import "./Header.css";
import logo from "../../assets/logo.png";
import { companyPhone } from "../../app/appInfo";
import { scrollTo } from "../../functions/scrollTo";

export const Header = ({ onNavClick }) => {
  return (
    <header className="header">
      <div className="header-inner">
        <div
          className="header-logo"
          onClick={() => scrollTo(onNavClick, "top")}
          aria-label="На главную"
        >
          <img src={logo} alt="logo" />
        </div>

        <nav className="header-nav">
          <button
            type="button"
            className="header-link"
            onClick={() => scrollTo(onNavClick, "services")}
          >
            Услуги
          </button>
          <button
            type="button"
            className="header-link"
            onClick={() => scrollTo(onNavClick, "gallery")}
          >
            Галерея
          </button>
          <button
            type="button"
            className="header-link"
            onClick={() => scrollTo(onNavClick, "how-it-work")}
          >
            Как это работает
          </button>
          <button
            type="button"
            className="header-link"
            onClick={() => scrollTo(onNavClick, "contacts")}
          >
            Контакты
          </button>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href="tel:+375291234567">
            {companyPhone}
          </a>
          <button
            type="button"
            className="header-cta"
            onClick={() => scrollTo(onNavClick, "book")}
          >
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
};
