import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { services } from '../../constants/services';
import ServiceBox from '../base/ServiceBox';

const Header = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  isFocused;

  return (
    <header className={header}>
      <div className={top}>
        <div className={items}>
          <button className={menu} />
          <button className={naverPay} />
        </div>
        <div className={items}>
          <button className={talk} />
          <div className={noticeBox}>
            <button className={notice} />
          </div>
        </div>
      </div>
      <div className={searchBox}>
        <div className={inputbox}>
          <div className={naverWrapper}>
            <div className={naverIcon} />
          </div>
          <input
            className={input}
            placeholder={isFocused ? '검색어를 입력해 주세요.' : ''}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button className={keyboardButton}>
            <div className={keyboard} />
          </button>
          <button className={moreInfoButton}>
            <div className={moreInfo} />
          </button>
          <div className={searchWrapper}>
            <div className={searchIcon} />
          </div>
        </div>
        <div className={serviceList}>
          {Object.keys(services).map((key) => (
            <ServiceBox icon={() => <div style={{ ...services[key] }} />} name={key} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

const header = css({
  width: '100%',
  paddingTop: '1.2rem',
});

const top = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1.28rem',
});

const items = css({
  display: 'flex',
  gap: '2.43rem',
  flexDirection: 'row',
  alignItems: 'center',
});

const menu = css({
  width: '5rem',
  height: '4rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -1px -672px`,
  zoom: '0.5',
  cursor: 'pointer',
});

const naverPay = css({
  width: '6.4rem',
  height: '6.4rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -590px -354px`,
  zoom: '0.5',
  cursor: 'pointer',
});

const talk = css({
  width: '5rem',
  height: '5.2rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -217px -666px`,
  zoom: '0.5',
  cursor: 'pointer',
});

const noticeBox = css({
  marginRight: '0.38rem',
  position: 'relative',
  display: 'flex',
});

const notice = css({
  width: '5.2rem',
  height: '5rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -108px -667px`,
  zoom: '0.5',
  cursor: 'pointer',
});

const searchBox = css({
  marginTop: '1.2rem',
  height: '15.6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const inputbox = css({
  width: '70.8rem',
  height: '6rem',
  borderRadius: '3.3rem',
  border: '0.1rem solid #03C75A',
  overflow: 'hidden',
  marginTop: '0.1rem',
  display: 'flex',
  flexDirection: 'row',
  '&:hover': {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.13)',
  },
});

const input = css({
  width: '48rem',
  height: '6rem',
  backgroundColor: 'white',
  boxSizing: 'border-box',
  fontSize: '2.1rem',
  fontWeight: '800',
  color: '#101010',
  letterSpacing: '-0.06rem',
  outline: 'none',
  display: 'flex',
  flexDirection: 'row',
  marginRight: '4.5rem',
  '&::placeholder': {
    color: '#F2F2F2',
    fontWeight: '600',
  },
});

const naverWrapper = css({
  width: '6.7rem',
  height: '5.8rem',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '1.1rem',
  cursor: 'pointer',
});

const naverIcon = css({
  width: '4.8rem',
  height: '4.8rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -50px -720px`,
  zoom: '0.5',
});

const keyboardButton = css({
  width: '3rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

const keyboard = css({
  width: '4.8rem',
  height: '2.8rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png) no-repeat -398px -508px`,
  zoom: '0.5',
});

const moreInfoButton = css({
  width: '2.0rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 0.3rem',
  paddingLeft: '0.3rem',
  cursor: 'pointer',
});

const moreInfo = css({
  width: '1.8rem',
  height: '1rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png) no-repeat -205px -545px`,
  zoom: '0.5',
});

const searchWrapper = css({
  width: '6.2rem',
  height: '5.8rem',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: '1.65rem',
  cursor: 'pointer',
});

const searchIcon = css({
  width: '4.9rem',
  height: '4.8rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png) no-repeat -729px -372px`,
  zoom: '0.5',
});

const serviceList = css({
  marginTop: '1.1rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
