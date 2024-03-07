import React from 'react';
import style from '../styleComponents/Main.module.css';

//Images
import workingImage from '../assets/images/illustration-working.svg';
import brand_recognition from '../assets/images/icon-brand-recognition.svg';
import detailed_records from '../assets/images/icon-detailed-records.svg';
import fully_customizable from '../assets/images/icon-fully-customizable.svg';

//Components
import DetailsStatistics from './DetailsStatistics';
import SloganFooter from './sloganFooter';
import LinkBox from './LinkBox';
import Button from './Button';

const Main = () => {
  const [inputState, setInputState] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  async function createLink(event) {
    event.preventDefault();
    if (inputState.length > 0) {
      try {
        setLoading(true);
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
        console.log(json);
        setData([...data, json]);
      } catch {
        setError(true);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
  }

  console.log(data);

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
        <div className={style.generalContainer}>
          <div className={style.wave}>
            <form className={style.containerInput} onSubmit={createLink}>
              <input
                type="text"
                className={style.inputLink}
                placeholder="Shorten a link here..."
                onChange={({ target }) => setInputState(target.value)}
              />
              <Button
                title={'Shorten It!'}
                border={`${7}px`}
                loading={loading}
              />
            </form>
          </div>
        </div>
      </div>

      <div className={style.advancedContainer}>
        {data.length > 0 &&
          data.map((obj) => (
            <LinkBox
              key={obj.data.url}
              url={obj.data.url}
              tinyUrl={obj.data.tiny_url}
            />
          ))}
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
