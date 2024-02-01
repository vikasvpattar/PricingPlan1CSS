import React from 'react';
import classNames from 'classnames';
import './index.css';

export default function RowContainer({ variant, children, style,className }) {
  return (
    <div
      style={style}
      className={classNames('row-container', variant, className)}>
      {children}
    </div>
  );
}
