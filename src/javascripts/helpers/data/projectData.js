const projects = [
  {
    title: 'Tamagotchi',
    screenshot: 'https://github.com/delindell/tamagotchi/blob/master/screenshots/tamagotchiScreenshot.png?raw=true',
    description: 'In this project we built upon our previous knowledge of using ES6 modules to create a Tamagotchi. The Tamagotchi has several buttons that increase or decrease the score corresponding to the button pressed. This was the first project in which we used SASS to style. With the SASS I created several variables for colors, and other various styling methods.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML5, SCSS, Vanilla JavaScript, Version Control with Github, ES6 Modules, JQuery',
    available: true,
    url: 'https://github.com/delindell/tamagotchi',
    githubUrl: 'https://github.com/delindell/tamagotchi',
  },
  {
    title: 'Chatty Messanger',
    screenshot: 'https://github.com/delindell/chatty-cobralily/raw/master/screenshots/light-mode.png',
    description: 'Chatty Messanger is an app that allows seperate users to message one another, delete messages, search and post gifs, all on this online forum type page.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML5, SCSS, Vanilla JavaScript, Version Control with Github, ES6 Modules, JQuery',
    available: true,
    url: 'https://github.com/delindell/chatty-cobralily',
    githubUrl: 'https://github.com/delindell/chatty-cobralily',
  },
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
];

const getProjects = () => projects;

export default { getProjects };
