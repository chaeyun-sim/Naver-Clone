import { css } from '../../../styled-system/css';
import { keyframes } from '@emotion/react';

interface Props {
  keyword: string;
  onSetKeyword: (value: string) => void;
}

const TopSearchBar = ({ keyword, onSetKeyword }: Props) => {
  return (
    <div className={fixedInput}>
      <div className={searchBody}>
        <div className={searchInner}>
          <h1 className={searchLogo}>
            <a href="/" className={n}>
              <span className={icon}>
                <svg viewBox="0 0 24 24" fill="#03c75a" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"></path>
                </svg>
              </span>
            </a>
          </h1>
          <form className={form}>
            <input
              className={input}
              placeholder="검색어를 입력해 주세요."
              maxLength={255}
              autoCapitalize="off"
              value={keyword}
              onChange={(e) => onSetKeyword(e.target.value)}
            />
            <div className={searchBox}>
              <button className={keyboardButton}></button>
              <button className={foldButton}></button>
            </div>
            <button type="button" className={searchBtn}>
              <span style={{ width: '2.5rem', height: '2.5rem', display: 'block' }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" fill="#03c75a">
                  <path d="M22.13.5c11.378 0 20.632 9.256 20.632 20.63 0 4.699-1.566 9.155-4.439 12.782l10.164 10.165a2.41 2.41 0 0 1-1.706 4.115 2.412 2.412 0 0 1-1.706-.705L33.31 35.719a2.41 2.41 0 0 1 0-3.41 15.71 15.71 0 0 0 4.628-11.178c0-8.718-7.09-15.808-15.807-15.808-8.718 0-15.808 7.09-15.808 15.808 0 7.15 4.817 13.43 11.714 15.273a2.41 2.41 0 0 1 1.705 2.954 2.41 2.41 0 0 1-2.95 1.705C7.788 38.658 1.5 30.46 1.5 21.131 1.5 9.756 10.756.5 22.13.5zm4.716 34.746a3.483 3.483 0 1 1 0 6.966 3.483 3.483 0 0 1 0-6.966z"></path>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopSearchBar;

const dropDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fixedInput = css({
  height: '6.5rem',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  borderRadius: 0,
  borderBottom: '1px solid #03c75a',
  transform: 'translate(0)',
  backgroundColor: 'white',
  animation: `${dropDown} 0.5s ease-out forwards`,
});

const searchBody = css({
  width: '128rem',
  margin: '0.4rem auto 0',
});

const searchInner = css({
  width: '86.6rem',
  paddingLeft: '5rem',
  transform: 'translateX(-20px)',
  border: '1px solid rgba(0,0,0,0)',
  position: 'relative',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
});

const searchLogo = css({
  position: 'absolute',
  top: 0,
  left: 0,
});

const n = css({
  padding: '1.7rem 1.7rem 1.9rem 1.7rem',
  position: 'relative',
  display: 'block',
  textDecoration: 'none!important',
  cursor: 'pointer',
});

const icon = css({
  opacity: 1,
  transform: 'scale(1)',
  transition:
    'opacity .3s 3.2s cubic-bezier(0.645, 0.045, 0.355, 1),trasnfrom .3s 3.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
  width: '2.4rem',
  height: '2.4rem',
  display: 'block',
  cursor: 'pointer',
});

const form = css({
  width: '58.4rem',
  backgroundColor: 'white',
  display: 'block',
});

const input = css({
  padding: '1.6rem 0 1.6rem 0.7rem',
  lineHeight: '2.4rem',
  width: '100%',
  height: '5.8rem',
  color: '#000',
  position: 'relative',
  backgroundColor: 'rgba(0,0,0,0)',
  boxSizing: 'border-box',
  fontSize: '2rem',
  fontWeight: 'bold',
  outline: 0,
  '&::placeholder': {
    color: '#ebebeb',
  },
});

const searchBtn = css({
  padding: '1.6rem 1.7rem 1.9rem 1.1rem',
  position: 'absolute',
  top: 0,
  right: 0,
  cursor: 'pointer',
});

const searchBox = css({
  top: '-0.1rem',
  right: '5.1rem',
  position: 'absolute',
  bottom: 0,
  width: '5.6rem',
});

const keyboardButton = css({
  cursor: 'pointer',
  overflow: 'visible',
  position: 'relative',
  padding: '2.2rem 0.3rem',
  '&::before': {
    content: '""',
    display: 'block',
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-19.9rem -25.4rem',
    backgroundRepeat: 'no-repeat',
    width: '2.4rem',
    height: '1.4rem',
    cursor: 'pointer',
  },
});

const foldButton = css({
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: '0.1rem',
  padding: '2.6rem 0.6rem',
  '&::before': {
    content: '""',
    display: 'block',
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-10.2rem -27.2rem',
    backgroundRepeat: 'no-repeat',
    width: '1rem',
    height: '0.6rem',
    cursor: 'pointer',
  },
});
