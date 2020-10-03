import React from 'react';
import projectShape from '../../../helpers/propz/projectShape';

class ProjectCards extends React.Component {
  static propTypes = {
    projects: projectShape.projectShape,
  }

  render() {
    const { projects } = this.props;

    return (
      <div class="card">
        <img class="card" src={projects.screenshot} alt="project screenshot" />
        <div class="card-body">
          <h5 class="card-title">{projects.title}</h5>
          <p class="card-text">{projects.description}</p>
          <p className="card-text">{projects.technologiesUsed}</p>
          <div className="project-links">
            <a href={projects.url}>{projects.url}</a>
            <a href={projects.githubUrl}>{projects.githubUrl}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCards;
