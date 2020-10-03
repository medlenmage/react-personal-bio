import React from 'react';
import techShape from '../../../helpers/propz/techShape';

class TechCards extends React.Component {
  static propTypes = {
    tech: techShape.techShape,
  }

  render() {
    const { tech } = this.props;

    return (
      <div className="card">
        <img className="card" src={tech.icon} alt="tech-icon"/>
        <div className="card-body">
          <h5 className="card-title header">{tech.name}</h5>
          <p className="card-text p">{tech.description}</p>
        </div>
      </div>
    );
  }
}

export default TechCards;
