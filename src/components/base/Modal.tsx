import { css } from '../../../styled-system/css';

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <div className={container}>
      <div className={content}>{children}</div>
    </div>
  );
};

export default Modal;

const container = css({
  width: '100vh',
  height: '100vh',
  position: 'absolute',
});

const content = css({
  position: 'absolute',
  left: '-1rem',
  top: '5.3rem',
  width: '46rem',
  height: '74rem',
  borderRadius: '0.8rem',
  background: 'white',
  boxShadow: '0 0 0 1px #eaebec, 0 4px 8px 0 rgba(0,0,0,.3)',
  overflow: 'scroll',
});
