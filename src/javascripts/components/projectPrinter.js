import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';

const createProjectCards = () => {
  console.log('hellow');
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      console.log(projects);
      domString += '<div class="project-container d-flex flex-wrap justify-content-center">';
      projects.forEach((project) => {
        if (project.available !== false) {
          domString += '<div class="card projectCards col-3 text-center">';
          domString += `<h3 class="card-title">${project.title}</h3>`;
          domString += `<img class="card-img-top project-img" src="${project.screenshot}" alt="Card image cap">`;
          domString += '<div class="card-body justify-content-center">';
          domString += `<p class="card-text">${project.description}</p>`;
          domString += `<a class="btn btn-primary mt-2" id="gitHubBtn" href="${project.githubUrl}"><i class="fab fa-github"></i><a>`;
          domString += '</div>';
          domString += '</div>';
        }
      });
      domString += '</div>';
      utils.printToDom('projectsPage', domString);
    // .catch((err) => console.error('lost boards', err));
    });
};

export default { createProjectCards };
