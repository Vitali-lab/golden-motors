import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Services.css";
import { servises } from "../../app/appInfo";

export const Services = ({ moreRef }) => {
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={moreRef} className="services" id="services">
      <div className="services-block">
        <div
          ref={textRef}
          className={`services-text scroll-reveal-bottom ${
            textVisible ? "revealed" : ""
          }`}
        >
          <h1>Наши услуги</h1>
          <p>
            От быстрой мойки до премиум-детейлинга — у нас есть идеальная услуга
            для вашего автомобиля
          </p>
        </div>
        <div
          ref={cardsRef}
          className={`services-cards ${cardsVisible ? "revealed" : ""}`}
        >
          {servises.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`services-card scroll-reveal-bottom-scale ${
                  cardsVisible ? "revealed" : ""
                } scroll-reveal-delay-${Math.min(index + 1, 6)}`}
                role="article"
              >
                <img
                  src={item.img}
                  alt={`${item.title} - ${item.description}`}
                  loading="lazy"
                />
                <div className="services-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <h2>{item.price}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
