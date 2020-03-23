import projects from '../helpers/data/projectData';
import utils from '../helpers/utils';

const createProjectCards = () => {
  let domString = '';
  projects.getProjects().forEach((project) => {
    if (project.available !== false) {
      domString += '<div class="card project-cards">';
      domString += `<img class="card-img-top project-img" src="${project.screenshot}" alt="Card image cap">`;
      domString += '<div class="card-body">';
      domString += `<h5 class="card-title">${project.title}</h5>`;
      domString += `<p class="card-text">${project.description}</p>`;
      domString += `<a class="btn btn-primary" id="gitHubBtn" href="${project.githubUrl}"><i class="fab fa-github"></i><a>`;
      domString += '</div>';
      domString += '</div>';
    }
    utils.printToDom('projectsPage', domString);
  });
};

export default { createProjectCards };
