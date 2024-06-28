import { v4 as uuid } from 'uuid'

export const portfolio = [
    {
        name: 'Online cinema',
        website: 'https://online-cinema-frontend-beta.vercel.app',
        description:
            'Online cinema with registration, video streaming, admin panel. Built with React, Next.js, and Nest.js.',
        technologies: [
            'next',
            'mongodb',
            'nest.js',
            'mongoose',
            'tailwind',
            'cloudinary',
            'sendgrid',
            'jwt',
            'SSR',
        ],
        id: uuid(),
    },
    {
        name: 'Amazon clone',
        website: 'https://next-amazona-sepia.vercel.app/',
        description:
            'Shop website with basket, admin panel, profile, orders. Connected to Paypal payment system. Backend is done on Next.js API',
        technologies: [
            'next',
            'mongodb',
            'paypal',
            'next connect',
            'material ui',
        ],
        id: uuid(),
    },
    {
        name: 'Coctail shop',
        website: 'https://coctail-shop.vercel.app/',
        description:
            "A website with cocktails that uses free API TheCockTailDB for data. It is made with a cart for orders with modern design. There is alcotester, so you won't miss drunk status😋",
        technologies: [
            'react',
            'react-router-dom',
            'hooks',
            'skeleton-react',
            'tostify',
            'rest-api',
            'classnames',
            'node-sass',
        ],
        id: uuid(),
    },
    {
        name: 'Netflix Clone',
        website: 'https://netflix-clone-varekai-dev.vercel.app/',
        description:
            'Copy of Netflix website with registration and login form. A simple website with movie API to see what is in trends.',
        technologies: [
            'react',
            'react-router-dom',
            'hooks',
            'firebase',
            'auth',
        ],
        id: uuid(),
    },
    {
        name: 'Cherry Bonus',
        website: 'https://projectx-frontend.vercel.app/',
        description:
            'Affiliate website to compare different casinos and bookies. Has ratings, blog, skeleton loading, breadcrumbs',
        technologies: [
            'nextjs',
            'strapi',
            'mongoDB',
            'emailjs',
            'cloudinary',
            'vercel',
            'heroku',
            'React Select',
            'google-auth',
        ],
        id: uuid(),
    },
    {
        name: 'React Shop',
        website: 'https://varekai-dev.github.io/react-shop/',
        description: 'Simple shop with the cart that uses Fortnite API',
        technologies: ['react', 'hooks', 'api', 'github-pages'],
        id: uuid(),
    },
]

