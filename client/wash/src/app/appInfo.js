import standart_wash from "../assets/standart_wash.png";
import techno_wash from "../assets/techno_wash.png";
import without_sushka from "../assets/without_sushka.png";
import wash_with_kwarc from "../assets/wash_with_kwarc.png";
import uborka_salona from "../assets/uborka_salona.png";
import bagajnik from "../assets/bagajnik.png";
import vlaga_salon from "../assets/vlaga_salon.png";

export const companyName = "Golden Motors";
export const companyPhone = "+375 (44) 715-66-66";
export const companyAdress = "г.Минск, ул. Тимирязева, 46к8";
export const companyDevis =
  "Профессиональная автомойка с исключительным результатом. Запишитесь сейчас и почувствуйте разницу.";

export const servises = [
  {
    id: 1,
    title: "Стандартная мойка",
    icon: "IoWaterOutline",
    description: "Мойка кузова, воск, сушка, проемы",
    price: "от 26 BYN",
    img: standart_wash,
  },
  {
    id: 2,
    title: "Техномойка",
    description: "Мойка кузова (сбить грязь)",
    price: "от 10 BYN",
    img: techno_wash,
  },
  {
    id: 3,
    title: "Мойка без сушки",
    description: "Стандартная мойка без этапа сушки",
    price: "от 20 BYN",
    img: without_sushka,
  },
  {
    id: 161,
    title: "Мойка «Кварц»",
    description: "Мойка кузова, кварцевое покрытие, сушка, проемы",
    price: "от 56 BYN",
    img: wash_with_kwarc,
  },
  {
    id: 4,
    title: "Уборка салона",
    description: "Уборка салона пылесосом",
    price: "от 12 BYN",
    img: uborka_salona,
  },
  {
    id: 41,
    title: "Уборка багажника",
    description: "Уборка багажника пылесосом",
    price: "от 5 BYN",
    img: bagajnik,
  },
  {
    id: 5,
    title: "Влажная уборка",
    description: "Влажная уборка салона",
    price: "от 10 BYN",
    img: vlaga_salon,
  },
  {
    id: 6,
    title: "Обновление пластика",
    description: "Обновление пластиковых элементов салона",
    price: "от 10 BYN",
    img: "https://images.pexels.com/photos/14870125/pexels-photo-14870125.jpeg",
  },
  {
    id: 7,
    title: "Мойка стекол",
    description: "Мойка стекол изнутри и снаружи",
    price: "от 13 BYN",
    img: "https://images.pexels.com/photos/20044636/pexels-photo-20044636.jpeg",
  },
  {
    id: 71,
    title: "Мойка панорамы",
    description: "Мойка стекла панорамы (люк) крыши",
    price: "от 5 BYN",
    img: "https://images.pexels.com/photos/9380447/pexels-photo-9380447.jpeg", // Заглушка (Sunroof)
  },
  {
    id: 8,
    title: "Мойка ковриков",
    description: "Чистка ковриков",
    price: "от 5 BYN",
    img: "https://images.pexels.com/photos/4489736/pexels-photo-4489736.jpeg", // Заглушка (Mats)
  },
  {
    id: 9,
    title: "Отбеливание дисков",
    description: "Отбеливание литых дисков",
    price: "от 25 BYN",
    img: "https://images.pexels.com/photos/11644368/pexels-photo-11644368.jpeg", // Заглушка (Wheels)
  },
  {
    id: 11,
    title: "Чернение резины",
    description: "Обработка шин",
    price: "от 10 BYN",
    img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg", // Заглушка (Tires)
  },
  {
    id: 12,
    title: "Мойка двигателя",
    description: "Профессиональная мойка подкапотного пространства",
    price: "от 30 BYN",
    img: "https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg", // Заглушка (Engine)
  },
  {
    id: 18,
    title: "Антидождь",
    description: "Гидрофобная обработка стекол",
    price: "от 25 BYN",
    img: "https://images.pexels.com/photos/13627447/pexels-photo-13627447.jpeg", // Заглушка (Rain repellent)
  },
];
export const extraServices = [
  {
    title: "Химчистка салона",
    details: [
      "Глубокая очистка салона",
      "Удаление пятен",
      "Обработка материалов",
    ],
    price: "от 300 BYN",
    description: "Полная химчистка салона автомобиля",
    img: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg", // Заглушка (Detailing)
    hit: false,
  },
  {
    title: "Полировка кузова",
    details: [
      "Восстановительная полировка",
      "Устранение царапин",
      "Придание блеска",
    ],
    price: "от 350 BYN",
    description: "Профессиональная полировка ЛКП",
    img: "https://images.pexels.com/photos/14532657/pexels-photo-14532657.jpeg", // Заглушка (Polishing)
    hit: false,
  },
  {
    id: 10,
    title: "Уход за кожей",
    description: "Обновление кожи (+4,00 руб)",
    price: "от 13 BYN",
    img: "https://images.pexels.com/photos/3770176/pexels-photo-3770176.jpeg", // Заглушка (Leather)
  },
  {
    id: 17,
    title: "Твердый воск",
    description: "Нанесение твердого воска (вручную)",
    price: "от 50 BYN",
    img: "https://images.pexels.com/photos/7565434/pexels-photo-7565434.jpeg", // Заглушка (Wax)
  },
];

