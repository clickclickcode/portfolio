// an array of objects that contain information about the courses I have taken

const courses = [
    {
        id: 1,
        title: 'Web Development',
        description: 'A course consisting of 14 modules covering HTML, CSS, JavaScript, React, Back-End Development with Express, SQL, and TDD with Mocha.',
        img: '/images/codecademy-logo-v2.png',
        platform: 'Codecademy',
        progress: 60,
    },
    {
        id: 2,
        title: 'Learn JavaScript',
        description: 'This course covered the basics of JavaScript, including variables, control flow, functions, loops, and objects.',
        img: '/images/codecademy-logo-v2.png',
        platform: 'Codecademy',
        progress: 'Completed',
    },
    {
        id: 3,
        title: 'Learn Intermediate JavaScript',
        description: 'This course covers topics such as classes, modules, promises, async-await, requests, and error handling.',
        img: '/images/codecademy-logo-v2.png',
        platform: 'Codecademy',
        progress: 'Completed',
    },
    {
        id: 4,
        title: 'Learn the Command Line',
        description: 'In this course I learned how to navigate the command line, create and modify files, set up aliases, and how to use the Nano text editor.',
        img: '/images/codecademy-logo-v2.png',
        platform: 'Codecademy',
        progress: 'Completed',
    },
    {
        id: 5,
        title: 'Building Interactive JavaScript Websites',
        description: 'This covered the basics of HTML, CSS, and JavaScript, and how to bring them together to build interactive websites.',
        img: '/images/codecademy-logo-v2.png',
        platform: 'Codecademy',
        progress: 'Completed',
    },
    {
        id: 6,
        title: 'Learn Intermediate CSS',
        description: 'In this course the topics covered included CSS Grid, Flexbox, responsive design, and CSS animations.',
        img: '/images/codecademy-logo-v2.png',
        platform: 'Codecademy',
        progress: 'Completed',
    },
    {
        id: 7,
        title: 'JavaScript: Async',
        description: 'This course looked at asynchronous JavaScript, including callbacks, promises, and async-await.',
        img: '/images/linkedin-learning-logo.png',
        platform: 'LinkedIn Learning',
        progress: 'Completed',
    },
    {
        id: 8,
        title: 'JavaScript Essential Training',
        description: 'A 5+ hour course covering the basics of JavaScript.',
        img: '/images/linkedin-learning-logo.png',
        platform: 'LinkedIn Learning',
        progress: 'Completed',
    },
]


const hobbies = [
    {
        id: 1,
        img: '/images/coding.jpg',
        title: 'Coding',
        description: 'There is always something new to learn and so many sources to learn from! It is a space which allows you to keep developing in every sense of the word.',
    },
    {
        id: 2,
        img: '/images/bouldering.jpg',
        title: 'Bouldering',
        description: 'It is like problem solving, but with your body! It takes strength, analytical skills, and creativity. Which is why I have been doing it on and off since 2017.',
    },
    {
        id: 3,
        img: '/images/reading.jpg',
        title: 'Reading',
        description: 'I mostly read non-fiction books. I read in an effort to grow as a person and because I am curious about the perspective of other people.',
    },
];

export { courses, hobbies }