import React from 'react';
import projectsData from '../../../helpers/data/projectsData';
import ProjectCards from '../ProjectCards/ProjectCards';
import './ProjectsPage.scss';

class ProjectsPage extends React.Component {
  state = {
    projects: [],
  }

  // getProject = () => {
  //   projectsData.getProjects()
  //     .then((projects) => this.setState({ projects }))
  //     .catch((err) => console.error('could not get projects', err));
  // }

  componentDidMount() {
    projectsData.getProjects()
      .then((projects) => this.setState({ projects }))
      .catch((err) => console.error('could not get projects', err));
  }

  render() {
    const { projects } = this.state;

    const projectCard = projects.map((project) => <ProjectCards key={project.id} projects={project} />);

    return (
      <div className="Projects">
        <h3 className="header">Projects</h3>
        <div classNanem="m-auto">
          <div className="card-columns">
            {projectCard}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
