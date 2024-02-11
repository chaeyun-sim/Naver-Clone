import { css } from '../../../styled-system/css';
import { ImageCard } from '../LeftSection/News/Entertainment';
import Dot from '../base/Dot';

interface Props {
  data: ImageCard;
  hasMargin?: boolean;
}

const DefaultNewsCard = ({ data, hasMargin }: Props) => {
  const { text, editor, time, image, url, videoTime } = data;

  const truncateText = () => {
    return text.length > 33 ? text.slice(0, 33) + '...' : text;
  };

  return (
    <div className={container} style={{ marginTop: hasMargin ? '1.6rem' : 0 }}>
      <div className={imageWrapper}>
        <div className={imageBox}>
          {videoTime && (
            <div className={playBox}>
              <div className={playIcon} />
              <span className={playTime}>{videoTime}</span>
            </div>
          )}
        </div>
        <img src={image} className={imageStyle} />
      </div>
      <div className={textBox}>
        <a href={url}>
          <strong className={textStyle}>{truncateText()}</strong>
        </a>
        <div className={subBox}>
          <div className={editorBox}>
            <span className={subtitle}>{editor}</span>
            <Dot />
            <span className={subtitle}>{time}</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DefaultNewsCard;

const container = css({
  width: '38.5rem',
  height: '10.4rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '1.6rem',
  alignItems: 'center',
  cursor: 'pointer',
});

const imageBox = css({
  backgroundColor: 'rgba(0,0,0,0.09)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
});

const imageStyle = css({
  borderRadius: '0.4rem',
  width: '18.5rem',
  height: '10.4rem',
});

const textBox = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  justifyContent: 'center',
  width: '17rem',
  marginBottom: '0.2rem',
  letterSpacing: '-0.04rem',
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

const subBox = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const editorBox = css({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.6rem',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const subtitle = css({
  color: '#606060',
  fontSize: '1.3rem',
  lineHeight: '2rem',
});

const playBox = css({
  position: 'absolute',
  bottom: 3,
  right: 3,
  color: 'white',
  display: 'flex',
  gap: '0.3rem',
  alignItems: 'center',
});

const playIcon = css({
  width: '1.4rem',
  height: '1.8rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png) no-repeat -148px -811px`,
  zoom: '0.5',
});

const playTime = css({
  fontSize: '1.2rem',
  fontWeight: '700',
});

const imageWrapper = css({
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
