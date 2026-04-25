import Podera from './images/Podera-Home.png';
import ImageLocker from './images/Image-Locker.webp';
import Spotify from './images/Spotify-Library.webp';
import WITW from './images/WITW.webp';
import Bookmarks from './images/Bookmarks.webp';
import Devlinks from './images/Devlinks.webp';
import PrioriT from './images/Priorit.webp';

export const WProjects = [
  {
    color: '#02B7B3',
    name: 'PrioriT: To-Do List & Planner',
    tools: 'React Native · Expo · Typescript · Zustand · Tailwind CSS',
    position: 'right',
    img: PrioriT,
    desc: 'Take control of your tasks with PrioriT - a streamlined to-do list and planner that helps you focus on what matters most. Perfect for busy professionals, students, or anyone wanting to organize their day better.',
    site: 'https://play.google.com/store/apps/details?id=com.anthill.Priorit&pcampaignid=web_share',
    repo: '',
    mobileApp: true,
  },
  {
    color: '#4068d1',
    name: 'Podera (Startup)',
    tools: 'NextJS · SCSS · AWS · API',
    position: 'left',
    img: Podera,
    desc: 'An AI-powered full-stack application that transforms articles and blogs into natural-sounding podcast episodes, making written content more accessible and engaging through seamless audio generation.',
    site: '',
    repo: '',
  },
  {
    color: '#014745',
    name: 'Bookmark Manager',
    tools: 'Next.js · Typescript · SASS · Supabase · Shadcn',
    position: 'right',
    img: Bookmarks,
    desc: 'Full-stack web application designed to help users save, organize, and manage their favorite links in one convenient place. Users can create bookmarks, categorize them with tags, and quickly filter or search through their collection for easy access.',
    site: 'https://bookmarks.anthonymejia.dev/dashboard',
    repo: 'https://github.com/AnthonyMejia0/bookmark-manager',
  },
  {
    color: '#633CFF',
    name: 'devlinks',
    tools: 'Next.js · Typescript · Tailwind CSS · Supabase · Shadcn · dnd-kit',
    position: 'left',
    img: Devlinks,
    desc: 'Devlinks is a full-stack link-sharing application that lets users create a personalized public profile to showcase all of their social media accounts and online platforms in one place.',
    site: 'https://devlinks.anthonymejia.dev/',
    repo: 'https://github.com/AnthonyMejia0/link-sharing',
  },
  {
    color: '#1DB954',
    name: 'Spotify Controller',
    tools: 'Next.Js · API · Tailwind · NextAuth',
    position: 'right',
    img: Spotify,
    desc: 'A Spotify clone built using the Spotify API, Next.Js, Tailwind, NextAuth, and Middleware. Allows users to access their Spotify library, search for songs and artists and remotely control playback of an existing Spotify instance.',
    site: 'https://spotify-clone-eta-smoky.vercel.app/',
    repo: 'https://github.com/AnthonyMejia0/Spotify-Clone',
  },
  {
    color: '#60a5fa',
    name: 'Image Locker',
    tools: 'React · Tailwind · Firebase',
    position: 'left',
    img: ImageLocker,
    desc: 'An online image storage site built using React, Tailwind, and Google Firebase. Features user accounts, image storage/deletion and downloading. Authorization handled via Firebase and gallery filled using Storage and Firestore Database.',
    site: 'https://photo-storage.vercel.app/',
    repo: 'https://github.com/AnthonyMejia0/photo-storage',
  },
  {
    color: '#ffc726',
    name: 'Where in The World?',
    tools: 'React · Typescript · Tailwind · API',
    position: 'right',
    img: WITW,
    desc: 'This is a React and Typescript project using the rest countries api allowing users to view country details as well as search for specific countries.',
    site: 'https://rest-api-countries-tau.vercel.app/',
    repo: 'https://github.com/AnthonyMejia0/rest-api-countries',
  },
];
