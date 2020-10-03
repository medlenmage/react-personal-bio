import PropTypes from 'prop-types';

const techShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export default techShape;
