import { css } from '../../../styled-system/css';
import AdCard from '../NewsSection/AdCard';
import NewsCard from '../NewsSection/NewsCard';
import { ImageCard } from './News/Entertainment';

interface Props {
  cardData: ImageCard[];
}

const NewsWithImages = ({ cardData }: Props) => {
  return (
    <div className={content}>
      <ul>
        <li>
          <NewsCard data={cardData[0]} />
        </li>
        <li>{cardData[1].isAd ? <AdCard /> : <NewsCard data={cardData[1]} hasMargin />}</li>
      </ul>
      <ul>
        <li>
          <NewsCard data={cardData[2]} />
        </li>
        <li>
          <NewsCard data={cardData[3]} hasMargin />
        </li>
      </ul>
    </div>
  );
};

export default NewsWithImages;

const content = css({
  display: 'flex',
  gap: '2rem',
});
