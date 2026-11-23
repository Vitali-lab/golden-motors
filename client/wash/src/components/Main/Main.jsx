import { IoArrowForward } from "react-icons/io5";
import bg from "../../assets/bg.webp";
import "./Main.css";

const facts = [
  { value: "от 26 BYN", label: "стандартная мойка" },
  { value: "15 услуг", label: "кузов, салон, детейлинг" },
  { value: "9:00–19:00", label: "каждый день" },
  { value: "Тимирязева, 46к8", label: "Минск" },
];

export const Main = ({ bookRef, moreRef }) => {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img
          src={bg}
          alt="Автомобиль BMW на мойке Golden Motors"
          fetchPriority="high"
        />
      </div>
      <div className="hero-veil" aria-hidden="true" />

      <div className="hero-inner wrap">
        <div className="hero-copy">
          <p className="hero-kicker enter enter-1">
            <span className="hero-dot" aria-hidden="true" />
            Автомойка и детейлинг в Минске
          </p>
          <h1 className="enter enter-2">
            Мойка, после которой машину замечают
          </h1>
          <p className="hero-lead enter enter-3">
            Ручная мойка, уборка салона и защита кузова на Тимирязева, 46к8.
            Работаем каждый день с 9:00 до 19:00.
          </p>
          <div className="hero-actions enter enter-4">
            <button
              type="button"
              className="btn btn--gold"
              onClick={() => bookRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Записаться на мойку
              <IoArrowForward size={17} />
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => moreRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Смотреть услуги
            </button>
          </div>
        </div>
      </div>

      <div className="hero-facts-wrap">
        <div className="hero-facts wrap">
          {facts.map((fact) => (
            <div className="hero-fact" key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
