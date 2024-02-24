import { css } from '../../../../styled-system/css';
import Spinner from '../../../assets/Spinner';
import usePriceSeperator from '../../../hooks/usePriceSeperator';
import { StockType, infoBox, stockName, typeDown } from './Stock';

interface Props {
  isLoading: boolean;
  data: StockType[];
}

const MostSearched = ({ isLoading, data }: Props) => {
  const convertNumber = usePriceSeperator();

  return (
    <div className={infoBox}>
      <ul style={{ listStyle: 'none' }}>
        {data.slice(0, 3).map((item, index) => (
          <li key={index} className={stockItem}>
            <a className={stockLink}>
              <span className={stockName}>{item.itmsNm}</span>
              <span className={stockSmallPrice}>
                {Number(item.fltRt) < 0 ? (
                  <i className={typeDown(false)} />
                ) : (
                  <i className={typeUp(false)} />
                )}
                {convertNumber(Number(item.clpr))}
              </span>
            </a>
          </li>
        ))}
        {data.length > 0 && (
          <li className={stockItem}>
            <a className={typeMore} href="https://finance.naver.com/sise/lastsearch2.naver">
              인기종목 더보기
            </a>
          </li>
        )}
        {(isLoading || !data.length) && (
          <li
            style={{
              height: '14.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Spinner />
          </li>
        )}
      </ul>
    </div>
  );
};

export default MostSearched;

const stockItem = css({
  height: '3.6rem',
  borderBottom: '1px solid #EBEBEB',
});

const stockLink = css({
  padding: '0.6rem 0 0.9rem',
  display: 'flex',
  justifyContent: 'space-between',
  lineHeight: '2.1rem',
  cursor: 'pointer',
});

const stockSmallPrice = css({
  fontSize: '1.4rem',
  lineHeight: '2.1rem',
});

const typeUp = (isDisplay: boolean) =>
  css({
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-14.3rem -27.2rem',
    backgroundRepeat: 'no-repeat',
    width: '0.9rem',
    height: '0.6rem',
    margin: isDisplay ? '0.8rem 0.4rem 0 0' : '0.8rem 0.4rem 0.1rem 0',
    backgroundColor: 'rgba(0,0,0,0)',
    display: 'inline-block',
  });

const typeMore = css({
  color: '#606060',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.8rem 0 0.9rem',
  lineHeight: '2.1rem',
  fontSize: '1.4rem',
  cursor: 'pointer',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '1.3rem',
    right: 0,
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-43.2rem -28.5rem',
    backgroundRepeat: 'no-repeat',
    width: '1rem',
    height: '1.2rem',
  },
});
