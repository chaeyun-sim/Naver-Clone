import { css } from '../../../../styled-system/css';
import NewsWithImages from '../NewsWithImages';
import NewsWithStocks from '../NewsWithStocks';
import { cardData, listData } from './constants/economyData';

interface Props {
  page: number;
}

const Economy = ({ page }: Props) => {
  return (
    <div className={container}>
      {page === 1 && (
        <NewsWithStocks cardData={cardData.slice(0, 2)} listData={listData.slice(0, 3)} />
      )}
      {page === 2 && <NewsWithImages cardData={cardData.slice(2, 6)} />}
      {page === 3 && <NewsWithImages cardData={cardData.slice(6, 10)} />}
      {page === 4 && <NewsWithImages cardData={cardData.slice(10, 14)} />}
    </div>
  );
};

export default Economy;

const container = css({
  height: '100%',
  width: '100%',
});
