import ImageLocker from "./images/Image-Locker.webp";
import Spotify from "./images/Spotify-Library.webp";
import Amazon from "./images/Amazon-Home.webp";
import WITW from "./images/WITW.webp";
import ToDo from "./images/ToDo.webp";

export const WProjects = [
  {
    color: "#60a5fa",
    name: "Image Locker",
    tools: "React · Tailwind · Firebase",
    position: "left",
    img: ImageLocker,
    desc: "An online image storage site built using React, Tailwind, and Google Firebase. Features user accounts, image storage/deletion and downloading. Authorization handled via Firebase and gallery filled using Storage and Firestore Database.",
    site: "https://photo-storage.vercel.app/",
    repo: "https://github.com/AnthonyMejia0/photo-storage",
  },
  {
    color: "#1DB954",
    name: "Spotify Controller",
    tools: "Next.Js · API · Tailwind · NextAuth",
    position: "right",
    img: Spotify,
    desc: "A Spotify clone built using the Spotify API, Next.Js, Tailwind, NextAuth, and Middleware. Allows users to access their Spotify library, search for songs and artists and remotely control playback of an existing Spotify instance.",
    site: "https://spotify-clone-eta-smoky.vercel.app/",
    repo: "https://github.com/AnthonyMejia0/Spotify-Clone",
  },
  {
    color: "#FF9900",
    name: "Amazon Clone",
    tools: "React · Typescript · Tailwind · Firebase",
    position: "left",
    img: Amazon,
    desc: "An Amazon clone built using React, Typescript, Google Firebase, and Tailwind CSS. Supports credit card payments through Stripe for testing purposes. (Use card information 42424242... for test payment.)",
    site: "https://clone-442a3.web.app/",
    repo: "https://github.com/AnthonyMejia0/amazon-clone",
  },
  {
    color: "#ffc726",
    name: "Where in The World?",
    tools: "React · Typescript · Tailwind · API",
    position: "right",
    img: WITW,
    desc: "This is a React and Typescript project using the rest countries api allowing users to view country details as well as search for specific countries.",
    site: "https://rest-api-countries-7mlml3v8p-anthonymejia0.vercel.app/",
    repo: "https://github.com/AnthonyMejia0/rest-api-countries",
  },
  {
    color: "#3b82f6",
    name: "To-Do List",
    tools: "React · Tailwind",
    position: "left",
    img: ToDo,
    desc: "This is a To Do List built using React with hooks and Recoil for state management along with local storage.",
    site: "https://todo-list-ecru-chi.vercel.app/",
    repo: "https://github.com/AnthonyMejia0/todo-list",
  },
];
