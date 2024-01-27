import React from 'react';
import style from '../styleComponents/Footer.module.css';
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.contentFooter}>
        <h1 className={style.logoSite}>Shortly</h1>
        <div>
          <h3 className={style.topicTitle}>Features</h3>
          <a href="#" className={style.topic}>
            Link Shortening
          </a>
          <a href="#" className={style.topic}>
            Branded Links
          </a>
          <a href="#" className={style.topic}>
            Analytics
          </a>
        </div>
        <div>
          <h3 className={style.topicTitle}>Resources</h3>
          <a href="#" className={style.topic}>
            Blog
          </a>
          <a href="https://github.com/nandev04" className={style.topic}>
            Developers
          </a>
          <a href="#" className={style.topic}>
            Support
          </a>
        </div>
        <div>
          <h3 className={style.topicTitle}>Company</h3>
          <a href="#" className={style.topic}>
            About
          </a>
          <a href="#" className={style.topic}>
            Our Team
          </a>
          <a href="#" className={style.topic}>
            Careers
          </a>
          <a href="#" className={style.topic}>
            Contact
          </a>
        </div>

        <div className={style.socials}>
          <a href="#">
            <img src={facebookIcon} alt="Ícone do facebook" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="Ícone do twitter" />
          </a>
          <a href="#">
            <img src={pinterestIcon} alt="Ícone do pinterest" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="Ícone do instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
