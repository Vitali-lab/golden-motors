import { useEffect, useMemo, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { servises, complexs, extraServices } from "../../app/appInfo";
import { API_ENDPOINTS } from "../../config/api";
import "./Book.css";

export const Book = ({ bookRef, selectedService }) => {
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 });

  const allServices = useMemo(
    () => [
      ...servises,
      ...complexs,
      ...extraServices,
      {
        id: 30,
        title: "Консультация по оклейке плёнкой автомобиля",
      },
    ],
    [],
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: allServices[0]?.title || "",
    note: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (!selectedService) return;
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validatePhone = (phone) => {
    // Удаляем все нецифровые символы для проверки
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length >= 9;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, укажите ваше имя";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Пожалуйста, укажите ваш телефон";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Некорректный номер телефона";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrors({});

    try {
      const response = await fetch(API_ENDPOINTS.BOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          note: formData.note.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);

        // Сброс формы
        setFormData({
          name: "",
          phone: "",
          service: allServices[0]?.title || "",
          note: "",
        });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setErrors({
          submit: data.error || "Произошла ошибка при отправке заявки",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        submit:
          "Не удалось отправить заявку. Проверьте подключение к интернету и попробуйте снова.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={bookRef} className="book">
      <div className="book-block">
        <div
          ref={textRef}
          className={`book-text scroll-reveal-bottom ${
            textVisible ? "revealed" : ""
          }`}
        >
          <h1>Записаться на мойку</h1>
          <p>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</p>
        </div>
        <form
          ref={formRef}
          className={`book-form scroll-reveal-bottom-scale ${
            formVisible ? "revealed" : ""
          } scroll-reveal-delay-1`}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="book-form-inputs">
            <div className="book-form-input-name">
              <label htmlFor="name">
                Имя <span className="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className="error-message" role="alert">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="book-form-input-phone">
              <label htmlFor="phone">
                Телефон <span className="required">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+375 (29) 123-45-67"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[\+]?[0-9\s\-\(\)]+"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className="error-message" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>
          <div className="book-form-select">
            <label htmlFor="service">Выберите услугу</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              {allServices.map((item) => {
                return (
                  <option key={item.id ?? item.title} value={item.title}>
                    {item.title} - {item.price}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="book-form-input-note">
            <label htmlFor="note">Примечание (необязательно)</label>
            <textarea
              id="note"
              name="note"
              placeholder="Дополнительная информация"
              value={formData.note}
              onChange={handleChange}
              rows="4"
            />
          </div>
          {errors.submit && (
            <div className="book-form-error" role="alert">
              <span className="error-message">{errors.submit}</span>
            </div>
          )}
          {submitSuccess && (
            <div className="book-form-success" role="alert">
              <span className="success-message">
                ✅ Спасибо! Мы свяжемся с вами в ближайшее время.
              </span>
            </div>
          )}
          <div className="book-form-button">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Записаться"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
