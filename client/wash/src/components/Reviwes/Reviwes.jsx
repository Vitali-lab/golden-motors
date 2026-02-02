import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Reviwes.css";

export const Reviwes = () => {
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });
  const [iframeRef, iframeVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="reviwes" id="reviews">
      <div className="reviwes-block">
        <div
          ref={textRef}
          className={`reviwes-text scroll-reveal-bottom ${
            textVisible ? "revealed" : ""
          }`}
        >
          <h1>Отзывы</h1>
          <p>Наши клиенты говорят о нас</p>
        </div>
        <div className="reviews-cards">
          <section className="section-rewiwes">
            <div className="reviews-main"></div>
            <div
              ref={iframeRef}
              className={`reviews-iframe-container scroll-reveal-bottom-scale ${
                iframeVisible ? "revealed" : ""
              } scroll-reveal-delay-1`}
            >
              <iframe
                className="reviews-iframe"
                title="Отзывы Яндекс.Карты"
                src="https://yandex.ru/maps-reviews-widget/53204049636?comments"
                loading="lazy"
              ></iframe>
              <a
                className="reviews-link"
                href="https://yandex.by/maps/org/golden_motors/53204049636/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Открыть Голден Моторс на карте Минска в Яндекс.Картах"
              >
                Голден Моторс на карте Минска — Яндекс.Карты
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
