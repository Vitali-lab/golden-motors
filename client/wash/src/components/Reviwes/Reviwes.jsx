import { companyMapLink } from "../../app/appInfo";
import "./Reviwes.css";

export const Reviwes = () => {
  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__copy">
            <span className="eyebrow">Отзывы</span>
            <h2 className="section-title">Что говорят клиенты</h2>
            <p className="section-lead">
              Настоящие отзывы с Яндекс Карт - без модерации и выдуманных
              историй.
            </p>
          </div>
          <a
            className="section-link"
            href={companyMapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Оставить отзыв
          </a>
        </div>

        <div className="reviews-panel">
          <div className="reviews-panel__bar">
            <span>Яндекс Карты · Golden Motors</span>
            <a
              href={companyMapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть на карте
            </a>
          </div>
          <iframe
            className="reviews-frame"
            title="Отзывы Golden Motors на Яндекс Картах"
            src="https://yandex.ru/maps-reviews-widget/53204049636?comments"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
