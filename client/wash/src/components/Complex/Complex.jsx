import { useScrollReveal } from "../../hooks/useScrollReveal";
import { complexs } from "../../app/appInfo";
import { scrollTo } from "../../functions/scrollTo";
import "./Complex.css";

export const Complex = ({ onSelectService, onChooseService }) => {
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="complex" id="complex">
      <div className="complex-block">
        <div
          ref={textRef}
          className={`complex-text scroll-reveal-bottom ${
            textVisible ? "revealed" : ""
          }`}
        >
          <h1>Комплексная мойка</h1>
          <p>
            От быстрой мойки до премиум-детейлинга — у нас есть идеальная услуга
            для вашего автомобиля
          </p>
        </div>
        <div
          ref={cardsRef}
          className={`complex-cards ${cardsVisible ? "revealed" : ""}`}
        >
          {complexs.map((item, index) => {
            return (
              <div
                key={item.title}
                className={`complex-card scroll-reveal-bottom-scale ${
                  cardsVisible ? "revealed" : ""
                } scroll-reveal-delay-${Math.min(index + 1, 6)} ${
                  item.hit ? "hit" : ""
                }`}
              >
                {item.hit && <span className="complex-hit-badge">Хит</span>}
                <div className="complex-card-text">
                  <h3>{item.title}</h3>
                  <h2>{item.price}</h2>
                </div>
                <div className="complex-card-details">
                  <ul>
                    {item.details.map((el) => (
                      <li
                        key={`${item.title}-${el}`}
                        className="complex-card-detail"
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>{item.description}</p>
                <div className="complex-card-button">
                  <button
                    type="button"
                    aria-label={`Выбрать услугу ${item.title}`}
                    onClick={() => {
                      onSelectService?.(item.title);
                      scrollTo(onChooseService, "book");
                    }}
                  >
                    Выбрать {item.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
