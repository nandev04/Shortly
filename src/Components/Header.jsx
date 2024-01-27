import React from 'react';
import style from '../styleComponents/Header.module.css';
import Button from './Button';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.navigation}>
        <h1 className={style.logoSite}>Shortly</h1>
        <ul className={style.navigationButtons}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div>
        <button className={style.login}>Login</button>
        <Button title={'Sign Up'} border={`${20}px`} />
      </div>
    </header>
  );
};

export default Header;
