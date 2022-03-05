import * as React from 'react';
import PropTypes from 'prop-types';
import { AlertTitle, Alert } from '@mui/material';

const AlertComponent = ({ id, text, link, alertType, alertTitle }) => {
  const handleClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div
      onClick={() => handleClick(link)}
      style={link ? { cursor: 'pointer' } : {}}
    >
      <Alert id={id} severity={alertType}>
        {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
        {text}
      </Alert>
    </div>
  );
};

AlertComponent.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  alertType: PropTypes.oneOf(['error', 'warning', 'info', 'success'])
    .isRequired,
  alertTitle: PropTypes.string,
};

AlertComponent.defaultProps = {
  timeLimit: 10,
};

export default AlertComponent;
