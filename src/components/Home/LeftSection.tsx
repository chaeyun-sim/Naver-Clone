import { css } from '../../../styled-system/css';
import News from '../NewsSection/News';
import Shopping from '../ShoppingSection/Shopping';
import Section from '../base/Section';

const LeftSection = () => {
  return (
    <div className={container}>
      <div className={bannerWrapper}>
        <Section>
          <a href="https://chzzk.naver.com/?pcode=naver_timeboard&campaign_id=2312-game-001&channel_id=naver_timeboard">
            <img
              src="https://ssl.pstatic.net/melona/libs/1483/1483493/190c1703a48bc624e5fd_20240117160301878.png"
              className={banner}
            />
          </a>
        </Section>
      </div>
      <div className={newsWrapper}>
        <News />
      </div>
      <div className={shoppingWrapper}>
        <Shopping />
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

const shoppingWrapper = css({
  marginTop: '1.6rem',
  height: '56rem',
});
