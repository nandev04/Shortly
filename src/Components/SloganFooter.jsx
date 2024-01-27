import React from 'react';
import style from '../styleComponents/SloganFooter.module.css';
import Button from './Button';

const SloganFooter = () => {
  return (
    <div className={style.sloganContainer}>
      <h2 className={style.sloganTitle}>Boost your links today</h2>
      <Button
        className={style.button}
        title={'Get Started'}
        border={`${20}px`}
        large={true}
      />
    </div>
  );
};

export default SloganFooter;
