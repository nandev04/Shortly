import React from 'react';
import style from '../styleComponents/Button.module.css';

const Button = ({ title, border, large }) => {
  return (
    <button
      className={style.button}
      style={{ borderRadius: border, fontSize: large && 1.4 + 'rem' }}
    >
      {title}
    </button>
  );
};

export default Button;
