import React from 'react';
import classNames from 'classnames';
import './index.css';

export default function ColumnContainer({ variant, style, children }) {
  return (
    <div style={style} className={classNames(variant)}>
      {children}
    </div>
  );
}
