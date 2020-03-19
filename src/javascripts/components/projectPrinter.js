import projects from '../helpers/data/projectData';
import utils from '../helpers/utils';

const createProjectCards = () => {
  let domString = '';
  projects.getProjects().forEach((project) => {
    if (project.available !== false) {
      domString += '<div class="projectsCards">';
      domString += `<h3>${project.title}</h3>`;
      domString += `<img src="${project.screenshot}">`;
      domString += `<section>${project.description}</section>`;
      domString += `<section>${project.technologiesUsed}</section>`;
      domString += '<p id="available"></p>';
      domString += `<section><a href="${project.url}">GitHub</a></section>`;
      domString += `<section><a href="${project.githubUrl}">GITHUBURL</a></section>`;
      domString += '</div>';
    }
    utils.printToDom('projectsPage', domString);
  });
};

export default { createProjectCards };
