import 'bootstrap';
import '../styles/main.scss';
import projectPrinter from './components/projectPrinter';

const init = () => {
  projectPrinter.createProjectCards();
};

init();
