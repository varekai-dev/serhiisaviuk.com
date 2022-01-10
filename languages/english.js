import { v4 as uuid } from "uuid";

export const portfolio = [
  {
    name: "Amazon clone",
    website: "https://next-amazona-sepia.vercel.app/",
    apiko: false,
    description:
      "Shop website with basket, admin panel, profile, orders. Connected to Paypal payment system. Backend is done on Next.js API",
    technologies: ["next", "mongodb", "paypal", "next connect", "material ui"],
    id: uuid(),
  },
  {
    name: "Coctail shop",
    website: "https://coctail-shop.vercel.app/",
    apiko: true,
    description:
      "A website with cocktails that uses free API TheCockTailDB for data. It is made with a cart for orders with modern design. There is alcotester, so you won't miss drunk status😋",
    technologies: [
      "react",
      "react-router-dom",
      "hooks",
      "skeleton-react",
      "tostify",
      "rest-api",
      "classnames",
      "node-sass",
    ],
    id: uuid(),
  },
  {
    name: "MultiStep Form",
    apiko: true,
    website: "https://multistepform.vercel.app/",
    description:
      "Multi-step registration form from Figma design that uses a switch to change steps and collect all data in context to send it after the form has been submitted",
    technologies: ["react", "hooks", "context", "figma"],
    id: uuid(),
  },

  {
    name: "MovieDB",
    website: "https://moviesdb-ten.vercel.app/",
    apiko: true,
    description:
      "A simple website with two pages that get movies from the database. Has pagination, rating popup, and routes",
    technologies: [
      "react",
      "react-router-dom",
      "hooks",
      "context",
      "pagination",
      "api",
    ],
    id: uuid(),
  },
  {
    name: "Netflix Clone",
    website: "https://netflix-clone-varekai-dev.vercel.app/",
    description:
      "Copy of Netflix website with registration and login form. A simple website with movie API to see what is in trends.",
    technologies: ["react", "react-router-dom", "hooks", "firebase", "auth"],
    id: uuid(),
  },
  {
    name: "Cherry Bonus",
    website: "https://projectx-frontend.vercel.app/",
    description:
      "Affiliate website to compare different casinos and bookies. Has ratings, blog, skeleton loading, breadcrumbs",
    technologies: [
      "nextjs",
      "strapi",
      "mongoDB",
      "emailjs",
      "cloudinary",
      "vercel",
      "heroku",
      "React Select",
      "google-auth",
    ],
    id: uuid(),
  },
  {
    name: "React Shop",
    website: "https://varekai-dev.github.io/react-shop/",
    description: "Simple shop with the cart that uses Fortnite API",
    technologies: ["react", "hooks", "api", "github-pages"],
    id: uuid(),
  },
];

export const realProjects = [
  {
    website: "jobheron.com",
    time: "September 2021 - January 2022",
    name: "Jobheron - UK's Leading Online Recruitment Provider",
    description:
      "An application that gives all tools of a recruiter. With a website, you can find candidates for your job simpler, faster, and better",
    technologies: [
      "react",
      "redux",
      "redux-saga",
      "typescript",
      "styled-components",
      "React Testing Library",
      "react-hook-form",
      "yup",
      "algoliasearch",
      "@reduxjs/toolkit",
      "antd",
      "auth0",
      "stripe",
    ],
    scope: [
      "Making layouts",
      "Writing unit tests",
      "Writing logic",
      "Connect Strapi payment system",
      "refactoring",
      "Fixing bugs",
    ],
    id: uuid(),
  },
  {
    website: "NDA",
    time: "April 2021 - September 2021",
    name: "Loyalty program",
    description:
      "The separate website that is connected to main where user can register, login. Account collect whole data order history, notification center, shop with different items that user can get for his loyalty",
    technologies: [
      "nextjs",
      "strapi",
      "useSWR",
      "eslint",
      "react-icons",
      "clsx",
      "formik",
      "yup",
      "cloudinary",
      "vercel",
      "MongoDB",
      "amazon S3",
      "module-scss",
    ],
    scope: [
      "Creating 8 pages",
      "Connecting registration/login/reset password form to backend",
      "Optimization of all images that uploads on backend side with Cloudinary",
      "Connecting and setting up Sendy and Sendgrid API for automatic email sending",
      "Setting up notification to the user's profile",
      "Testing Frontend and Backend side",
      "Using useSWR for caching fetch data",
      "Fixing bugs",
    ],
    id: uuid(),
  },
  {
    website: "NDA",
    time: "March 2021 - present",
    name: "Corporate website",
    description:
      "Corporate website to tell more about company goals, achievements and share the latest information.",
    technologies: [
      "nextjs",
      "strapi",
      "nextjs-api",
      "cloudinary",
      "vercel",
      "eslint",
      "aos",
      "MongoDB",
      "cors",
      "clsx",
      "emailjs",
      "module-scss",
      "react-icons",
    ],
    scope: [
      "Making 8 pages with NextJS",
      "Creating a widget to show the current price of shares on the stock exchange",
      "Creating simple API routes with Strapi to update information on the website from a backend",
      "Creating a blog with the option to make posts from the backend",
      "Creating widget to show the latest information about the company from RSS",
      "Adding animation with AOS",
      "Making contact form with EmailJS",
    ],
    id: uuid(),
  },

  {
    website: "NDA",
    time: "April 2020 - July 2020",
    name: "Esports news",
    description:
      "Esports news website, with news, match scores, leaderboards. Made to create one simple portal where users can find all information about teams in different disciplines and read the latest news without swiping from different websites",
    technologies: ["nextjs", "date-fns", "eslint", "clsx", "apollo-client"],
    scope: [
      "Making HTML with styles for 30 pages",
      "Testing functional of app",
      "Making blog",
      "Making widget with upcoming matches and scores",
    ],
    id: uuid(),
  },
  {
    website: "NDA",
    time: "July 2019 - present",
    name: "Different landing pages",
    description: "Made around 100+ landing pages. Mostly for marketing purpose",
    technologies: [
      "nextjs",
      "html",
      "css",
      "javascript",
      "jquery",
      "scss",
      "gulp",
      "figma",
      "photoshop",
      "wordpress",
      "elementor",
      "digitalocean",
    ],
    scope: [
      "Making responsive code",
      "Making page speed optimization",
      "Writing HTML, CSS, JS",
    ],
    id: uuid(),
  },
];