export const realProjects = [
    {
        website: 'linengineering.com',
        time: 'May 2024 - Present',
        name: 'Lin Engineering - E-Commerce Marketplace Development',
        description:
            'Lin Engineering is a leading motor manufacturing company and an ecommerce marketplace, initially launched to meet your requirements precisely, providing the exact specifications you need.',
        technologies: ['Next.js', 'MUI', 'GraphQL', 'strapi'],
        scope: [
            'Redesign of the marketplace to enhance user experience',
            'Implemented new features to improve functionality and user engagement.',
            'Performed bug fixes to ensure smooth operation',
            'Continuously optimized the platform for better performance and usability',
        ],
        id: uuid(),
    },
    {
        website: 'erp.conexyard.com',
        time: 'February 2023 - February 2024',
        name: 'ERP System for Logistics Company',
        description:
            'Website for a logistics company, delivery management, invoicing, accounting',
        technologies: [
            'react',
            'typescript',
            'react-query',
            'styled-components',
            'Ant Design',
            'dnd-kit',
            'zustand',
            'google-maps',
        ],
        scope: [
            'Conducting comprehensive code reviews to ensure quality and consistency',
            'Providing accurate task estimations for efficient project planning',
            'Identifying and resolving bugs to maintain seamless functionality',
            `Implementing new features to enhance the application’s capabilities`,
        ],
        id: uuid(),
    },
    {
        website: 'conexwest.com',
        time: 'February 2022 - September 2023',
        name: 'Conexwest - Shipping containers. Storage solutions.',
        description:
            'Conexwest is the leading supplier of standard and modified storage containers in Northern California. Admin panel is created to manage work of resources, control tasks, and to create reports.',
        technologies: [
            'react',
            'redux',
            'redux-saga',
            'typescript',
            'styled-components',
            'react-hook-form',
            'yup',
            '@reduxjs/toolkit',
            'antd',
            'mongodb',
            'google cloud',
        ],
        scope: ['Making layouts', 'Writing logic', 'Fixing bugs'],
        id: uuid(),
    },
    {
        website: 'jobheron.com',
        time: 'September 2021 - January 2022',
        name: "Jobheron - UK's Leading Online Recruitment Provider",
        description:
            'An application that gives all tools of a recruiter. With a website, you can find candidates for your job simpler, faster, and better',
        technologies: [
            'react',
            'redux',
            'redux-saga',
            'typescript',
            'styled-components',
            'React Testing Library',
            'react-hook-form',
            'yup',
            'algoliasearch',
            '@reduxjs/toolkit',
            'antd',
            'auth0',
            'stripe',
        ],
        scope: [
            'Making layouts',
            'Writing unit tests',
            'Writing logic',
            'Connect Strapi payment system',
            'refactoring',
            'Fixing bugs',
        ],
        id: uuid(),
    },
    {
        website: 'NDA',
        time: 'April 2021 - September 2021',
        name: 'Loyalty program',
        description:
            'The separate website that is connected to main where user can register, login. Account collect whole data order history, notification center, shop with different items that user can get for his loyalty',
        technologies: [
            'nextjs',
            'strapi',
            'useSWR',
            'eslint',
            'react-icons',
            'clsx',
            'formik',
            'yup',
            'cloudinary',
            'vercel',
            'MongoDB',
            'amazon S3',
            'module-scss',
        ],
        scope: [
            'Creating 8 pages',
            'Connecting registration/login/reset password form to backend',
            'Optimization of all images that uploads on backend side with Cloudinary',
            'Connecting and setting up Sendy and Sendgrid API for automatic email sending',
            "Setting up notification to the user's profile",
            'Testing Frontend and Backend side',
            'Using useSWR for caching fetch data',
            'Fixing bugs',
        ],
        id: uuid(),
    },
    {
        website: 'NDA',
        time: 'March 2021 - May 2021',
        name: 'Corporate website',
        description:
            'Corporate website to tell more about company goals, achievements and share the latest information.',
        technologies: [
            'nextjs',
            'strapi',
            'nextjs-api',
            'cloudinary',
            'vercel',
            'eslint',
            'aos',
            'MongoDB',
            'cors',
            'clsx',
            'emailjs',
            'module-scss',
            'react-icons',
            'yahoo-finance',
        ],
        scope: [
            'Making 8 pages with NextJS',
            'Creating a widget to show the current price of shares on the stock exchange',
            'Creating simple API routes with Strapi to update information on the website from a backend',
            'Creating a blog with the option to make posts from the backend',
            'Creating widget to show the latest information about the company from RSS',
            'Adding animation with AOS',
            'Making contact form with EmailJS',
        ],
        id: uuid(),
    },

    {
        website: 'https://buffhub.com/en',
        time: 'April 2020 - July 2020',
        name: 'Esports news',
        description:
            'Esports news website, with news, match scores, leaderboards. Made to create one simple portal where users can find all information about teams in different disciplines and read the latest news without swiping from different websites',
        technologies: ['nextjs', 'date-fns', 'eslint', 'clsx', 'apollo-client'],
        scope: [
            'Making HTML with styles for 30 pages',
            'Testing functional of app',
            'Making blog',
            'Making widget with upcoming matches and scores',
        ],
        id: uuid(),
    },
    {
        website: 'NDA',
        time: 'July 2019 - present',
        name: 'Different landing pages',
        description:
            'Made around 100+ landing pages. Mostly for marketing purpose',
        technologies: [
            'nextjs',
            'html',
            'css',
            'javascript',
            'jquery',
            'scss',
            'gulp',
            'figma',
            'photoshop',
            'wordpress',
            'elementor',
            'digitalocean',
        ],
        scope: [
            'Making responsive code',
            'Making page speed optimization',
            'Writing HTML, CSS, JS',
        ],
        id: uuid(),
    },
]

