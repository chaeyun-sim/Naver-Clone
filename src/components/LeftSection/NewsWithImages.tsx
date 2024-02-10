import { css } from '../../../styled-system/css';
import AdCard from '../NewsSection/AdCard';
import DefaultNewsCard from '../NewsSection/DefaultNewsCard';
import { ImageCard } from './News/Entertainment';

interface Props {
  cardData: ImageCard[];
}

const NewsWithImages = ({ cardData }: Props) => {
  return (
    <div className={content}>
      <ul>
        <li>
          <DefaultNewsCard data={cardData[0]} />
        </li>
        <li>{cardData[1].isAd ? <AdCard /> : <DefaultNewsCard data={cardData[1]} hasMargin />}</li>
      </ul>
      <ul>
        <li>
          <DefaultNewsCard data={cardData[2]} />
        </li>
        <li>
          <DefaultNewsCard data={cardData[3]} hasMargin />
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
