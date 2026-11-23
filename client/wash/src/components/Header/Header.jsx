import { useEffect, useState } from "react";
import "./Header.css";
import mark from "../../assets/logo-mark@2x.png";
import {
  companyAdress,
  companyPhone,
  companyPhoneHref,
  companyHours,
} from "../../app/appInfo";

const links = [
  { id: "services", label: "Услуги" },
  { id: "complex", label: "Комплекс" },
  { id: "wrap", label: "Защита плёнкой" },
  { id: "gallery", label: "Галерея" },
  { id: "contacts", label: "Контакты" },
];

export const Header = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id) => {
    setOpen(false);
    onNavClick(id);
  };

  return (
    <header
      className={`header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
    >
      <div className="header-inner">
        <button
          type="button"
          className="brand"
          onClick={() => go("top")}
          aria-label="Golden Motors - на главную"
        >
          <img src={mark} alt="" width="29" height="40" />
          <span className="brand-name">Golden Motors</span>
        </button>

        <nav className="header-nav" aria-label="Основная навигация">
          {links.map((link) => (
            <button
              type="button"
              key={link.id}
              className="header-link"
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={companyPhoneHref}>
            {companyPhone}
          </a>
          <button
            type="button"
            className="btn btn--gold header-cta"
            onClick={() => go("book")}
          >
            Записаться
          </button>
          <button
            type="button"
            className={`header-burger${open ? " is-open" : ""}`}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            {links.map((link) => (
              <button
                type="button"
                key={link.id}
                className="mobile-nav__link"
                onClick={() => go(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mobile-menu__foot">
            <div>
              <p className="mobile-menu__label">Телефон</p>
              <a className="mobile-menu__value" href={companyPhoneHref}>
                {companyPhone}
              </a>
            </div>
            <div>
              <p className="mobile-menu__label">Адрес</p>
              <p className="mobile-menu__value">{companyAdress}</p>
            </div>
            <div>
              <p className="mobile-menu__label">График</p>
              <p className="mobile-menu__value">{companyHours}</p>
            </div>
            <button
              type="button"
              className="btn btn--gold mobile-menu__cta"
              onClick={() => go("book")}
            >
              Записаться на мойку
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
