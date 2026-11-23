import "./HowItWork.css";

const steps = [
  {
    number: "01",
    title: "Выберите услугу",
    description:
      "Мойка, комплекс или детейлинг. Если не уверены - подскажем по телефону.",
  },
  {
    number: "02",
    title: "Оставьте заявку",
    description: "Имя, телефон и удобное время. Без регистрации и лишних полей.",
  },
  {
    number: "03",
    title: "Подтвердите запись",
    description:
      "Мы свяжемся, уточним детали и закрепим за вами время в боксе.",
  },
];

export const HowItWork = () => {
  return (
    <section className="section how" id="how-it-work">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__copy">
            <span className="eyebrow">Как записаться</span>
            <h2 className="section-title">Три шага до чистого автомобиля</h2>
            <p className="section-lead">
              Запись занимает меньше минуты. Всё остальное сделаем мы.
            </p>
          </div>
        </div>

        <div className="how-list">
          {steps.map((step) => (
            <article className="how-step" key={step.number}>
              <span className="how-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
