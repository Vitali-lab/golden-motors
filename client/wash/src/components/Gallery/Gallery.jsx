import { useEffect, useRef, useState } from "react";
import {
  IoArrowBack,
  IoArrowForward,
  IoClose,
  IoExpandOutline,
} from "react-icons/io5";
import { galleryImages } from "../../app/gallery";
import { companyMapLink } from "../../app/appInfo";
import "./Gallery.css";

export const Gallery = () => {
  const [current, setCurrent] = useState(null);
  const closeRef = useRef(null);
  const isOpen = current !== null;

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event) => {
      if (event.key === "Escape") setCurrent(null);
      if (event.key === "ArrowRight") {
        setCurrent((value) => (value + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft") {
        setCurrent(
          (value) => (value - 1 + galleryImages.length) % galleryImages.length,
        );
      }
    };

    document.body.classList.add("is-locked");
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const go = (step) => {
    setCurrent((value) => (value + step + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="section gallery" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__copy">
            <span className="eyebrow">Галерея</span>
            <h2 className="section-title">Наша работа без фильтров</h2>
            <p className="section-lead">
              Реальные автомобили в боксах Golden Motors. Нажмите на фото, чтобы
              рассмотреть детали.
            </p>
          </div>
          <a
            className="section-link"
            href={companyMapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Фото на Яндекс Картах
          </a>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={image.id}
              className="gallery-tile"
              style={{ gridArea: image.area }}
              onClick={() => setCurrent(index)}
              aria-label={`Открыть фото: ${image.title}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span className="gallery-tile__zoom" aria-hidden="true">
                <IoExpandOutline size={18} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={galleryImages[current].title}
          onClick={() => setCurrent(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label="Закрыть"
            onClick={() => setCurrent(null)}
            ref={closeRef}
          >
            <IoClose size={24} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Предыдущее фото"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
          >
            <IoArrowBack size={22} />
          </button>

          <figure
            className="lightbox__figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={galleryImages[current].id}
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
            />
            <figcaption>
              {galleryImages[current].title}
              <span>
                {current + 1} / {galleryImages.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Следующее фото"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
          >
            <IoArrowForward size={22} />
          </button>
        </div>
      )}
    </section>
  );
};
