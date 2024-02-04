import { css } from '../../../styled-system/css';

interface Props {
  coverImage: string;
  editorImage: string;
  editor: string;
  text: string;
  noEditorImage?: boolean;
}

const HorizontalCard = ({ coverImage, editorImage, editor, text, noEditorImage }: Props) => {
  return (
    <div className={container}>
      <img src={coverImage} className={image} />
      <div className={textBox}>
        <strong className={textStyle}>{text}</strong>
        <div className={editorBox}>
          {noEditorImage && <img src={editorImage} className={profileImage} />}
          <span className={editorName}>{editor}</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;

const container = css({
  width: '38.1rem',
  height: '10rem',
  paddingBottom: '1.6rem',
  paddingLeft: '2.8rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '1.6rem',
  alignItems: 'center',
});

const image = css({
  borderRadius: '0.4rem',
  width: '15.4rem',
  height: '10rem',
});

const textBox = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  justifyContent: 'center',
});

const textStyle = css({
  lineHeight: '2.1rem',
  fontSize: '1.4rem',
  fontFamily: 'var(--font-nanumsquare-regular)',
  fontWeight: '600',
  letterSpacing: '-0.04rem',
});

const editorBox = css({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.6rem',
});

const profileImage = css({
  borderRadius: '2rem',
  height: '2rem',
  width: '2rem',
});

const editorName = css({
  color: '#606060',
  fontSize: '1.3rem',
  lineHeight: '2rem',
  fontFamily: 'var(--font-nanumsquare-regular)',
  fontWeight: '600',
  letterSpacing: '-0.04rem',
});
