import { useEffect, useState } from "react";
import { companyName, companyDevis } from "../../app/appInfo";
import { IoTimeOutline, IoPricetagOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { LuMouse } from "react-icons/lu";
import "./Main.css";

export const Main = ({ bookRef, moreRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      <div className="main-bg">
        <div className="main-block">
          <div
            className={`main-big-text scroll-reveal-bottom-scale ${
              isVisible ? "revealed" : ""
            }`}
          >
            <h1>{companyName}</h1>
            <h1>Мойка автомобилей</h1>
          </div>
          <div
            className={`main-lil-text scroll-reveal-bottom ${
              isVisible ? "revealed" : ""
            } scroll-reveal-delay-1`}
          >
            <h3>{companyDevis}</h3>
          </div>
          <div
            className={`main-buttons scroll-reveal-bottom ${
              isVisible ? "revealed" : ""
            } scroll-reveal-delay-2`}
          >
            <button
              onClick={() => {
                bookRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Перейти к форме записи на мойку"
            >
              Записаться на мойку
            </button>
            <button
              onClick={() => {
                moreRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Узнать больше о наших услугах"
            >
              Узнать больше
            </button>
          </div>
          <div
            className={`main-icons scroll-reveal-bottom ${
              isVisible ? "revealed" : ""
            } scroll-reveal-delay-3`}
          >
            <div className="main-icon">
              <IoPricetagOutline color="gold" size={30} />
              <p>Приятные цены</p>
            </div>
            <div className="main-icon">
              <IoTimeOutline color="gold" size={30} />
              <p>Быстрый сервис</p>
            </div>
            <div className="main-icon">
              <MdOutlineSecurity color="gold" size={30} />
              <p>Гарантия качества</p>
            </div>
          </div>
          <div className="main-mouse" aria-hidden="true">
            <LuMouse color="grey" size={40} />
          </div>
        </div>
      </div>
    </main>
  );
};
