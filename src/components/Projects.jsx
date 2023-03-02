import Project from "./Project";

function Projects() {
  return (
    <div id="projects" className="mt-24 mb-40">
      <h2 className="mx-auto font-bold text-3xl lg:text-5xl text-dark-blue w-max font-playfair mb-16">
        Check Out My Work
      </h2>

      <div className="space-y-20">
        <Project
          color="#60a5fa"
          name="Image Locker"
          tools="React · Tailwind · Firebase"
          position="left"
          img="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2FImage-Locker.png?alt=media&token=1ce42802-2990-4821-a1a9-2286b07c514e"
          desc="An online image storage site built using React, Tailwind, and Google
            Firebase. Features user accounts, image storage/deletion and
            downloading. Authorization handled via Firebase and gallery filled
            using Storage and Firestore Database."
          site="https://photo-storage.vercel.app/"
          repo="https://github.com/AnthonyMejia0/photo-storage"
        />

        <Project
          color="#1DB954"
          name="Spotify Controller"
          tools="Next.Js · API · Tailwind · NextAuth"
          position="right"
          img="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2Fspotify-library.png?alt=media&token=a0956117-51bf-421d-a841-b82ce40f7d85"
          desc="A Spotify clone built using the Spotify API, Next.Js, Tailwind, NextAuth,
            and Middleware. Allows users to access their Spotify library, search for songs
            and artists and remotely control playback of an existing Spotify instance."
          site="https://spotify-clone-eta-smoky.vercel.app/"
          repo="https://github.com/AnthonyMejia0/Spotify-Clone"
        />

        <Project
          color="#FF9900"
          name="Amazon Clone"
          tools="React · Typescript · Tailwind · Firebase"
          position="left"
          img="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2Famazon-home.png?alt=media&token=7e99fa79-58bb-4481-bb67-6756bcb8c2a3"
          desc="An Amazon clone built using React, Typescript, Google Firebase, and Tailwind CSS. Supports
            credit card payments through Stripe for testing purposes. (Use card information 42424242...
            for test payment.)"
          site="https://clone-442a3.web.app/"
          repo="https://github.com/AnthonyMejia0/amazon-clone"
        />

        <Project
          color="#000000"
          name="Where in The World?"
          tools="React · Typescript · Tailwind · API"
          position="right"
          img="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2FWhere%20in%20the%20world%20Home.png?alt=media&token=e962a263-e806-4f0c-8947-f852460c6b2d"
          desc="This is a React and Typescript project using the rest countries api allowing users to
            view country details as well as search for specific countries."
          site="https://rest-api-countries-tau.vercel.app/"
          repo="https://github.com/AnthonyMejia0/rest-api-countries"
        />

        <Project
          color="#3b82f6"
          name="To-Do List"
          tools="React · Tailwind"
          position="left"
          img="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2Ftodo.png?alt=media&token=75d9ee8d-fbf6-4a14-89fa-b80e0be7713f"
          desc="This is a To Do List built using React with hooks and Recoil for state management along with local storage."
          site="https://todo-list-ecru-chi.vercel.app/"
          repo="https://github.com/AnthonyMejia0/todo-list"
        />
      </div>
    </div>
  );
}

export default Projects;
