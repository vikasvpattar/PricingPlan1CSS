import React from 'react';
import classNames from 'classnames';

const Image = ({ variant, src, children, style, ...rest }) => {
  return (
    <img
      style={style}
      src={src}
      alt={'error'}
      className={classNames(variant)}
      {...rest}
    />
  );
};

export default Image;
