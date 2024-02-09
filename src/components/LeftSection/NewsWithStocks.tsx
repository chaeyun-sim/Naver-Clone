import { css } from '../../../styled-system/css';
import { ImageCard, List } from './News/Entertainment';
import NewsCard from '../NewsSection/NewsCard';
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
            <NewsCard
              coverImage={data.image}
              editor={data.editor}
              text={data.text}
              time={data.time}
            />
          </li>
        ))}
      </ul>
      <div className={content}>
        <div className={stockWrapper}>
          <div className={stockBox}>asdf</div>
          <div className={stockBox}>asdf</div>
          <div className={stockBox}>asdf</div>
        </div>
        <div className={list}>
          <ul>
            {listData.map((el, idx) => (
              <ListItem key={idx} text={el.text} news={el.editor} isFirstItem={idx === 0} />
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
  fontSize: '1.3rem',
  color: '#606060',
});

const content = css({
  width: '38.5rem',
  height: '22rem',
});

const stockWrapper = css({
  display: 'flex',
  height: '7.3rem',
});

const stockBox = css({
  width: '13.25rem',
  borderLeft: '1px solid #eb5b5b',
  borderRight: '1px solid #eb5b5b',
  paddingLeft: '1.6rem',
  paddingRight: '2.6rem',
});
