import { css } from '../../../styled-system/css';

const Dot = () => {
  return <div className={dot} />;
};

export default Dot;

const dot = css({
  width: '0.3rem',
  height: '0.3rem',
  backgroundColor: '#D3D5D7',
  borderRadius: '50%',
});
