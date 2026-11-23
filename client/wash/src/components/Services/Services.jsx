import { useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import { servises, extraServices } from "../../app/appInfo";
import { scrollTo } from "../../functions/scrollTo";
import "./Services.css";

export const Services = ({ moreRef, onSelectService, onChooseService }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = servises[activeIndex];

  const choose = (title) => {
    onSelectService?.(title);
    scrollTo(onChooseService, "book");
  };

  return (
    <section ref={moreRef} className="section services" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__copy">
            <span className="eyebrow">Услуги и цены</span>
            <h2 className="section-title">Полный уход за кузовом и салоном</h2>
            <p className="section-lead">
              От быстрой мойки до детейлинга. Цены указаны «от» - итоговая
              зависит от класса автомобиля и состояния кузова.
            </p>
          </div>
          <button
            type="button"
            className="section-link"
            onClick={() => scrollTo(onChooseService, "book")}
          >
            Записаться
            <IoArrowUpOutline size={15} style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>

        <div className="services-layout">
          <aside className="services-preview" aria-hidden="true">
            <div className="services-media">
              <img key={active.id} src={active.img} alt="" />
              <div className="services-media-meta">
                <div>
                  <span>{active.title}</span>
                  <p>{active.description}</p>
                </div>
                <strong>{active.price}</strong>
              </div>
            </div>
            <p className="services-preview-note">
              Наведите на услугу, чтобы посмотреть, как она выглядит
            </p>
          </aside>

          <div className="services-list">
            {servises.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`service-row${index === activeIndex ? " is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => choose(item.title)}
              >
                <img
                  className="service-row-thumb"
                  src={item.img}
                  alt=""
                  loading="lazy"
                />
                <span className="service-row-main">
                  <span className="service-row-title">{item.title}</span>
                  <span className="service-row-desc">{item.description}</span>
                </span>
                <span className="service-row-price">{item.price}</span>
                <span className="service-row-arrow" aria-hidden="true">
                  <IoArrowUpOutline size={18} style={{ transform: "rotate(45deg)" }} />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="services-extra">
          <div className="services-extra__head">
            <div>
              <h3>Детейлинг и защита</h3>
              <p>Глубокая работа с покрытием и салоном - когда нужен не просто блеск.</p>
            </div>
            <button
              type="button"
              className="section-link"
              onClick={() => scrollTo(onChooseService, "book")}
            >
              Подобрать услугу
              <IoArrowUpOutline size={15} style={{ transform: "rotate(45deg)" }} />
            </button>
          </div>
          <div className="services-extra__grid">
            {extraServices.map((item) => (
              <article className="extra-card" key={item.title}>
                <img src={item.img} alt="" loading="lazy" />
                <div className="extra-card__body">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
