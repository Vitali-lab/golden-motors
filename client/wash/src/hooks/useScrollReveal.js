import { useEffect, useRef, useState } from "react";

/**
 * Хук для анимации появления элементов при скролле
 * @param {Object} options - Опции для Intersection Observer
 * @param {number} options.threshold - Порог видимости (0-1)
 * @param {string} options.rootMargin - Отступ от корня
 * @param {boolean} options.once - Анимировать только один раз
 * @returns {Array} [ref, isVisible]
 */
export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    once = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once]);

  return [elementRef, isVisible];
};
