import React from 'react';
import style from '../styleComponents/DetailsStatistics.module.css';

const DetailsStatistics = ({ image, altImg, title, description, degrade }) => {
  return (
    <div
      className={style.containerDetailsStatistics}
      style={{ marginTop: degrade + 'px' }}
    >
      <div className={style.imageContainer}>
        <img src={image} alt={altImg} className={style.image} />
      </div>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default DetailsStatistics;
