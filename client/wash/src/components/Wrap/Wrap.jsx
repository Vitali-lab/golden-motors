import { useRef, useState } from "react";
import { servicesOb, complexesOb, extraServicesOb } from "../../app/appInfo";
import "./Wrap.css";

const tabs = [
  { id: "elements", label: "Элементы кузова" },
  { id: "kits", label: "Готовые комплекты" },
  { id: "extra", label: "Дополнительно" },
];

export const Wrap = () => {
  const [active, setActive] = useState("elements");
  const tabListRef = useRef(null);

  const onKeyDown = (event) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const buttons = Array.from(
      tabListRef.current?.querySelectorAll('[role="tab"]') ?? [],
    );
    const index = buttons.indexOf(document.activeElement);
    if (index < 0) return;
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % buttons.length;
    if (event.key === "ArrowLeft") next = (index - 1 + buttons.length) % buttons.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = buttons.length - 1;
    buttons[next]?.focus();
    setActive(tabs[next].id);
  };

  return (
    <section className="section wrap-section" id="wrap">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__copy">
            <span className="eyebrow">Защита кузова</span>
            <h2 className="section-title">Оклейка автомобиля плёнкой</h2>
            <p className="section-lead">
              Защищает кузов от сколов и потёртостей. Можно закрыть отдельные
              элементы или взять готовый комплект.
            </p>
          </div>
        </div>

        <div
          className="film-tabs"
          role="tablist"
          aria-label="Разделы оклейки плёнкой"
          ref={tabListRef}
          onKeyDown={onKeyDown}
        >
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              role="tab"
              id={`film-tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`film-panel-${tab.id}`}
              tabIndex={active === tab.id ? 0 : -1}
              className={`film-tab${active === tab.id ? " is-active" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="film-panel"
          role="tabpanel"
          id="film-panel-elements"
          aria-labelledby="film-tab-elements"
          hidden={active !== "elements"}
        >
          <div className="film-list">
            {servicesOb.map((service) => (
              <div className="film-row" key={service.id}>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span>{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="film-panel"
          role="tabpanel"
          id="film-panel-kits"
          aria-labelledby="film-tab-kits"
          hidden={active !== "kits"}
        >
          <div className="kit-grid">
            {complexesOb.map((kit, index) => (
              <article
                className={`kit-card${index === complexesOb.length - 1 ? " is-featured" : ""}`}
                key={kit.id}
              >
                <div className="kit-card__head">
                  <h3>{kit.title}</h3>
                  <span>{kit.price}</span>
                </div>
                <ul>
                  {kit.details.map((detail) => (
                    <li key={`${kit.id}-${detail}`}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div
          className="film-panel"
          role="tabpanel"
          id="film-panel-extra"
          aria-labelledby="film-tab-extra"
          hidden={active !== "extra"}
        >
          <div className="film-list film-list--single">
            {extraServicesOb.map((service) => (
              <div className="film-row" key={service.id}>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span>{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
