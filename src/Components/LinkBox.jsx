import React from 'react';
import style from '../styleComponents/LinkBox.module.css';

const LinkBox = ({ url, tinyUrl }) => {
  return (
    <>
      <div className={style.box}>
        <p className={style.url}>{url}</p>
        <div className={style.shortLink}>
          <p className={style.tinyUrl}>{tinyUrl}</p>
          <button className={style.button}>Copy!</button>
        </div>
      </div>
    </>
  );
};

export default LinkBox;
