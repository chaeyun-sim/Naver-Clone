import DefaultNewsCard from '../NewsSection/DefaultNewsCard';
import ListItem from '../NewsSection/ListItem';
import { css } from '../../../styled-system/css';
import { ImageCard, List } from './News/Entertainment';

interface Props {
  cardData: ImageCard[];
  listData: List[];
}

const NewsWithList = ({ cardData, listData }: Props) => {
  return (
    <div className={container}>
      <ul className={mainContents}>
        {cardData.map((data, index) => (
          <li key={index}>
            <DefaultNewsCard data={data} />
          </li>
        ))}
      </ul>
      <div className={listWrapper}>
        <ul>
          {listData.map((el, idx) => (
            <ListItem key={idx} data={el} isFirstItem={idx === 0} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsWithList;

const container = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

const mainContents = css({
  width: '38.rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  overflow: 'hidden',
});

const listWrapper = css({
  width: '38.5rem',
  height: '100%',
  marginTop: '-0.4rem',
});
