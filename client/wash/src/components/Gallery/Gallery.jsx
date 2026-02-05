import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./Gallery.css";

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const [blockRef, blockVisible] = useScrollReveal({ threshold: 0.2 });

  const images = [
    {
      id: 1,
      src: "https://avatars.mds.yandex.net/get-altay/16114102/2a0000019b35f65df925e85fc7234cbc40f8/XXXL",
      alt: "Автомобиль после мойки",
      title: "Автомобиль после комплексной мойки",
    },
    {
      id: 2,
      src: "https://avatars.mds.yandex.net/get-altay/15183726/2a00000196d98d0ab00e8853beeb0122ff79/XXXL",
      alt: "Детейлинг салона",
      title: "Детейлинг салона",
    },
    {
      id: 3,
      src: "https://avatars.mds.yandex.net/get-altay/16443419/2a0000019b35f4d3e9a82ab16e0bf043950f/XXXL",
      alt: "Полировка кузова",
      title: "Мойка двигателя",
    },
    {
      id: 4,
      src: "https://avatars.mds.yandex.net/get-altay/15431134/2a00000196d98d8690e86a0999886435d5dd/XXXL",
      alt: "Чистка салона",
      title: "Техническая мойка",
    },
    {
      id: 5,
      src: "https://avatars.mds.yandex.net/get-altay/10814540/2a0000018a9af01c9d6d78c0d6523804ab74/XXXL",
      alt: "Мойка двигателя",
      title: "Мойка мотоцикла",
    },
    {
      id: 6,
      src: "https://avatars.mds.yandex.net/get-altay/16771051/2a000001971067529e299fc7260cee790db0/XXXL",
      alt: "Защитное покрытие",
      title: "Защитное покрытие",
    },
    {
      id: 7,
      src: "https://avatars.mds.yandex.net/get-altay/18148618/2a0000019b35f430b7c58117a825b8676c2a/XXXL",
      alt: "Защитное покрытие",
      title: "Защитное покрытие",
    },
    {
      id: 8,
      src: "https://avatars.mds.yandex.net/get-altay/14839591/2a00000196d98d4f522f90597a38c1c1b224/XXXL",
      alt: "Защитное покрытие",
      title: "Защитное покрытие",
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Возобновляем автопрокрутку через 5 секунд после ручного переключения
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
      }, 4000); // Меняем слайд каждые 4 секунды
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, images.length]);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-block">
        <div
          ref={blockRef}
          className={`gallery-header scroll-reveal-bottom ${
            blockVisible ? "revealed" : ""
          }`}
        >
          <h1>Галерея</h1>
          <p>
            Посмотрите результаты нашей работы — качество, которому можно
            доверять
          </p>
        </div>

        <div
          className={`gallery-slider scroll-reveal-bottom-scale ${
            blockVisible ? "revealed" : ""
          } scroll-reveal-delay-1`}
        >
          <div className="gallery-container">
            <div
              className="gallery-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div key={image.id} className="gallery-slide">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="gallery-slide-overlay"></div>
                </div>
              ))}
            </div>

            <button
              className="gallery-button gallery-button-prev"
              onClick={goToPrevious}
              aria-label="Предыдущий слайд"
            >
              <IoChevronBack size={28} />
            </button>
            <button
              className="gallery-button gallery-button-next"
              onClick={goToNext}
              aria-label="Следующий слайд"
            >
              <IoChevronForward size={28} />
            </button>
          </div>

          <div className="gallery-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`gallery-indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
