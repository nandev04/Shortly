import React from 'react';
import style from '../styleComponents/Header.module.css';

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
        <button className={style.SignUp}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
