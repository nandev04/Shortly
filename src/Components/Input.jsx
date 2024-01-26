import React from 'react';
import style from '../styleComponents/Input.module.css';
import Button from './Button';

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
          <Button title={'Shorten It!'} border={`${5}px`} />
        </div>
      </div>
    </div>
  );
};

export default Input;
