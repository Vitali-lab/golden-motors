import {
  IoWaterOutline,
  IoTimeOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import "./WhyChooseUs.css";

const features = [
  {
    icon: MdOutlineSecurity,
    title: "Гарантия качества",
    description:
      "Используем профессиональные средства и технологии: результат видно на кузове, а не только на фото.",
  },
  {
    icon: IoTimeOutline,
    title: "Быстрый сервис",
    description:
      "Работаем без потери качества и лишнего ожидания. Ваш автомобиль готов в оговорённое время.",
  },
  {
    icon: IoPricetagOutline,
    title: "Понятные цены",
    description:
      "Прайс известен заранее. Никаких скрытых доплат: стоимость обсуждаем до начала работы.",
  },
  {
    icon: IoWaterOutline,
    title: "Бережные средства",
    description:
      "Подбираем химию под покрытие и материалы салона, чтобы не повредить лак и пластик.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section why" id="why">
      <div className="wrap why-layout">
        <div className="why-copy">
          <span className="eyebrow">Почему мы</span>
          <h2 className="section-title">Не просто смыть грязь</h2>
          <p className="section-lead">
            Автомобиль - это не только кузов. Мы смотрим на машину целиком:
            покрытие, стёкла, диски, салон и пластик.
          </p>
          <div className="why-count">
            <strong>4</strong>
            <span>причины, по которым к нам возвращаются</span>
          </div>
        </div>

        <div className="why-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="why-card" key={feature.title}>
                <span className="why-card__icon">
                  <Icon size={24} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
