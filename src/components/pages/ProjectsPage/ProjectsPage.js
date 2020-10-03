import React from 'react';
import projectsData from '../../../helpers/data/projectsData';
import ProjectCards from '../ProjectCards/ProjectCards';

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
    projectsData.getMyProjects()
      .then((projects) => this.setState({ projects }))
      .catch((err) => console.error('could not get projects', err));
  }

  render() {
    const { projects } = this.state;

    const projectCard = projects.map((project) => <ProjectCards key={project.id} projects={project} />);

    return (
      <div className="Projects">
        <h3>Projects</h3>
        <div classNanem="mb-3">
          <div className="card-columns">
            {projectCard}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