export const complexs = [
  {
    title: "Комплекс «Все включено»",
    details: [
      "Мойка кузова и проемов",
      "Воск и сушка",
      "Уборка салона и багажника пылесосом",
      "Обновление пластика в салоне",
      "Влажная уборка",
      "Мойка стекол (внутри/снаружи)",
      "Мойка ковриков",
    ],
    price: "от 62 BYN",
    description: "Полный уход за автомобилем: кузов и салон",
    img: "https://images.pexels.com/photos/14023348/pexels-photo-14023348.jpeg",
    hit: true,
  },
];

export const servicesOb = [
  {
    id: 1,
    title: "Капот целиком",
    description: "Оклейка капота защитной плёнкой",
    price: "от 650 BYN",
  },
  {
    id: 2,
    title: "Капот 1/3",
    description: "Частичная оклейка капота",
    price: "от 315 BYN",
  },
  {
    id: 3,
    title: "Передний бампер",
    description: "Оклейка переднего бампера",
    price: "от 720 BYN",
  },
  {
    id: 4,
    title: "Передняя оптика",
    description: "Защитная плёнка на фары",
    price: "от 150 BYN",
  },
  {
    id: 5,
    title: "Стойки лобового стекла",
    description: "Оклейка стоек лобового стекла",
    price: "от 150 BYN",
  },
  {
    id: 6,
    title: "Крылья целиком",
    description: "Полная оклейка крыльев",
    price: "от 720 BYN",
  },
  {
    id: 7,
    title: "Зеркала заднего вида",
    description: "Оклейка зеркал защитной плёнкой",
    price: "от 180 BYN",
  },
  {
    id: 8,
    title: "Внутренние пороги (4 шт)",
    description: "Защита внутренних порогов",
    price: "от 180 BYN",
  },
  {
    id: 9,
    title: "Зоны под ручками",
    description: "Оклейка зон под дверными ручками",
    price: "от 70 BYN",
  },
  {
    id: 10,
    title: "Полоса над лобовым стеклом",
    description: "Защитная полоса плёнки",
    price: "от 135 BYN",
  },
  {
    id: 11,
    title: "Зона погрузки",
    description: "Оклейка зоны погрузки багажника",
    price: "от 80 BYN",
  },
  {
    id: 12,
    title: "Низа дверей",
    description: "Защита нижней части дверей",
    price: "от 100 BYN",
  },
  {
    id: 13,
    title: "Внешние пороги",
    description: "Оклейка внешних порогов",
    price: "от 250 BYN",
  },
  {
    id: 14,
    title: "Крылья частично",
    description: "Частичная оклейка крыльев",
    price: "от 70 BYN",
  },
  {
    id: 15,
    title: "Канты",
    description: "Оклейка кантов элементов",
    price: "от 70 BYN",
  },
  {
    id: 16,
    title: "Двери 1/3",
    description: "Частичная оклейка дверей",
    price: "от 500 BYN",
  },
];
export const complexesOb = [
  {
    id: 1,
    title: "Комплект 1",
    details: [
      "Часть капота",
      "Фары",
      "Часть крыши",
      "Зоны под ручками",
      "Крылья",
      "Канты дверей",
    ],
    price: "от 650 BYN",
  },
  {
    id: 2,
    title: "Комплект 2",
    details: [
      "Капот полностью",
      "Передняя часть крыльев",
      "Передняя оптика",
      "Зеркала",
      "Передняя часть крыши",
      "Стойки лобового стекла",
      "Зоны под ручками",
      "Зона погрузки багажника",
      "Канты дверей",
    ],
    price: "от 1100 BYN",
  },
  {
    id: 3,
    title: "Комплект 3",
    details: [
      "Передний бампер",
      "Капот полностью",
      "Крылья полностью",
      "Передняя оптика",
      "Зеркала",
      "Передняя часть крыши",
      "Стойки лобового стекла",
      "Зоны под ручками",
      "Зона погрузки багажника",
      "Канты дверей",
      "Внутренние пороги",
    ],
    price: "от 2700 BYN",
  },
  {
    id: 4,
    title: "Комплект 4",
    details: ["Оклейка автомобиля полностью"],
    price: "от 9800 BYN",
  },
];

export const extraServicesOb = [
  {
    id: 1,
    title: "Тонировка стекол",
    description: "Задняя полусфера",
    price: "от 300 BYN",
  },
  {
    id: 2,
    title: "Снятие плёнки",
    description: "Демонтаж защитной плёнки",
    price: "от 60 BYN",
  },
];
