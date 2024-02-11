import NewsWithImages from '../NewsWithImages';
import NewsWithList from '../NewsWithList';
import { cardData, listData } from './constants/sportsData';

interface Props {
  page: number;
}

const Sports = ({ page }: Props) => {
  return (
    <div>
      {page === 1 && (
        <NewsWithList cardData={cardData.slice(0, 2)} listData={listData.slice(0, 6)} />
      )}
      {page === 2 && <NewsWithImages cardData={cardData.slice(2, 6)} />}
      {page === 3 && (
        <NewsWithList cardData={cardData.slice(6, 8)} listData={listData.slice(6, 12)} />
      )}
    </div>
  );
};

export default Sports;
