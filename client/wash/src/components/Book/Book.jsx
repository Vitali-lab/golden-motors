import { useEffect, useMemo, useState } from "react";
import {
  IoCheckmark,
  IoLogoWhatsapp,
  IoCallOutline,
} from "react-icons/io5";
import {
  servises,
  complexs,
  extraServices,
  companyPhone,
  companyPhoneHref,
  companyWhatsApp,
  companyHours,
} from "../../app/appInfo";
import { API_ENDPOINTS, IS_STATIC_BUILD } from "../../config/api";
import "./Book.css";

const points = [
  "Подтвердим время по телефону",
  "Подберём услугу под класс автомобиля",
  "Ответим на вопросы по цене до записи",
];

export const Book = ({ bookRef, selectedService }) => {
  const allServices = useMemo(
    () => [
      ...servises,
      ...complexs,
      ...extraServices,
      {
        id: 30,
        title: "Консультация по оклейке плёнкой автомобиля",
        price: "",
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
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  useEffect(() => {
    if (!selectedService) return;
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validatePhone = (phone) => phone.replace(/\D/g, "").length >= 9;

  const openWhatsApp = () => {
    const lines = [
      "Заявка на мойку Golden Motors",
      `Имя: ${formData.name.trim()}`,
      `Телефон: ${formData.phone.trim()}`,
      `Услуга: ${formData.service}`,
    ];
    if (formData.note.trim()) lines.push(`Примечание: ${formData.note.trim()}`);

    window.open(
      `${companyWhatsApp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setFeedback({
      type: "success",
      text: "Заявка сформирована. Отправьте её в открывшемся WhatsApp.",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Пожалуйста, укажите ваше имя";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Пожалуйста, укажите ваш телефон";
    } else if (!validatePhone(formData.phone)) {
      nextErrors.phone = "Некорректный номер телефона";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFeedback({ type: "", text: "" });
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setFeedback({ type: "", text: "" });

    if (IS_STATIC_BUILD) {
      openWhatsApp();
      setIsSubmitting(false);
      return;
    }

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
        setFeedback({
          type: "success",
          text: "Спасибо! Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({
          name: "",
          phone: "",
          service: allServices[0]?.title || "",
          note: "",
        });
      } else {
        setFeedback({
          type: "error",
          text: data.error || "Произошла ошибка при отправке заявки",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFeedback({
        type: "error",
        text: "Не удалось отправить заявку. Проверьте подключение и попробуйте снова.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={bookRef} className="section book" id="book">
      <div className="wrap book-layout">
        <div className="book-copy">
          <span className="eyebrow">Запись</span>
          <h2 className="section-title">Забронируйте время в боксе</h2>
          <p className="section-lead">
            Оставьте имя и телефон - мы свяжемся, уточним детали и подтвердим
            удобное время.
          </p>

          <ul className="book-points">
            {points.map((point) => (
              <li key={point}>
                <IoCheckmark size={16} />
                {point}
              </li>
            ))}
          </ul>

          <div className="book-contact">
            <p className="book-contact__label">Или свяжитесь напрямую</p>
            <a className="book-phone" href={companyPhoneHref}>
              <IoCallOutline size={20} />
              {companyPhone}
            </a>
            <p className="book-hours">{companyHours}</p>
            <a
              className="btn btn--ghost book-whatsapp"
              href={companyWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp size={18} />
              Написать в WhatsApp
            </a>
          </div>
        </div>

        <form className="book-form" onSubmit={handleSubmit} noValidate>
          <div className="book-form__row">
            <div className="field">
              <label htmlFor="name">
                Имя <span>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ваше имя"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className="field__error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="field">
              <label htmlFor="phone">
                Телефон <span>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="+375 (29) 123-45-67"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className="field__error" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="service">Услуга</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              {allServices.map((item) => (
                <option key={item.id ?? item.title} value={item.title}>
                  {item.price ? `${item.title} - ${item.price}` : item.title}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="note">Примечание</label>
            <textarea
              id="note"
              name="note"
              placeholder="Марка автомобиля, удобное время или пожелания"
              value={formData.note}
              onChange={handleChange}
              rows="3"
            />
          </div>

          {feedback.text && (
            <p
              className={`book-feedback book-feedback--${feedback.type}`}
              role="alert"
            >
              {feedback.text}
            </p>
          )}

          <button
            type="submit"
            className="btn btn--gold book-submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Отправка..."
              : IS_STATIC_BUILD
                ? "Отправить в WhatsApp"
                : "Записаться"}
          </button>

          {IS_STATIC_BUILD && (
            <p className="book-hint">
              Откроется WhatsApp с готовым текстом заявки - останется нажать
              «Отправить».
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
