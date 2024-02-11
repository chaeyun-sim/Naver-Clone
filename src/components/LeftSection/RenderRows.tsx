import MediaLogoCard from '../NewsSection/MediaLogoCard';
import { NewsList } from './News/constants/newslist';

interface Props {
  arr: NewsList[];
  isLastLine?: boolean;
}

function RenderRows({ arr, isLastLine = false }: Props) {
  return (
    <div style={{ display: 'flex' }}>
      {arr.map((news, idx) => {
        const isLastItem = idx === 5;
        return (
          <MediaLogoCard
            key={news.name}
            data={news}
            isLastLine={isLastLine}
            isLastItem={isLastItem}
          />
        );
      })}
    </div>
  );
}

export default RenderRows;
