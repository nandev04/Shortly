import React from 'react';
import style from '../styleComponents/Header.module.css';
import Button from './Button';

const Header = () => {
  document.addEventListener('click', ({ target }) => {
    const btn = document.querySelector('.btn');
    const listMenu = document.querySelector('.dropMenu');
    if (!listMenu.contains(target) && target !== btn) {
      listMenu.classList.remove('activeDrop');
    }
  });

  return (
    <header className={style.header}>
      <div className={style.menu}>
        <h1 className={style.logoSite}>Shortly</h1>
        <div className={style.navigation}>
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
      </div>
      <div className={style.menuToggle}>
        <h1 className={style.logoSite}>Shortly</h1>
        <div className={style.gripPosition}>
          <div className={style.gripButton}>
            <button
              className={style.dropMenuButton + ' btn'}
              onClick={() => {
                const list = document.querySelector('.dropMenu');
                list.classList.toggle('activeDrop');
              }}
            ></button>
          </div>

          <ul className={style.navigationButtonsMenu + ' dropMenu'}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <button className={style.loginMenu}>Login</button>
            <button className={style.signUp}>Sign Up!</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
