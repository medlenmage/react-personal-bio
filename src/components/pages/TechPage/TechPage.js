import React from 'react';
import techData from '../../../helpers/data/techData';
import TechCards from '../TechCards/TechCards';
import './TechPage.scss';

class TechPage extends React.Component {
  state = {
    techs: [],
  }

  componentDidMount() {
    techData.getTech()
      .then((techs) => this.setState({ techs }))
      .catch((err) => console.error('could not get tech', err));
  }

  render() {
    const { techs } = this.state;

    const techCard = techs.map((tech) => <TechCards key={tech.id} tech={tech} />);

    return (
      <div className="Technologies">
        <h3 className="header">Technologies</h3>
        <div className="m-auto">
          <div className="card-columns">
            {techCard}
          </div>
        </div>
      </div>
    );
  }
}

export default TechPage;
