import { IoCheckmark } from "react-icons/io5";
import { complexs } from "../../app/appInfo";
import { scrollTo } from "../../functions/scrollTo";
import standart from "../../assets/standart_wash.webp";
import interior from "../../assets/him.webp";
import "./Complex.css";

export const Complex = ({ onSelectService, onChooseService }) => {
  const item = complexs[0];

  const choose = () => {
    onSelectService?.(item.title);
    scrollTo(onChooseService, "book");
  };

  return (
    <section className="section complex" id="complex">
      <div className="wrap">
        <div className="complex-card">
          <div className="complex-media">
            <img src={standart} alt="Мойка кузова в боксе Golden Motors" loading="lazy" />
            <img
              className="complex-media-inset"
              src={interior}
              alt="Уборка салона автомобиля"
              loading="lazy"
            />
            {item.hit && <span className="complex-badge">Хит</span>}
          </div>

          <div className="complex-body">
            <span className="eyebrow">Комплексная мойка</span>
            <h2>{item.title}</h2>
            <p className="complex-desc">{item.description}</p>

            <ul className="complex-list">
              {item.details.map((detail) => (
                <li key={detail}>
                  <IoCheckmark size={16} />
                  {detail}
                </li>
              ))}
            </ul>

            <div className="complex-foot">
              <div className="complex-price">
                <span>Стоимость</span>
                <strong>{item.price}</strong>
              </div>
              <button type="button" className="btn btn--gold" onClick={choose}>
                Выбрать комплекс
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
