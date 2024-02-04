import { css } from '../../../styled-system/css';

interface Props {
  text: string;
  coverUrl: string;
  profileImage: string;
  editorName: string;
}

const SocialCard = ({ text, coverUrl, profileImage, editorName }: Props) => {
  const handleTextSlice = () => {
    return text.length > 31 ? text.slice(0, 31) + '...' : text;
  };

  return (
    <div className={container}>
      <img src={coverUrl} className={image} />
      <p className={textStyle}>
        <strong>{handleTextSlice()}</strong>
      </p>
      <div className={editorBox}>
        <img src={profileImage} className={profileImageStyle} />
        <span className={editorStyle}>{editorName}</span>
      </div>
    </div>
  );
};

export default SocialCard;

const container = css({
  width: '25%',
  height: '19.4rem',
  paddingBottom: '2rem',
  paddingLeft: '2rem',
  fontSize: '1.4rem',
  color: '#101010',
  lineHeight: '1.7rem',
});

const image = css({
  width: '100%',
  height: '12rem',
  borderRadius: '0.4rem',
});

const textStyle = css({
  marginTop: '1rem',
  overflow: 'hidden',
  lineHeight: '2rem',
  fontSize: '1.4rem',
  color: '#101010',
});

const editorBox = css({
  display: 'flex',
  marginTop: '0.4rem',
  lineHeight: '2rem',
  gap: '0.6rem',
});

const profileImageStyle = css({
  width: '2rem',
  height: '2rem',
  borderRadius: '2rem',
  verticalAlign: 'top',
});

const editorStyle = css({
  fontSize: '1.3rem',
  color: '#606060',
});
