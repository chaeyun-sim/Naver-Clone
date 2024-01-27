import { css } from '../../../styled-system/css';

const Header = () => {
  return (
    <header className={header}>
      <div className={top}>header-top</div>
      <div className={searchBox}>header-search</div>
    </header>
  );
};

export default Header;

const header = css({
  width: '100%',
  paddingTop: '1.2rem',
});

const top = css({
  height: '7.1rem',
});

const searchBox = css({
  height: '15.6rem',
});
