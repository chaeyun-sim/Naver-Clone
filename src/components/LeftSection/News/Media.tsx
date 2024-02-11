import { css } from '../../../../styled-system/css';
import MediaWithImages from '../MediaWithImages';
import { cardData } from './constants/mediaData';

interface Props {
  page: number;
}

const Media = ({ page }: Props) => {
  return (
    <div className={container}>
      {page === 1 && <MediaWithImages data={cardData.slice(0, 4)} />}
      {page === 2 && <MediaWithImages data={cardData.slice(4, 8)} />}
      {page === 3 && <MediaWithImages data={cardData.slice(8, 12)} />}
      {page === 4 && <MediaWithImages data={cardData.slice(12, 16)} />}
    </div>
  );
};

export default Media;

const container = css({
  height: '100%',
  width: '100%',
});
