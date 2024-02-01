import React from 'react';
import classNames from 'classnames';
import './index.css';

const CardHead = ({ variant, style, className, children, ...rest }) => {
  return (
    <>
      {children.type === 'img' ? (
        <img
          className={classNames('card-head-image')}
          src={children.props.src}
          alt="error"
        />
      ) : (
        <div
          style={style}
          className={classNames('card-head-image', variant)}
          {...rest}>
          {children}
        </div>
      )}
    </>
  );
};

export default CardHead;
