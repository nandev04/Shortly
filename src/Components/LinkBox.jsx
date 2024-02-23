import React from 'react';
import style from '../styleComponents/LinkBox.module.css';

// Preciso linkar o botão copiado ao estilo personalizado

const LinkBox = ({ url, tinyUrl }) => {
  function handleCopy(event) {
    navigator.clipboard
      .writeText(tinyUrl)
      .then(() => {
        event.target.innerText = 'Copied!';
        event.target.classList.add(style.active);
      })
      .catch((err) => alert('Ocorreu um erro ao copiar o link: ' + err));

    setTimeout(() => {
      event.target.innerText = 'Copy!';
      event.target.classList.remove(style.active);
    }, 1500);
  }

  return (
    <>
      <div className={style.box}>
        <p className={style.url}>{url}</p>
        <div className={style.shortLink}>
          <p className={style.tinyUrl}>{tinyUrl}</p>
          <button onClick={handleCopy} className={`${style.button}`}>
            Copy!
          </button>
        </div>
      </div>
    </>
  );
};

export default LinkBox;
