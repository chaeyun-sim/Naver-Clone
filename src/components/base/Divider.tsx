import { css } from '../../../styled-system/css';

interface Props {
  margin?: string;
}

const Divider = ({ margin = '1.2rem' }: Props) => {
  return (
    <div className={divider} style={{ margin: `0 ${margin}` }}>
      .
    </div>
  );
};

export default Divider;

const divider = css({
  width: '0.1rem',
  height: '1.2rem',

  backgroundColor: '#D3D5D7',
  color: 'transparent',
});
