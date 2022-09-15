import { images } from "../contstants";
const data = {
  services: [
    {
      icon: images.uiux,
      name: "UI/UX",
      text: "Est ante in nibh mauris cursus mattis molestie.",
    },
    {
      icon: images.developer,
      name: "Devlopment",
      text: "Leo vel fringilla est ullamcorper. Tincidunt eget nullam non nisi.",
    },
    {
      icon: images.motion,
      name: "Motion",
      text: "Amet massa vitae tortor condimentum. Maecenas volutpat blandit aliquam etiam erat.",
    },
    {
      icon: images.brand,
      name: "Branding",
      text: "Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
    },
    {
      icon: images.photo,
      name: "photography",
      text: "Vel eros donec Maecenas volutpat ac odio tempor orci. ",
    },
    {
      icon: images.icon,
      name: "illustration",
      text: " Enim eu turpis egestas pretium aenean pharetra.",
    },
  ],
  works: [
    { name: "Lorem Ipsum", skills: "development", img: images.w1 },
    { name: "aenean pharetra.", skills: "UI/Ux", img: images.w2 },
    { name: " volutpat  ", skills: "development/UI", img: images.w3 },
  ],
};

export default data;
