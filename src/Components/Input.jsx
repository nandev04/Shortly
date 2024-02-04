import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import style from '../styleComponents/Input.module.css';
import Button from './Button';
import useFetch from '../customHooks/useFetch';
// import LinkBox from './LinkBox';

const Input = () => {
  const [inputState, setInputState] = React.useState('');
  const { postFetch } = useFetch();

  function createLink(event) {
    event.preventDefault();
    postFetch('https://api.tinyurl.com/create', inputState);
  }

  return (
    <div className={style.generalContainer}>
      <div className={style.wave}>
        <form className={style.containerInput} onSubmit={createLink}>
          <input
            type="text"
            className={style.inputLink}
            placeholder="Shorten a link here..."
            onChange={({ target }) => setInputState(target.value)}
          />
          <Button title={'Shorten It!'} border={`${7}px`} />
        </form>
      </div>
    </div>
  );
};

export default Input;
