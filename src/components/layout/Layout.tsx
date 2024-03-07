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
  width: '134rem',
  height: '100%',
  margin: '0 auto',
});

const content = css({
  minHeight: '100%',
  flexGrow: 1,
});
