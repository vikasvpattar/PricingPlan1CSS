import React from 'react';
import classNames from 'classnames';
import './index.css';

const Select = ({ variant, style, children, ...rest }) => {
  return (
    <select
      title="select"
      style={style}
      className={classNames(variant)}
   
      {...rest}>
      {children}
    </select>
  );
};

export default Select;
