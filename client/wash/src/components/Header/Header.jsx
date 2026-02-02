import "./Header.css";

const scrollTo = (onNavClick, id) => {
  if (typeof onNavClick === "function") {
    onNavClick(id);
  } else {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

export const Header = ({ onNavClick }) => {
  return (
    <header className="header">
      <div className="header-inner">
        <div
          className="header-logo"
          onClick={() => scrollTo(onNavClick, "top")}
          aria-label="На главную"
        >
          <img
            src="https://goldenmotors.by/wp-content/uploads/2022/06/logo.png"
            alt="logo"
          />
          <div className="header-logo-text">
            <span>Golden Motors</span>
            <span className="header-logo-sub">детейлинг & мойка</span>
          </div>
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
            onClick={() => scrollTo(onNavClick, "complex")}
          >
            Комплексы
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
            +375 (29) 123-45-67
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
