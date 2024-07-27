import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "UpWork",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2022 - Present",
        points: [
            "Developed the front-end using React.js, focusing on dynamic data visualization with Chart.js.",
            "Created the back-end server with Node.js and Express.js, handling data aggregation and API integration.",
            "Connected to the Google Analytics API to fetch and display social media metrics.",
            "Utilized MySQL to store historical data for trend analysis and reporting.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "H2O Services",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2020 - Feb 2022",
        points: [
            "Performed coding, debugging, and unit testing tasks in support of projects.",
            "Provided ongoing maintenance for assigned applications and systems. ",
            "Applied current programming standards and methodologies to all relevant projects and activities.",
            "Developed scalable web-based user interfaces and components using Angular, C# and .NET core. ",
        ],
    },
    {
        title: "Web Developer",
        company_name: "OptimGov",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2019 - Jan 2020",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Irizar",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Oct 2014 - Jan 2019",
        points: [
            "Collaborated with a team of engineers, developers, and analysts to design and create leading hiring software",
            "Developed and designed front end web architecture with high responsiveness of applications",
            "Worked with other departments to address improvements, internal tools, and implementation issues.",
            "Consistently applied best practices for writing clean, secure, readable, and scalable code. .",
            "Participated in meaningful and thorough code reviews.", 
            "Hired, trained, and led a successful team of eight full stack developers.", 
            "Helped to increase company revenue by 40 percent between 2014-2018.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Evidement',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/literolly/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://www.linkedin.com/in/literolly/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://www.linkedin.com/in/literolly/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://www.linkedin.com/in/literolly/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://www.linkedin.com/in/literolly/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://www.linkedin.com/in/literolly/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://www.linkedin.com/in/literolly/',
    }
];