import PropTypes from 'prop-types';

const projectShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologiesUsed: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
});

export default projectShape;
