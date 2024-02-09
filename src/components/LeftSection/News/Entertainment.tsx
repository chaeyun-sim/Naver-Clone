import { css } from '../../../../styled-system/css';
import NewsWithImages from '../NewsWithImages';
import NewsWithList from '../NewsWithList';
import { cardData, listData } from './constants/entertainData';

export type ImageCard = {
  text: string;
  editor: string;
  time: string;
  image: string;
};

export type List = {
  text: string;
  editor: string;
};

interface Props {
  page: number;
}

const Entertainment = ({ page }: Props) => {
  return (
    <div className={container}>
      {page === 1 && (
        <NewsWithList cardData={cardData.slice(0, 2)} listData={listData.slice(0, 6)} />
      )}
      {page === 2 && <NewsWithImages cardData={cardData.slice(2, 6)} />}
      {page === 3 && <NewsWithImages cardData={cardData.slice(6, 10)} />}
    </div>
  );
};

export default Entertainment;

const container = css({
  height: '100%',
  width: '100%',
});
