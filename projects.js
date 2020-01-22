console.log('Bio Page');

const projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;

};

const createProjectCards = () => {
    let domString = '';
    for(let i = 0; i < projects.length; i++) {
    domString += `<div class="projectsPage">`
    domString +=    `<h3>${projects[i].title}</h3>`;
    domString +=    `<img src="${projects[i].screenshot}">`;
    domString +=    `<section>${projects[i].description}</section>`;
    domString +=    `<section>${projects[i].technologiesUsed}</section>`;
    domString +=    `<p id="available">${projects[i].available}</p>`;
    domString +=    `<a href="${projects[i].url}">GitHub</a>`;
    domString +=    `<a href="${projects[i].githubUrl}">GITHUBURL</a>`
    domString += `</div>`
        console.log(domString)
        
            printToDom('projectsPage', domString) 
        
    }
    }

createProjectCards();