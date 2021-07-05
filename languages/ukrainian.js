import { v4 as uuid } from 'uuid';

export const portfolio = [
	{
		name: 'Coctail shop',
		website: 'https://coctail-shop.vercel.app/',
		apiko: true,
		description: 'Веб-сайт з коктейлями, який використовує безкоштовний API TheCockTailDB для передачі даних. Є кошик для замовлень',
		technologies: ['react', 'react-router-dom', 'hooks', 'skeletonreact', 'tostify', 'rest-api', 'classnames', 'node-sass'],
		id: uuid()
	},
	{
		name: 'MultiStep Form',
		apiko: true,
		website: 'https://multistepform.vercel.app/',
		description: 'Багатокрокова реєстраційна форма з дизайну Figm, яка використовує перемикач для зміни кроків та збору всіх даних у контексті, щоб надіслати їх після подання форми',
		technologies: ['react', 'hooks', 'context', 'figma'],
		id: uuid()
	},

	{
		name: 'MovieDB',
		website: 'https://moviesdb-ten.vercel.app/',
		apiko: true,
		description: 'Простий веб-сайт із двома сторінками, які отримують фільми з бази даних. Використовується пагінація, роути та попапи.',
		technologies: ['react', 'react-router-dom', 'hooks', 'context', 'pagination', 'api'],
		id: uuid()
	},
	{
		name: 'Netflix Clone',
		website: 'https://netflix-clone-varekai-dev.vercel.app/',
		description: 'Копія веб-сайту Netflix з реєстрацією та формою входу. Простий веб-сайт який підтягує фільми з топу Netflix',
		technologies: ['react', 'react-router-dom', 'hooks', 'firebase', 'auth'],
		id: uuid()
	},
	{
		name: 'Cherry Bonus',
		website: 'https://projectx-frontend.vercel.app/',
		description: 'Партнерський веб-сайт для порівняння різних казино та букмекерів. Має рейтинги, блог, скелетон лоудер, хлібні крихти',
		technologies: ['nextjs', 'strapi', 'mongoDB', 'emailjs', 'cloudinary', 'vercel', 'heroku', 'React Select', 'google-auth'],
		id: uuid()
	},
	{
		name: 'React Shop',
		website: 'https://varekai-dev.github.io/react-shop/',
		description: 'Простий магазин з кошиком, який використовує Fortnite API',
		technologies: ['react', 'hooks', 'api', 'github-pages'],
		id: uuid()
	}
];

export const realProjects = [
	{
		website: 'NDA',
		name: 'Esports news',
		description: 'Веб-сайт з кіберспортивнимни новинами, результатами матчів, таблицями лідерів. Створений щоб користувачі находили всі новини і результати в одному місці, не тративши час на різних ресурсах',
		technologies: ['nextjs', 'date-fns', 'eslint', 'clsx'],
		scope: ['Створення HTML зі стилями для 30 сторінок', ' Тестування функціональності програми ', ' Створення блогу ', ' Створення віджета з  матчами які будуть йти та рахунками'],
		id: uuid()
	},
	{
		website: 'NDA',
		name: 'Корпоративний вебсайт',
		description: 'Корпоративний веб-сайт, щоб розповісти більше про цілі компанії, досягнення та поділитися найсвіжішою інформацією.',
		technologies: ['nextjs', 'strapi', 'nextjs-api', 'cloudinary', 'vercel', 'eslint', 'aos', 'MongoDB', 'cors', 'clsx', 'emailjs', 'module-scss', 'react-icons'],
		scope: ['Створення 8 сторінок з NextJS ', ' Створення віджета для відображення поточної ціни акцій на фондовій біржі ', ' Створення простих маршрутів API за допомогою Strapi для оновлення інформації на веб-сайті з бекенда ', ' Створення блогу з можливістю  публікації з бекенда ', ' Створення віджету для відображення останньої інформації про компанію з RSS ', ' Додавання анімації за допомогою AOS ', " Встановлення форми зворотнього зв'язку EmailJS "],
		id: uuid()
	},
	{
		website: 'NDA',
		name: 'Аккаунт користувача',
		description: 'Окремий веб-сайт, який підключений до основного, де користувач може зареєструватися, увійти. Обліковий запис збирає всю історію замовлень даних, центр сповіщень, магазин з різними плюшками, які користувач може придбати за свою лояльність',
		technologies: ['nextjs', 'strapi', 'useSWR', 'eslint', 'react-icons', 'clsx', 'formik', 'yup', 'cloudinary', 'vercel', 'MongoDB', 'amazon S3', 'module-scss'],
		scope: ['Створення 8 сторінок', 'Підключення форми реєстрації / входу / скидання пароля до бекенду', 'Оптимізація всіх зображень, що завантажуються на стороні серверної частини за допомогою Cloudinary', 'Підключення та налаштування API Sendy та Sendgrid для автоматичної надсилання електронної пошти', 'Налаштування сповіщення для профілю користувача', 'Виправлення помилок', 'Тестування фронтенду та бекенду', 'Використання useSWR для кешування даних отриманих з API'],
		id: uuid()
	}
];

