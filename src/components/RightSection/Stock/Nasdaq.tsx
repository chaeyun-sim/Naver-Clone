import { css } from '../../../../styled-system/css';
import { infoBox, stockName, typeDown } from './Stock';

const Nasdaq = () => {
  return (
    <div className={infoBox}>
      <div className={rolling}>
        <a
          href="https://finance.naver.com/world/sise.nhn?symbol=DJI@DJI"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div>
            <div className={stockName}>나스닥</div>
            <div className={stockPrice}>15,996.82</div>
            <div className={statusIcon}>
              <i className={typeDown(true)}></i>
              44.80
              <span className={rate(-0.28 > 0)}>-0.28%</span>
            </div>
            <div className={stockGraph}>
              <img
                src="https://ssl.pstatic.net/imgfinance/chart/mobile/world/mini/.IXIC_naverpc_l.png"
                width={180}
                height={72}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Nasdaq;

const rolling = css({
  width: '100%',
  flexShrink: 0,
  cursor: 'pointer',
});

const stockPrice = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: '0.3rem',
  fontSize: '2.4rem',
  lineHeight: '3rem',
  letterSpacing: '-.7px',
});

const statusIcon = css({
  color: '#2196f3',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  position: 'relative',
  marginTop: '0.2rem',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
  display: 'inline-block',
});

const rate = (isUp: boolean) =>
  css({
    paddingLeft: '0.6rem',
    color: !isUp ? '#2196f3' : '#F44336',
    whiteSpace: 'nowrap',
    fontSize: '1.4rem',
    lineHeight: '1.7rem',
  });

const stockGraph = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: '0.6rem',
});
