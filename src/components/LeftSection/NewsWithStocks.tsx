import { css } from '../../../styled-system/css';
import { ImageCard, List } from './News/Entertainment';
import DefaultNewsCard from '../NewsSection/DefaultNewsCard';
import ListItem from '../NewsSection/ListItem';

interface Props {
  cardData: ImageCard[];
  listData: List[];
}

const NewsWithStocks = ({ cardData, listData }: Props) => {
  return (
    <div className={container}>
      <ul className={mainContents}>
        {cardData.map((data, index) => (
          <li key={index}>
            <DefaultNewsCard data={data} />
          </li>
        ))}
      </ul>
      <div className={content}>
        <div className={stockWrapper}>
          <div className={stockBox}>
            <a href="https://finance.naver.com/sise/sise_index.naver?code=KOSPI">
              <p className={stockName}>코스피</p>
              <p className={amount}>2620.32</p>
            </a>
            <div className={rateOfChange}>+0.41%</div>
          </div>
          <div className={stockBox}>
            <a href="https://finance.naver.com/sise/sise_index.naver?code=KOSDAQ">
              <p className={stockName}>코스닥</p>
              <p className={amount}>826.58</p>
            </a>
            <div className={rateOfChange}>+1.81%</div>
          </div>
          <div className={stockBox}>
            <a href="https://finance.naver.com/world/sise.naver?symbol=SPI@SPX">
              <p className={stockName}>S&P 500</p>
              <p className={amount}>5026.61</p>
            </a>
            <div className={rateOfChange}>+0.57%</div>
          </div>
        </div>
        <div className={list}>
          <ul>
            {listData.map((el, idx) => (
              <ListItem key={idx} data={el} isFirstItem={idx === 0} noMargin={true} />
            ))}
          </ul>
          <p className={todaysHeadline}>오늘의 경제 헤드라인입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsWithStocks;

const container = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  gap: '2rem',
});

const mainContents = css({
  width: '38.rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  overflow: 'hidden',
});

const list = css({
  paddingTop: '1.4rem',
  marginTop: '1.4rem',
  borderTopWidth: '0.1rem',
  borderTopColor: '#EBEBEB',
});

const todaysHeadline = css({
  marginTop: '1.2rem',
  fontSize: '1.37rem',
  color: '#606060',
});

const content = css({
  height: '22rem',
});

const stockWrapper = css({
  display: 'flex',
  height: '7.3rem',
  cursor: 'pointer',
});

const stockBox = css({
  width: '12.8rem',
  borderLeft: '2px solid #eb5b5b',
  paddingLeft: '1.6rem',
  paddingRight: '2.6rem',
});

const stockName = css({
  fontSize: '1.3rem',
  lineHeight: '1.4rem',
  color: '#101010',
});

const amount = css({
  fontSize: '1.7rem',
  lineHeight: '2.5rem',
  color: '#101010',
});

const rateOfChange = css({
  marginTop: '0.7rem',
  color: '#EB5B5B',
  backgroundColor: 'rgba(240,132,132,.1)',
  width: '6.8rem',
  height: '2.6rem',
  borderRadius: '0.4rem',
  fontSize: '1.2rem',
  lineHeight: '2.6rem',
  fontWeight: 'bold',
  textAlign: 'center',
  verticalAlign: 'top',
});
