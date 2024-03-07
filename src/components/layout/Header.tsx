import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { services } from '../../constants/services';
import ServiceBox from '../base/ServiceBox';

interface Props {
  keyword: string;
  onSetKeyword: (value: string) => void;
}

const Header = ({ keyword, onSetKeyword }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

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
            value={keyword}
            onChange={(e) => onSetKeyword(e.target.value)}
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
            <ServiceBox key={key} icon={() => <div style={{ ...services[key] }} />} name={key} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

const header = css({
  width: '100%',
  padding: '1.2rem 3rem 0 3rem',
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
  width: '2.6rem',
  height: '2.6rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundPosition: '-314px -330px',
  backgroundSize: '444px 434px',
  cursor: 'pointer',
});

const naverPay = css({
  width: '3.2rem',
  height: '3.2rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '-295px -177px',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',
});

const talk = css({
  width: '2.6rem',
  height: '2.6rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '-364px -81px',
  cursor: 'pointer',
});

const noticeBox = css({
  marginRight: '0.38rem',
  position: 'relative',
  display: 'flex',
});

const notice = css({
  width: '2.6rem',
  height: '2.6rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '-364px -27px',
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
  width: '2.6rem',
  height: '2.6rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '-835px -1px',
  marginTop: '0.5rem',
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
  width: '2.4rem',
  height: '1.4rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '-199px -254px',
  backgroundRepeat: 'no-repeat',
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
  width: '1rem',
  height: '0.6rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '-102px -272px',
  backgroundRepeat: 'no-repeat',
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
  width: '2.8rem',
  height: '2.6rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '-805px -185px',
});

const serviceList = css({
  marginTop: '1.1rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
