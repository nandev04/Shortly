import React from 'react';
import style from '../styleComponents/Main.module.css';
import workingImage from '../assets/images/illustration-working.svg';

const Main = () => {
  return (
    <div className={style.mainContainer}>
      <section className={style.infoContainer}>
        <h2 className={style.slogan}>More than just shorter links</h2>
        <p className={style.infoDescription}>
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
    </div>
  );
};

export default Main;
