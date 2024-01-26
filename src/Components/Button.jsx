import React from 'react';
import style from '../styleComponents/Button.module.css';

const Button = ({ title, border, size }) => {
  return (
    <button className={style.button} style={{ borderRadius: border }}>
      {title}
    </button>
  );
};

export default Button;