export const courses = [
	{
		name: 'Apiko Academy (present)',
		website: 'https://apiko.academy/course/front-end_2021',
		labels: ['js', 'react', 'redux'],
		id: uuid()
	},
	{
		name: 'The Complete Strapi Course (2021)',
		website: 'https://www.udemy.com/course/the-complete-strapi-course/',
		labels: ['strapi'],
		id: uuid()
	},
	{
		name: 'Front end from JS to React + Redux (2020)',
		website: 'https://www.udemy.com/course/front-end-javascript-react-redux/',
		labels: ['js', 'react', 'redux'],
		id: uuid()
	},

	{
		name: 'React from scratch (2020)',
		website: 'https://www.udemy.com/course/react-from-scratch',
		labels: ['react'],
		id: uuid()
	},
	{
		name: 'Full javascript (2020)',
		website: 'https://www.udemy.com/course/javascript_full/',
		labels: ['js'],
		id: uuid()
	},
	{
		name: 'from 0 to 1 (2020)',
		website: 'https://www.udemy.com/course/htmlcssjs/',
		labels: ['html', 'scss', 'gulp'],
		id: uuid()
	},
	{
		name: 'Main Academy QA (2016)',
		website: 'https://mainacademy.ua/',
		labels: ['testing'],
		id: uuid()
	}
];

export const now = {
	time: '1 січня 2020 – дотепер',
	place: '??? в G-Light Technology',
	scope: ['емейл маркетинг', 'маркетинг', 'верстка лендінгів', 'розробка сайтів на next.js', 'дизайн', 'аналітика'],
	id: uuid()
};

export const backThen = [
	{
		time: '1 липня 2019 – 31 грудня 2019',
		place: 'Mаркетинг менеджер в XB-Solution',
		scope: 'Відповідав за забезпечення якості відправки електронної пошти, роботу дизайнерів, якість рекламних акцій, цільових сторінок, взаємодію користувачів із веб-сайтом',
		id: uuid()
	},
	{
		time: '1 жовтня 2018 – 30 червня 2019',
		place: 'Голова підтримки в XB-Solution',
		scope: 'Відповідав за задоволеність клієнтів, їх досвід користування вебсайтом, контроль якості роботи відділу підтримки клієнтів',
		id: uuid()
	},
	{
		time: '20th July 2018 – 30th September 2019',
		place: 'Менеджер підтримки в XB-Solution',
		scope: 'Працював з клієнтами. Відповідав за вирішення проблем із клієнтами та компанією за допомогою рішення, яке задовольнило б обидві сторони.',
		id: uuid()
	},
	{
		time: '25 вересня 2016 – 8 серпня 2017',
		place: 'Менеджер в Visa Application Center VFS.Global',
		scope: 'Працював з клієнтами. Допомагав підготувати повний пакет документів для візи в Польщу.',
		id: uuid()
	}
];

export const skills = ['HTML5', 'CSS3', 'SCSS', 'FLEXBOX', 'GULP', 'JAVASCRIPT', 'WORDPRESS', 'ELEMENTOR', 'REACT', 'JQUERY', 'FIGMA', 'PHOTOSHOP', 'PAGESPEED OPTIMIZATION', 'GIT', 'BEM', 'STRAPI', 'ANIMATIONS', 'NEXT.JS', 'VERCEL', 'DIGITALOCEAN', 'GODADDY'];

export const character = ['ВІДПОВІДАЛЬНИЙ ', ' ПРОДУКТИВНИЙ ', 'ДИСЦИПЛІНОВАНИЙ', 'АНАЛІТЧИНЙ', ' САМОКРИТИЧНИЙ ', 'ІНІЦІАТИВНИЙ', 'ПУНКТУАЛЬНІ', 'З ПОЧУТТЯМ ГУМОРУ'];

export const likes = ['ВИВЧАТИ ЩОСЬ НОВЕ', 'СТВОРЮВАТИ ЩОСЬ ВЕЛИКЕ', 'ГУМОР', 'ФІНАНСИ', 'МУЗИКА', 'ІГРИ'];

export const dislikes = ['БРЕХУНИ', 'НЕВІДПОВІДАЛЬНІСТЬ'];

export const wants = ['СТАНИТИ СИЛЬНІШИМ', 'ВВІЙТИ В ІСТОРІЮ', 'БУТИ ЗДОРОВИМ І ПІДТЯНУТИМ'];
