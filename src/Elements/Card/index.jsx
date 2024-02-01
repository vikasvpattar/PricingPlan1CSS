import React from 'react';
import classNames from 'classnames';
import './index.css';

const Card = ({ variant, style, children,className, ...rest }) => {
  return (
    <div style={style} className={classNames(variant)} {...rest}>
      {children}
    </div>
  );
};

export default Card;
