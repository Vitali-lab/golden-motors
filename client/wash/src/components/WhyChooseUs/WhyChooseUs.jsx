import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./WhyChooseUs.css";
import { IoWaterOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";

export const WhyChooseUs = () => {
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  const features = [
    {
      icon: <MdOutlineSecurity color="black" size={30} />,
      title: "Гарантия качества",
      description:
        "Используем только лучшие средства и технологии для превосходного результата",
    },
    {
      icon: <IoTimeOutline color="black" size={30} />,
      title: "Быстрый сервис",
      description:
        "Эффективная работа без потери качества. Ваш автомобиль готов в кратчайшие сроки",
    },
    {
      icon: <IoPricetagOutline color="black" size={30} />,
      title: "Доступные цены",
      description:
        "Честные и прозрачные цены без скрытых доплат. Качество по разумной стоимости",
    },
    {
      icon: <IoWaterOutline color="black" size={30} />,
      title: "Экологичные средства",
      description:
        "Безопасные для вашего автомобиля и окружающей среды профессиональные средства",
    },
  ];

  return (
    <div className="why-choose">
      <div className="why-choose-block">
        <div
          ref={textRef}
          className={`why-choose-text scroll-reveal-bottom ${
            textVisible ? "revealed" : ""
          }`}
        >
          <h1>Почему выбирают нас</h1>
          <p>
            Мы стремимся предоставлять исключительный сервис и результаты каждый
            раз
          </p>
        </div>
        <div
          ref={cardsRef}
          className={`why-choose-cards ${cardsVisible ? "revealed" : ""}`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`why-choose-card scroll-reveal-scale ${
                cardsVisible ? "revealed" : ""
              } scroll-reveal-delay-${Math.min(index + 1, 6)}`}
            >
              <div className="why-choose-card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
