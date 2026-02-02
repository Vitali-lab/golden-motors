import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./HowItWork.css";

export const HowItWork = () => {
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  const steps = [
    {
      number: "1",
      title: "Выберите услугу",
      description: "Выберите тип мойки или комплекс услуг, который вам подходит",
    },
    {
      number: "2",
      title: "Заполните форму",
      description: "Укажите ваше имя, телефон и удобное время для записи",
    },
    {
      number: "3",
      title: "Подтвердите запись",
      description: "Мы свяжемся с вами для подтверждения и уточнения деталей",
    },
  ];

  return (
    <section className="how-it-work" id="how-it-work">
      <div className="how-it-work-block">
        <div
          ref={textRef}
          className={`how-it-work-text scroll-reveal-bottom ${
            textVisible ? "revealed" : ""
          }`}
        >
          <h1>Как записаться на мойку</h1>
          <p>Записаться на мойку автомобиля стало проще простого</p>
        </div>
        <div
          ref={cardsRef}
          className={`how-it-work-cards ${cardsVisible ? "revealed" : ""}`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`how-it-work-card scroll-reveal-bottom-scale ${
                cardsVisible ? "revealed" : ""
              } scroll-reveal-delay-${Math.min(index + 1, 6)}`}
            >
              <div className="how-it-work-card-circle">
                <h2>{step.number}</h2>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
