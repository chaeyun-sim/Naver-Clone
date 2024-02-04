import { css } from '../../../styled-system/css';

interface Props {
  coverImage: string;
  name: string;
  writer: string;
}

const WebtoonCard = ({ coverImage, name, writer }: Props) => {
  return (
    <div className={container}>
      <img src={coverImage} className={webtoonImage} />
      <div>
        <strong className={webtoonName}>{name}</strong>
        <br />
        <span className={webtoonWriters}>{writer}</span>
      </div>
    </div>
  );
};

export default WebtoonCard;

const container = css({
  width: '100%',
  height: '21.4rem',
  paddingLeft: '2.8rem',
  paddingBottom: '2rem',
});

const webtoonImage = css({
  width: '100%',
  height: '14rem',
  borderRadius: '0.4rem',
});

const webtoonName = css({
  marginTop: '1rem',
  lineHeight: '2rem',
  color: '#101010',
});

const webtoonWriters = css({
  marginTop: '0.4rem',
  fontSize: '1.3rem',
  lineHeight: '2rem',
  color: '#606060',
});
