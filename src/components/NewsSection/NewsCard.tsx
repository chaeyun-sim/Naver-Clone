import { css } from '../../../styled-system/css';
import Dot from '../base/Dot';

interface Props {
  coverImage: string;
  editor: string;
  text: string;
  time: string;
}

const NewsCard = ({ coverImage, editor, text, time }: Props) => {
  const truncateText = () => {
    return text.length > 33 ? text.slice(0, 33) + '...' : text;
  };

  return (
    <div className={container}>
      <img src={coverImage} className={image} />
      <div className={textBox}>
        <strong className={textStyle}>{truncateText()}</strong>
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

export default NewsCard;

const container = css({
  width: '38.5rem',
  height: '10.4rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '1.6rem',
  alignItems: 'center',
});

const image = css({
  borderRadius: '0.4rem',
  width: '18.5rem',
  height: '10.4rem',
});

const textBox = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  justifyContent: 'center',
  width: '15.7rem',
  marginBottom: '0.2rem',
});

const textStyle = css({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '2.1rem',
  fontWeight: '500',
  width: '100%',
  height: '4.2rem',
  fontSize: '1.5rem',
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
