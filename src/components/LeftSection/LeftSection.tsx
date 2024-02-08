import { css } from '../../../styled-system/css';
import Section from '../base/Section';

const LeftSection = () => {
  return (
    <div className={container}>
      <Section height={'13rem'}>
        <img
          src="https://ssl.pstatic.net/melona/libs/1483/1483675/5a3c8bd1a3d66f17ea89_20240119163340926.png"
          className={banner}
        />
      </Section>
      <Section height={'42.6rem'} style={{ marginTop: '1.6rem' }}>
        asdf
      </Section>
    </div>
  );
};

export default LeftSection;

const container = css({
  width: '100%',
  height: '100%',
});

const banner = css({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
