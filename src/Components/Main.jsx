import React from 'react';
import style from '../styleComponents/Main.module.css';

//Images
import workingImage from '../assets/images/illustration-working.svg';
import brand_recognition from '../assets/images/icon-brand-recognition.svg';
import detailed_records from '../assets/images/icon-detailed-records.svg';
import fully_customizable from '../assets/images/icon-fully-customizable.svg';

//Components
import Input from './Input';
import DetailsStatistics from './DetailsStatistics';
import SloganFooter from './sloganFooter';
import LinkBox from './LinkBox';
import Button from './Button';
import useFetch from '../customHooks/useFetch';

const Main = () => {
  const { itemLocalStorage } = useFetch();

  console.log(itemLocalStorage);
  return (
    <>
      <div className={style.mainContainer}>
        <section className={style.infoContainer}>
          <h2 className={style.sloganTitle}>More than just shorter links</h2>
          <p className={style.sloganDescription}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button title={'Get Started'} border={`${20}px`} large={true} />
        </section>
        {/* <img
          className={style.imageWorking}
          src={workingImage}
          alt="Imagem ilustrativa de um homem trabalhando"
        /> */}
        <Input />
      </div>

      <div className={style.advancedContainer}>
        {itemLocalStorage.length > 0 &&
          itemLocalStorage.map((array) => {
            array.map((item) => {
              <LinkBox url={item[0]} tinyUrl={item[1]} />;
            });
          })}
        {/* FAZER A LÓGICA PARA CRIAR OS BOXES SE O ITEMLOCAL STORAGE EXISTIR */}

        <h1 className={style.advancedTitle}>Advanced Statistics</h1>
        <p className={style.advancedDescription}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={style.containerDetails}>
          <span className={style.afterElement}></span>
          <DetailsStatistics
            image={brand_recognition}
            altImg={'Brand Recognition icon'}
            title={'Brand Recognition'}
            degrade={100}
            description={
              "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            }
          />
          <DetailsStatistics
            image={detailed_records}
            altImg={'Detailed Records icon'}
            title={'Detailed Records'}
            degrade={150}
            description={
              'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
            }
          />
          <DetailsStatistics
            image={fully_customizable}
            altImg={'Fully Customizable icon'}
            title={'Fully Customizable'}
            degrade={200}
            description={
              'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
            }
          />
        </div>
      </div>
      <SloganFooter />
    </>
  );
};

export default Main;
