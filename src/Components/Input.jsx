import React from 'react';
import style from '../styleComponents/Input.module.css';

const Input = () => {
  return (
    <div className={style.generalContainer}>
      <div className={style.wave}>
        <div className={style.containerInput}>
          <input
            type="text"
            className={style.inputLink}
            placeholder="Shorten a link here..."
          />
          <button className={style.buttonLink}>Shorten It!</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
