import { useScrollReveal } from "../../hooks/useScrollReveal";
import {
  servicesOb,
  complexesOb,
  extraServicesOb,
} from "../../app/appInfo";
import "./Wrap.css";

export const Wrap = () => {
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });
  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.1 });
  const [setsRef, setsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="wrap" id="wrap">
      <div className="wrap-block">
        <div
          ref={textRef}
          className={`wrap-text scroll-reveal-bottom ${
            textVisible ? "revealed" : ""
          }`}
        >
          <h1>Оклейка автомобиля плёнкой</h1>
          <p>
            Защитите кузов от сколов и потертостей. Подберём решение под ваш
            бюджет: локальные элементы, готовые комплекты или дополнительные
            работы.
          </p>
        </div>

        <div
          ref={servicesRef}
          className={`wrap-cards ${servicesVisible ? "revealed" : ""}`}
        >
          {servicesOb.map((service, index) => (
            <article
              key={service.id}
              className={`wrap-card scroll-reveal-bottom-scale ${
                servicesVisible ? "revealed" : ""
              } scroll-reveal-delay-${Math.min(index + 1, 6)}`}
            >
              <div className="wrap-card-head">
                <span className="wrap-card-label">Элемент</span>
                <span className="wrap-card-price">{service.price}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div
          ref={setsRef}
          className={`wrap-sets scroll-reveal-bottom ${
            setsVisible ? "revealed" : ""
          }`}
        >
          <div className="wrap-section-head">
            <div>
              <h2>Готовые комплекты</h2>
              <p>Оптимальные сочетания элементов под разный бюджет</p>
            </div>
          </div>
          <div className="wrap-sets-grid">
            {complexesOb.map((complex, index) => (
              <article
                key={complex.id}
                className={`wrap-set-card scroll-reveal-bottom-scale ${
                  setsVisible ? "revealed" : ""
                } scroll-reveal-delay-${Math.min(index + 1, 6)}`}
              >
                <div className="wrap-set-head">
                  <h3>{complex.title}</h3>
                  <span className="wrap-set-price">{complex.price}</span>
                </div>
                <ul>
                  {complex.details.map((detail) => (
                    <li key={`${complex.id}-${detail}`}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="wrap-extra">
          <div className="wrap-section-head">
            <div>
              <h2>Дополнительные услуги</h2>
              <p>Закрываем сопутствующие задачи по плёнке и тонировке</p>
            </div>
          </div>
          <div className="wrap-extra-list">
            {extraServicesOb.map((service) => (
              <div key={service.id} className="wrap-extra-item">
                <div className="wrap-extra-text">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
                <span className="wrap-extra-price">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
