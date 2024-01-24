import React from 'react';
import style from '../styleComponents/Main.module.css';
import workingImage from '../assets/images/illustration-working.svg';
import Input from './Input';

const Main = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <section className={style.infoContainer}>
          <h2 className={style.sloganTitle}>More than just shorter links</h2>
          <p className={style.sloganDescription}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className={style.getStarted}>Get Started</button>
        </section>
        <img
          className={style.imageWorking}
          src={workingImage}
          alt="Imagem ilustrativa de um homem trabalhando"
        />
        <Input />
      </div>
      <div className={style.advancedConteiner}>
        <section className={style.advancedSection}>
          <div className={style.advancedStatistics}>
            <h2 className={style.advancedTitle}>Advanced Statistics</h2>
            <p className={style.advancedInfo}>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
