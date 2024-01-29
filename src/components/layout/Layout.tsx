import { Outlet } from 'react-router-dom';
import { css } from '../../../styled-system/css';

const Layout = () => {
  return (
    <div className={container}>
      <div className={content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const container = css({
  maxWidth: '134rem',
  height: '100vh',
  margin: '0 auto',
});

const content = css({
  minHeight: '100vh',
  flexGrow: 1,
  margin: '0 3rem',
});
