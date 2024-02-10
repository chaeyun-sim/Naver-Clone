import { css } from '../../../styled-system/css';
import naver from '../../assets/naver.png';
import adbtn from '../../assets/ADButton.png';
import RightArrowIcon from '../../assets/RightArrowIcon';

const AdCard = () => {
  return (
    <div className={container}>
      <div style={{ position: 'relative' }}>
        <div className={adBox}>
          <img src={adbtn} style={{ width: '4.2rem', height: '1.6rem' }} />
        </div>
        <img src={naver} className={imageStyle} />
      </div>
      <div className={textBox}>
        <a href="#">
          <strong className={textStyle}>네이버로 이동하기</strong>
        </a>
        <span className={subtitle}>네이버</span>
        <span className={seeMore}>
          더 알아보기
          <RightArrowIcon />
        </span>
      </div>
    </div>
  );
};

export default AdCard;

const container = css({
  width: '38.5rem',
  height: '10.4rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '1.6rem',
  alignItems: 'center',
  marginTop: '1.6rem',
  cursor: 'pointer',
});

const imageStyle = css({
  borderRadius: '0.4rem',
  width: '18.5rem',
  height: '10.4rem',
});

const textBox = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  justifyContent: 'center',
  width: '17rem',
  marginBottom: '0.2rem',
  letterSpacing: '-0.04rem',
});

const textStyle = css({
  fontWeight: '600',
  width: '100%',
  height: '4.2rem',
  fontSize: '1.45rem',
  marginBottom: '0.2rem',
});

const subtitle = css({
  color: '#606060',
  fontSize: '1.3rem',
  lineHeight: '2rem',
});

const seeMore = css({
  fontSize: '1.4rem',
  fontWeight: '500',
  marginTop: '0.4rem',
  color: '#606060',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

const adBox = css({
  position: 'absolute',
  right: 5,
  top: 2,
});
