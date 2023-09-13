export const menuLinks = [
  {
    text: "profesionales",
    link: "profesionals",
  },
  {
    text: "planes",
    link: "plans",
  },
  {
    text: "gimnasio",
    link: "gym",
  },
  {
    text: "clases",
    link: "clases",
  },
];

export const teachers = [
  {
    name: "juan mosquella",
    image: `/teacher.jpg`,
    type: "musculacion",
  },
  {
    name: "daiana del valle",
    image: "/teacher2.jpg",
    type: "spinning",
  },
  {
    name: "sofia puentes",
    image: "/teacher3.jpg",
    type: "crossfit",
  },
  {
    name: "matias ezequiel",
    image: "/teacher4.jpg",
    type: "musculacion",
  },
];

const planClasico = [
  {
    contains: true,
    detail: "Sala de maquinas",
  },
  {
    contains: true,
    detail: "duchas y cambiadores",
  },
  {
    contains: true,
    detail: "seguimiento personalizado",
  },
  {
    contains: false,
    detail: "plan nutricional",
  },
  {
    contains: false,
    detail: "clases personalizadas",
  },
];

export const trainingPlans = [
  {
    type: "Clásico",
    price: 5000,
    details: planClasico,
  },
  {
    type: "Pro",
    price: 8000,
    details: planClasico,
  },
  {
    type: "VIP",
    price: 12000,
    details: planClasico,
  },
];

export const carruselImages = [
  {
    title: "Boxeo",
    img: "/box.png",
    text: "En Physical Point Gym, nuestro compromiso es ayudarte a alcanzar tus metas de bienestar y a vivi y motivador para que puedas entrenar de manera segura y eficiente.",
  },
  {
    title: "Waterpolo",
    img: "/waterpolo.png",
    text: "En Physical Point Gym, nuestro compromiso es ayudarte a alcanzar tus metas de bienestar y a vivi y motivador para que puedas entrenar de manera segura y eficiente.",
  },
  {
    title: "Yoga",
    img: "/yoga.png",
    text: "En Physical Point Gym, nuestro compromiso es ayudarte a alcanzar tus metas de bienestar y a vivi y motivador para que puedas entrenar de manera segura y eficiente.",
  },
  {
    title: "Boxeo",
    img: "/box.png",
    text: "En Physical Point Gym, nuestro compromiso es ayudarte a alcanzar tus metas de bienestar y a vivi y motivador para que puedas entrenar de manera segura y eficiente.",
  },
  {
    title: "Waterpolo",
    img: "/waterpolo.png",
    text: "En Physical Point Gym, nuestro compromiso es ayudarte a alcanzar tus metas de bienestar y a vivi y motivador para que puedas entrenar de manera segura y eficiente.",
  },
  {
    title: "Yoga",
    img: "/yoga.png",
    text: "En Physical Point Gym, nuestro compromiso es ayudarte a alcanzar tus metas de bienestar y a vivi y motivador para que puedas entrenar de manera segura y eficiente.",
  },
];

export const icons = [
  { id: 1, icon: "instagram.svg" },
  { id: 2, icon: "whatsapp.svg" },
  { id: 3, icon: "facebook.svg" },
  { id: 4, icon: "twitter.svg" },
];
