import { css } from '../../../styled-system/css';
import Login from '../LoginSection/Login';

const RightSection = () => {
  return (
    <div className={container}>
      <div className={loginWrapper}>
        <Login />
      </div>
    </div>
  );
};

export default RightSection;

const container = css({
  width: '100%',
  height: '100%',
});

const loginWrapper = css({
  height: '16.4rem',
});
