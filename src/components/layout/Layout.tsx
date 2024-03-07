import { css } from '../../../styled-system/css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={container}>
      <div className={content}>{children}</div>
    </div>
  );
};

export default Layout;

const container = css({
  width: '134rem',
  height: '100%',
  margin: '0 auto',
});

const content = css({
  minHeight: '100%',
  flexGrow: 1,
});
