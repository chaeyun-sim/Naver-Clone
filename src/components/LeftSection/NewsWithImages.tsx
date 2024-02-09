import { css } from '../../../styled-system/css';
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
          <NewsCard
            coverImage={cardData[0].image}
            editor={cardData[0].editor}
            text={cardData[0].text}
            time={cardData[0].time}
          />
        </li>
        <li>
          <NewsCard
            coverImage={cardData[1].image}
            editor={cardData[1].editor}
            text={cardData[1].text}
            time={cardData[1].time}
            hasMargin
          />
        </li>
      </ul>
      <ul>
        <li>
          <NewsCard
            coverImage={cardData[2].image}
            editor={cardData[2].editor}
            text={cardData[2].text}
            time={cardData[2].time}
          />
        </li>
        <li>
          <NewsCard
            coverImage={cardData[3].image}
            editor={cardData[3].editor}
            text={cardData[3].text}
            time={cardData[3].time}
            hasMargin
          />
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
