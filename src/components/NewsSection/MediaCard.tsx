import { css } from '../../../styled-system/css';
import { ImageCard } from '../LeftSection/News/Entertainment';

interface Props {
  data: ImageCard;
  hasMargin?: boolean;
}

const MediaCard = ({ data, hasMargin }: Props) => {
  const { text, image, url, time, editor, editorImage, editorUrl } = data;

  const truncateText = () => {
    return text.length > 33 ? text.slice(0, 33) + '...' : text;
  };

  return (
    <div className={container} style={{ marginTop: hasMargin ? '1.5rem' : '-0.1rem' }}>
      <div className={imageWrapper}>
        <a href={url}>
          <img src={image} className={imageStyle} />
        </a>
      </div>
      <div className={textBox}>
        <div className={newspaperHeader}>
          <div className={newspaperNameBox}>
            <div className={editorImageBox}>
              <img src={editorImage} className={imageStyle} />
            </div>
            <a href={editorUrl}>
              <span className={newsPaperName}>{editor}</span>
            </a>
          </div>
          <button className={subscribeButton}>
            구독
            <div className={plusIcon} />
          </button>
        </div>
        <a href={url}>
          <strong className={textStyle}>{truncateText()}</strong>
        </a>
        <div className={subBox}>
          <span className={subtitle}>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;

const container = css({
  width: '38.5rem',
  height: '10.4rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '1.6rem',
  alignItems: 'center',
  cursor: 'pointer',
});

const imageWrapper = css({
  width: '16.8rem',
  height: '10.2rem',
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease-in-out',
  },
});

const imageStyle = css({
  borderRadius: '0.4rem',
  width: '100%',
  height: '100%',
});

const textBox = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  justifyContent: 'center',
  width: '23.1rem',
  marginBottom: '0.2rem',
  letterSpacing: '-0.04rem',
});

const newspaperHeader = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: '0.4rem',
});

const newspaperNameBox = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.6rem',
});

const newsPaperName = css({
  fontSize: '1.35rem',
  fontWeight: 'bold',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

const textStyle = css({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '2.1rem',
  fontWeight: '600',
  width: '100%',
  height: '4.2rem',
  fontSize: '1.45rem',
  marginBottom: '0.2rem',
});

const editorImageBox = css({
  border: '1px solid rgba(0,0,0,.06)',
  borderRadius: '50%',
  width: '2.4rem',
  height: '2.4rem',
  overflow: 'hidden',
  position: 'relative',
});

const subscribeButton = css({
  width: '5rem',
  border: '1px solid rgba(58,103,234,.3)',
  borderRadius: '1.3rem',
  fontSize: '1.25rem',
  lineHeight: '2.4rem',
  fontWeight: '800',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  gap: '0.2rem',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#3a67ea',
});

const subBox = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const subtitle = css({
  color: '#606060',
  fontSize: '1.3rem',
  lineHeight: '2rem',
});

const plusIcon = css({
  width: '1.4rem',
  height: '1.4rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png) no-repeat -649px -473px`,
  zoom: '0.5',
});
