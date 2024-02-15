import { css } from '../../../styled-system/css';
import News from '../NewsSection/News';
import Section from '../base/Section';

const LeftSection = () => {
  return (
    <div className={container}>
      <div className={bannerWrapper}>
        <Section>
          <img
            src="https://ssl.pstatic.net/melona/libs/1483/1483675/5a3c8bd1a3d66f17ea89_20240119163340926.png"
            className={banner}
          />
        </Section>
      </div>
      <div className={newsWrapper}>
        <News />
      </div>
    </div>
  );
};

export default LeftSection;

const container = css({
  width: '100%',
  height: '100%',
});

const bannerWrapper = css({
  height: '13rem',
});

const banner = css({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const newsWrapper = css({
  marginTop: '1.6rem',
  height: '42.6rem',
});
