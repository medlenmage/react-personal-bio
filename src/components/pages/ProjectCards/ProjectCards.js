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
          <h5 class="card-title header">{projects.title}</h5>
          <p class="card-text p">{projects.description}</p>
          <p className="card-text p">{projects.technologiesUsed}</p>
          <div className="project-links">
            <a href={projects.url} className="project-links">{projects.url}</a>
            <br></br>
            <a href={projects.githubUrl} className="project-links">{projects.githubUrl}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCards;
