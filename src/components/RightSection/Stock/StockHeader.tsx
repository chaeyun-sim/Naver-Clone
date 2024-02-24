import { useEffect, useState } from 'react';
import { css } from '../../../../styled-system/css';

const StockHeader = () => {
  const [stockHelp, setStockHelp] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  const getCurrentTime = () => {
    const curr = new Date();
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(utc + KR_TIME_DIFF);

    const date = kr_curr.toISOString().split('T')[0].split('-').slice(1, 3).join('.') + '.';
    const time = kr_curr.toString().split(' ')[4].split(':').slice(0, 2).join(':');

    return `${date} ${time}`;
  };

  useEffect(() => {
    setCurrentTime(getCurrentTime());
  }, []);

  return (
    <div className={headerGroup}>
      <a href="https://finance.naver.com/" target="_blank" rel="noreferrer" className={headerTitle}>
        증시
      </a>
      <button
        type="button"
        className={btnInfo(stockHelp)}
        aria-expanded="false"
        aria-hidden="false"
        onClick={() => setStockHelp(!stockHelp)}
      >
        <span className={blind}>정보 더보기</span>
      </button>
      {stockHelp && (
        <p className={layerInfo} aria-hidden="false">
          로그인 시 관심 종목의 주가를 확인할 수 있습니다.
          <br />
          로그아웃 시 인기 검색 종목이 제공됩니다.
          <button className={btnClose} onClick={() => setStockHelp(false)}>
            <span className={blind}>닫기</span>
          </button>
        </p>
      )}
      <div className={headerAside}>
        {currentTime}
        <button
          className={btnRefresh(isHovering)}
          onClick={() => setCurrentTime(getCurrentTime())}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          <span className={blind}>새로고침</span>
        </button>
      </div>
    </div>
  );
};

export default StockHeader;

const headerGroup = css({
  position: 'relative',
  display: 'flex',
  padding: '0.6rem 0',
  lineHeight: '4rem',
});

const headerTitle = css({
  color: '#080808',
  display: 'inline-block',
  paddingRight: '0.7rem',
  fontSize: '1.5rem',
  fontWeight: '800',
  verticalAlign: 'top',
});

const btnInfo = (isClicked: boolean) =>
  css({
    width: '2rem',
    height: '2rem',
    position: 'relative',
    margin: '1rem 0 0 -0.4rem',
    cursor: 'pointer',
    display: 'block',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
      backgroundSize: '44.4rem 43.4rem',
      backgroundPosition: '-41.6rem -7.2rem',
      backgroundRepeat: 'no-repeat',
      width: '1.4rem',
      height: '1.4rem',
      margin: 'auto',
    },
    ...(isClicked && {
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '1.89rem',
        bottom: '-1rem',
        left: '50%',
        backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
        backgroundSize: '44.4rem 43.4rem',
        backgroundPosition: '-26.6rem -25.4rem',
        backgroundRepeat: 'no-repeat',
        width: '2rem',
        height: '1.1em',
        transform: 'translateX(-50%)',
        zIndex: 2,
      },
    }),
  });

const blind = css({
  position: 'absolute',
  clip: 'rect(0 0 0 0)',
  width: '0.1rem',
  height: '0.1rem',
  margin: '-0.1rem',
  overflow: 'hidden',
});

const layerInfo = css({
  position: 'absolute',
  top: '4.5rem',
  left: '-0.2rem',
  width: '31.2rem',
  border: '1px solid #D3D5D7',
  backgroundColor: 'white',
  color: '#404040',
  padding: '1.4rem 2rem',
  boxShadow: '0 3px 6px 0 rgba(0,0,0,.06)',
  boxSizing: 'border-box',
  fontSize: '1.3rem',
  lineHeight: '2rem',
  wordBreak: 'keep-all',
  fontWeight: '500',
  zIndex: 1,
});

const headerAside = css({
  color: '#606060',
  flex: 'none',
  marginLeft: 'auto',
  fontSize: '1.3rem',
});

const btnClose = css({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '1.6rem',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-43.2rem -32.1rem',
    backgroundRepeat: 'no-repeat',
    width: '1rem',
    height: '1rem',
    margin: 'auto',
    cursor: 'pointer',
  },
});

const btnRefresh = (isHovering: boolean) =>
  css({
    display: 'inline-block',
    padding: '1.2rem 0 1.2rem 0.5rem',
    verticalAlign: 'top',
    cursor: 'pointer',
    backgroundColor: 'white',
    '&::before': {
      content: '""',
      display: 'block',
      backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
      backgroundSize: '44.4rem 43.4rem',
      backgroundPosition: isHovering ? '-32.7rem -38.4rem' : '-34.4rem -38.4rem',
      backgroundRepeat: 'no-repeat',
      width: '1.6rem',
      height: '1.6rem',
    },
  });
