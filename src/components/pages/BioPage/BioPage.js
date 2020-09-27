import React from 'react';
import './BioPage.scss';

class BioPage extends React.Component {
  render() {
    return (
      <div className="BioPage">
        <h2>About Me</h2>
        <div className="my-story-container">
          <h4 className="about-me-header">My Story</h4>
          <p className="about-me-p">
          Hello and welcome to my bio-site! My name is Joshua Medlen. I was born, raised, and currently live in the greater Nashville area. I am currently employed by Metro Nashville Public works
          Where i Work as an equipment operator driving a tractor. Not only do i operate but i also have to do routine maintenance, minor repairs, and sometimes train others on the equipment.
          On occasion i assume the role of foreman over the crew and ensure others are performing their task optimally and conduct any repairs or resolve any issues a fellow crewmate has.</p>
        </div>
        <div className="why-dev">
        <h4 className="about-me-header">Why Web development?</h4>
          <p className="about-me-p">
            I've always had a passion for technology and drive to understand more about it. From tinkering with broken PCs to trying to understand coding from a early age the groundwork
            had been laid already. What drove me to make the leap to pursue it more? My current job/career path has become stale and has put alot of undue stress. It also has put alot of
            physical strain on my body where even at this early stage of my life i feel the after effects from the work i do. So in the end i'm looking to pursue something i've had a passion for
            and be able to get out of a physically demanding job before it puts to much damage on my body and create a terrible quailty of life for my future.
          </p>
        </div>
        <div className="love-dev">
          <h4 className="about-me-header">What do i love about development?</h4>
          <p className="about-me-p">
            I've always had a knack and a love for tinkering and problem solving. The oppurtunity to create and work through porblems by myself and a group has definitly brought more attraction to
            development. Being able to create things from a few lines of code and watching it display to a webpage is fascinating to me. I also love helping others with problems and the oppurtunity to
            look into someone elses world so to speak and see how they write code and decipher it and help solve their issues has been exciting and has made this field more attractive than ever.
          </p>
        </div>
        <div className="good-dev">
          <h4 className="about-me-header">What makes me a good developer?</h4>
          <p className="about-me-p">
            My determination to resolve problems and issues. My humblness to ask for help when i feel a task or problem needs to heads more than one. My ability to gather information on a particular
            issue to gain the knowledge or aquire the skills/toolset needed to get a job done. My ability to work/play well with others and work as a team and to present my thoughts to the group to
            get better insight to issues and maybe look at problems from a whole new angle.
          </p>
        </div>
      </div>
    );
  }
}

export default BioPage;
