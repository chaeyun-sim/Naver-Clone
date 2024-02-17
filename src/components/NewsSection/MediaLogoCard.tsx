import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { NewsList } from '../LeftSection/News/constants/newslist';
import Divider from '../base/Divider';

interface Props {
  data: NewsList;
  isLastLine?: boolean;
  isLastItem?: boolean;
}

const MediaLogoCard = ({ data, isLastLine, isLastItem }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isHover ? (
        <div
          className={content}
          style={{
            borderTop: '1px solid #ebebeb',
            borderLeft: '1px solid #ebebeb',
            borderBottom: isLastLine ? '1px solid #ebebeb' : 'none',
            borderRight: isLastItem ? '1px solid #ebebeb' : '',
          }}
        >
          <img src={data.image} style={{ zoom: '0.5' }} alt={data.name} />
        </div>
      ) : (
        <div className={sideContent}>
          <a href="#" style={{ textDecorationColor: 'white' }}>
            <span className={subscribe}>구독</span>
          </a>
          <Divider />
          <a href={data.url} style={{ textDecorationColor: 'white' }}>
            <span className={seeNews}>기사보기</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default MediaLogoCard;

const container = css({
  width: '13.12rem',
  height: '5.6rem',
  position: 'relative',
  cursor: 'pointer',
});

const content = css({
  width: '100%',
  height: '100%',
  padding: '1.8rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const sideContent = css({
  width: '100%',
  height: '100%',
  backgroundColor: '#2868f2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const subscribe = css({
  fontSize: '1.35rem',
  fontWeight: '700',
  color: 'white',
});

const seeNews = css({
  fontSize: '1.35rem',
  fontWeight: '600',
  color: 'white',
});