export const courses = [
    {
        name: 'NestJS - GraphQL - Code first (2024)',
        website: 'https://courses.nestjs.com/#authentication',
        labels: ['passport', 'nest'],
        id: uuid(),
    },
    {
        name: 'NestJS - Authentication and Authorization (2024)',
        website: 'https://courses.nestjs.com/#code-first',
        labels: ['GraphQL', 'nest'],
        id: uuid(),
    },
    {
        name: 'Complete NodeJS Developer (GraphQL, MongoDB, + more)',
        website:
            'https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery',
        labels: [
            'MongoDB',
            'GraphQL',
            'REST',
            'NodeJS',
            'Express',
            'JWT',
            'Mongoose',
            'testing',
        ],
        id: uuid(),
    },
    {
        name: 'NestJS - Building Real Project API From Scratch (2022)',
        website:
            'https://www.udemy.com/course/nestjs-building-real-project-api-from-scratch/',
        labels: [
            'nest',
            'typescript',
            'node',
            'postgresql',
            'typeorm',
            'express',
            'rest',
        ],
        id: uuid(),
    },
    {
        name: 'Frontend advanced (2022)',
        website: 'https://www.udemy.com/course/nextjs-frontend-advanced',
        labels: ['next', 'tailwind', 'react-query', 'SSR', 'typescript'],
        id: uuid(),
    },
    {
        name: 'Backend advanced (2022)',
        website: 'https://www.udemy.com/course/nestjs-backend-advanced',
        labels: ['nest.js', 'node', 'jwt', 'mongodb', 'typescript'],
        id: uuid(),
    },
    {
        name: 'Apiko Academy (2021)',
        website: 'https://apiko.academy/course/front-end_2021',
        labels: ['js', 'react', 'redux'],
        id: uuid(),
    },

    {
        name: 'The Complete Strapi Course (2021)',
        website: 'https://www.udemy.com/course/the-complete-strapi-course/',
        labels: ['strapi'],
        id: uuid(),
    },
    {
        name: 'Front end from JS to React + Redux (2020)',
        website:
            'https://www.udemy.com/course/front-end-javascript-react-redux/',
        labels: ['js', 'react', 'redux'],
        id: uuid(),
    },

    {
        name: 'React from scratch (2020)',
        website: 'https://www.udemy.com/course/react-from-scratch',
        labels: ['react'],
        id: uuid(),
    },
    {
        name: 'Full javascript (2020)',
        website: 'https://www.udemy.com/course/javascript_full/',
        labels: ['js'],
        id: uuid(),
    },
    {
        name: 'from 0 to 1 (2020)',
        website: 'https://www.udemy.com/course/htmlcssjs/',
        labels: ['html', 'scss', 'gulp'],
        id: uuid(),
    },
    {
        name: 'Main Academy QA (2016)',
        website: 'https://mainacademy.ua/',
        labels: ['testing'],
        id: uuid(),
    },
]

export const now = {
    time: '21st september 2021 – present',
    place: 'Apiko',
    work: 'Frontend Developer',
    scope: [
        'redux',
        'react',
        'unit testing',
        'typescript',
        'graphql',
        'next',
        'zustand',
        'styled-components',
    ],
    id: uuid(),
}

export const backThen = [
    {
        time: '1st January 2020 – 14th september',
        place: '??? at G-Light Technology',
        scope: "Had no position in the company. Mostly helped with work in different departments. This is where my journey to the world of IT started. Saw that our HTML coder wasn't enough to make all job.  Started to learn HTML, CSS, JS, React to help with work. At that time I understood that frontend is mine. Start with simple HTML coding and one day realized that is hard to keep all pages updated without some framework. At the end of 2020 transferred all pages to Next.js. From 2021 started to do more dynamic pages. ",

        id: uuid(),
    },
    {
        time: '01th July 2019 – 31st December 2019',
        place: 'Marketing manager at XB-Solutions',
        scope: 'Was responsible for quality assurance of email sending, work of designers, quality of promos, landing pages, user expirience on the website',
        id: uuid(),
    },
    {
        time: '1th October 2018 – 30th Junу 2019',
        place: 'Head of customer supports at XB-Solutions',
        scope: 'Was responsible for customers satisfaction, their experience on the website, control of work quality of customer support department',
        id: uuid(),
    },
    {
        time: '20th July 2018 – 30th September 2019',
        place: 'Customer Support at XB-Solutions',
        scope: 'Worked with the clients. Was responsible to deal with clients and company problems with a solution that would satisfy both sides.',
        id: uuid(),
    },
    {
        time: '25th September 2016 – 8th August 2017',
        place: 'Manager at Visa Application Center VFS.Global',
        scope: 'Worked with clients. Helped to prepare a full package of documents for Poland visa.',
        id: uuid(),
    },
]

export const skills = [
    'HTML5',
    'CSS3',
    'SCSS',
    'FLEXBOX',
    'GULP',
    'TYPESCRIPT',
    'ANTD',
    'REDUX',
    'JAVASCRIPT',
    'WORDPRESS',
    'ELEMENTOR',
    'REACT',
    'FIGMA',
    'PHOTOSHOP',
    'PAGESPEED OPTIMIZATION',
    'GIT',
    'BEM',
    'STRAPI',
    'ANIMATIONS',
    'NEXT.JS',
    'VERCEL',
    'DIGITALOCEAN',
    'GODADDY',
    'ZUSTAND',
    'APOLLO',
    'GRAPHQL',
]

export const character = [
    'PRODUCTIVE',
    'DISCIPLINED',
    'ACCURATE',
    'ANALYTICAL',
    'RESPONSIBLE',
    'SELF-CRITICAL',
    'INITIATIVE',
    'PUNCTUAL',
    'WITH A SENSE OF HUMOR',
]

export const likes = [
    'LEARN SOMETHING NEW',
    'CREATE SOMETHING BIG',
    'HUMOUR',
    'FINANCE',
    'MUSIC',
    'GAMES',
]

export const dislikes = ['LIARS', 'IRRESPONSIBILITY']

export const wants = [
    'TO BECOME STRONGER',
    'GET IN HISTORY',
    'TO BE FIT AND HEALTHY',
]
