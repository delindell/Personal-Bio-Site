import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';

const createProjectCards = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      domString += '<div class="project-container d-flex flex-wrap justify-content-around">';
      projects.forEach((project) => {
        if (project.available !== false) {
          domString += '<div class="card projectCards col-4 text-center">';
          domString += `<h2 class="card-title">${project.title}</h2>`;
          domString += `<img class="card-img-top project-img" src="${project.screenshot}" alt="Card image cap">`;
          domString += '<div class="card-body justify-content-center">';
          domString += `<p class="card-text">${project.description}</p>`;
          domString += `<a class="btn btn-danger mt-2 mr-2" href="${project.url}">Deployed Link</a>`;
          domString += `<a class="btn btn-primary mt-2" id="gitHubBtn" href="${project.githubUrl}"><i class="fab fa-github"></i></a>`;
          domString += '</div>';
          domString += '</div>';
        }
      });
      domString += '</div>';
      utils.printToDom('projectsPage', domString);
    })
    .catch((err) => console.error('project cards have been lost', err));
};

export default { createProjectCards };