export const courses = [
  {
    name: "Next Amazona (2021)",
    website: "https://www.udemy.com/course/nextjs-ecommerce/",
    labels: ["next", "material ui", "paypal", "mongodb"],
    id: uuid(),
  },
  {
    name: "Apiko Academy (2021)",
    website: "https://apiko.academy/course/front-end_2021",
    labels: ["js", "react", "redux"],
    id: uuid(),
  },

  {
    name: "The Complete Strapi Course (2021)",
    website: "https://www.udemy.com/course/the-complete-strapi-course/",
    labels: ["strapi"],
    id: uuid(),
  },
  {
    name: "Front end from JS to React + Redux (2020)",
    website: "https://www.udemy.com/course/front-end-javascript-react-redux/",
    labels: ["js", "react", "redux"],
    id: uuid(),
  },

  {
    name: "React from scratch (2020)",
    website: "https://www.udemy.com/course/react-from-scratch",
    labels: ["react"],
    id: uuid(),
  },
  {
    name: "Full javascript (2020)",
    website: "https://www.udemy.com/course/javascript_full/",
    labels: ["js"],
    id: uuid(),
  },
  {
    name: "from 0 to 1 (2020)",
    website: "https://www.udemy.com/course/htmlcssjs/",
    labels: ["html", "scss", "gulp"],
    id: uuid(),
  },
  {
    name: "Main Academy QA (2016)",
    website: "https://mainacademy.ua/",
    labels: ["testing"],
    id: uuid(),
  },
];

export const now = {
  time: "21st september 2021 – present",
  place: "Apiko",
  work: "Frontend Developer",
  scope: ["redux", "react", "unit testing", "typescript"],
  id: uuid(),
};

export const backThen = [
  {
    time: "1st January 2020 – 14th september",
    place: "??? at G-Light Technology",
    scope:
      "Had no position in the company. Mostly helped with work in different departments. This is where my journey to the world of IT started. Saw that our HTML coder wasn't enough to make all job.  Started to learn HTML, CSS, JS, React to help with work. At that time I understood that frontend is mine. Start with simple HTML coding and one day realized that is hard to keep all pages updated without some framework. At the end of 2020 transferred all pages to Next.js. From 2021 started to do more dynamic pages. ",

    id: uuid(),
  },
  {
    time: "01th July 2019 – 31st December 2019",
    place: "Marketing manager at XB-Solutions",
    scope:
      "Was responsible for quality assurance of email sending, work of designers, quality of promos, landing pages, user expirience on the website",
    id: uuid(),
  },
  {
    time: "1th October 2018 – 30th Junу 2019",
    place: "Head of customer supports at XB-Solutions",
    scope:
      "Was responsible for customers satisfaction, their experience on the website, control of work quality of customer support department",
    id: uuid(),
  },
  {
    time: "20th July 2018 – 30th September 2019",
    place: "Customer Support at XB-Solutions",
    scope:
      "Worked with the clients. Was responsible to deal with clients and company problems with a solution that would satisfy both sides.",
    id: uuid(),
  },
  {
    time: "25th September 2016 – 8th August 2017",
    place: "Manager at Visa Application Center VFS.Global",
    scope:
      "Worked with clients. Helped to prepare a full package of documents for Poland visa.",
    id: uuid(),
  },
];

export const skills = [
  "HTML5",
  "CSS3",
  "SCSS",
  "FLEXBOX",
  "GULP",
  "TYPESCRIPT",
  "ANTD",
  "REDUX",
  "JAVASCRIPT",
  "WORDPRESS",
  "ELEMENTOR",
  "REACT",
  "FIGMA",
  "PHOTOSHOP",
  "PAGESPEED OPTIMIZATION",
  "GIT",
  "BEM",
  "STRAPI",
  "ANIMATIONS",
  "NEXT.JS",
  "VERCEL",
  "DIGITALOCEAN",
  "GODADDY",
];

export const character = [
  "PRODUCTIVE",
  "DISCIPLINED",
  "ACCURATE",
  "ANALYTICAL",
  "RESPONSIBLE",
  "SELF-CRITICAL",
  "INITIATIVE",
  "PUNCTUAL",
  "WITH A SENSE OF HUMOR",
];

export const likes = [
  "LEARN SOMETHING NEW",
  "CREATE SOMETHING BIG",
  "HUMOUR",
  "FINANCE",
  "MUSIC",
  "GAMES",
];

export const dislikes = ["LIARS", "IRRESPONSIBILITY"];

export const wants = [
  "TO BECOME STRONGER",
  "GET IN HISTORY",
  "TO BE FIT AND HEALTHY",
];
