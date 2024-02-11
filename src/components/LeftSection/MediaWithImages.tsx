import MediaCard from '../NewsSection/MediaCard';
import { css } from '../../../styled-system/css';
import { ImageCard } from './News/Entertainment';

interface Props {
  data: ImageCard[];
}

const MediaWithImages = ({ data }: Props) => {
  return (
    <div className={content}>
      <ul>
        <li>
          <MediaCard data={data[0]} />
        </li>
        <li>
          <MediaCard data={data[1]} hasMargin />
        </li>
      </ul>
      <ul>
        <li>
          <MediaCard data={data[2]} />
        </li>
        <li>
          <MediaCard data={data[3]} hasMargin />
        </li>
      </ul>
    </div>
  );
};

export default MediaWithImages;

const content = css({
  display: 'flex',
  gap: '2rem',
});
