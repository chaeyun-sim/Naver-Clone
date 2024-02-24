import Section from '../../base/Section';
import { css } from '../../../../styled-system/css';

interface Props {
  height: string;
  url: string;
  image: string;
}

const Ad = ({ height, url, image }: Props) => {
  return (
    <Section height={height} style={{ marginTop: '1.6rem' }}>
      <a href={url}>
        <img src={image} className={ad} />
      </a>
    </Section>
  );
};

export default Ad;

const ad = css({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  objectFit: 'fill',
});
