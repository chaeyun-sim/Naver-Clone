import { css } from '../../../styled-system/css';
import Login from '../LoginSection/Login';
import Weather from '../RightSection/Weather/Weather';
import Section from '../base/Section';

const RightSection = () => {
  return (
    <div className={container}>
      <div className={loginWrapper}>
        <Login />
        <Section style={{ height: '24rem', marginTop: '1.6rem' }}>
          <a href="https://happybean.naver.com/fundings/detail/F1223">
            <img
              src="https://ssl.pstatic.net/melona/libs/1486/1486023/74f29aafb815fef79360_20240202152510385.jpg"
              className={ad}
            />
          </a>
        </Section>
        <Weather />
      </div>
    </div>
  );
};

export default RightSection;

const container = css({
  width: '100%',
  height: '100%',
});

const loginWrapper = css({
  height: '16.4rem',
});

const ad = css({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  objectFit: 'fill',
});
