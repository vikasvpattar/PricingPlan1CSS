import React from 'react';
import classNames from 'classnames';
const Container = ({ variant, style, children, ...rest }) => {
  return (
    <option style={style} className={classNames(variant)} {...rest}>
      {children}
    </option>
  );
};

export default Container;
