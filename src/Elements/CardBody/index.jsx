import React from 'react';
import './index.css';

const CardBody = ({ variant, style, className, children, ...rest }) => {
  return (
    <div style={style} className={variant} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
