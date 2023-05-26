import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children = '', secondary = false, ...props }) => {
  return (
    <button className={`Button ${secondary && 'Button--secondary'}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  secondary: PropTypes.bool
};

export { Button };
