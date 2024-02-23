import React from 'react';
import style from '../styleComponents/Input.module.css';
import Button from './Button';
import useFetch from '../customHooks/useFetch';
// import LinkBox from './LinkBox';

const Input = () => {
  const [inputState, setInputState] = React.useState('');
  const [data, setData] = React.useState(null);

  async function createLink(event) {
    event.preventDefault();
    const response = await fetch('https://api.tinyurl.com/create', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer 78IUTWMYCM3e1xlkKrVz03YZXUDO1ZUaLd44cbKYVz0GsOybORvy2PRQ14qL',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: inputState,
      }),
    });
    const json = await response.json();
    setData(json);
    console.log(data);
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
