import { css } from '../../../styled-system/css';
import Divider from '../../components/base/Divider';

const FindId = () => {
  return (
    <div className={container}>
      <header className={header}>
        <a href="/">
          <div className={image} />
        </a>
      </header>
      <h2 className={title}>찾으려는 아이디를 선택해주세요.</h2>
      <ul className={buttonBox}>
        <li>
          <button className={button}>
            <span className={profileIcon} />
            <div className={name}>네이버 아이디</div>
          </button>
        </li>
        <li>
          <button className={button}>
            <span className={loginIcon} />
            <div className={name}>로그인 전용 아이디</div>
          </button>
        </li>
        <li>
          <button className={button}>
            <span className={groupIcon} />
            <div className={name}>단체아이디</div>
            <span className={helpText}>
              (신) 단체아이디만 찾을 수 있습니다.{' '}
              <a href="https://help.naver.com/service/5640/contents/6438" className={help}>
                도움말
              </a>
            </span>
          </button>
        </li>
      </ul>
      <footer className={footer}>
        <div className={footerInner}>
          <a href="https://www.navercorp.com/tech/techMain" className={grayLogo}></a>
          <Divider margin="0.8rem" />
          <a
            href="https://help.naver.com/service/5640/category/bookmark"
            className={customerService}
          >
            회원정보 고객센터
          </a>
        </div>
      </footer>
    </div>
  );
};

export default FindId;

const container = css({
  height: '100%',
  width: '100%',
});

const header = css({
  height: '15.8rem',
  position: 'relative',
  padding: '10.8rem 0 2rem',
  display: 'flex',
  justifyContent: 'center',
});

const image = css({
  background: 'url(https://ssl.pstatic.net/static/nid/identify/m_sp_00_common_347a7059.png)',
  backgroundSize: '155px 89px',
  backgroundPosition: '0 0',
  backgroundRepeat: 'no-repeat',
  width: '15.5rem',
  height: '3rem',
});

const title = css({
  fontSize: '1.8rem',
  lineHeight: '3rem',
  letterSpacing: '-0.033rem',
  color: '#1e1e23',
  textAlign: 'center',
  marginBottom: '4rem',
});

const buttonBox = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.4rem',
});

const button = css({
  width: '45.9rem',
  height: '6rem',
  padding: '2rem 0 1.9rem 5rem',
  borderRadius: '0.8rem',
  boxSizing: 'border-box',
  position: 'relative',
  border: '1px solid #09aa5c',
  backgroundColor: 'white',
  cursor: 'pointer',
  display: 'flex',
});

const profileIcon = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/identify/m_sp_01_idpw_fdd53d03.png)',
  backgroundSize: '82px 62px',
  position: 'absolute',
  top: '1.4rem',
  left: '1.1rem',
  backgroundPosition: '-32px -32px',
  backgroundRepeat: 'no-repeat',
  width: '3rem',
  height: '3rem',
});

const loginIcon = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/identify/m_sp_01_idpw_fdd53d03.png)',
  backgroundSize: '82px 62px',
  backgroundPosition: '-32px 0',
  backgroundRepeat: 'no-repeat',
  width: '3rem',
  height: '3rem',
  position: 'absolute',
  top: '1.4rem',
  left: '1.1rem',
});

const groupIcon = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/identify/m_sp_01_idpw_fdd53d03.png)',
  backgroundSize: '82px 62px',
  backgroundPosition: '0 0',
  backgroundRepeat: 'no-repeat',
  width: '3rem',
  height: '3rem',
  position: 'absolute',
  top: '1.4rem',
  left: '1.1rem',
});

const name = css({
  fontSize: '1.6rem',
  lineHeight: '1.9rem',
  fontWeight: '700',
  color: '#303038',
  letterSpacing: '-0.02rem',
});

const helpText = css({
  fontSize: '1.3rem',
  lineHeight: '1.7rem',
  letterSpacing: '-0.03rem',
  color: '#929294',
  paddingLeft: '2rem',
});

const help = css({
  paddingLeft: '0.7rem',
  textDecoration: 'underline',
});

const footer = css({
  padding: '6rem 0 2.7rem',
  textAlign: 'center',
});

const footerInner = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '0 2rem',
});

const grayLogo = css({
  background: 'url(https://ssl.pstatic.net/static/nid/identify/m_sp_00_common_347a7059.png)',
  backgroundSize: '155px 89px',
  backgroundPosition: '0 -58px',
  backgroundRepeat: 'no-repeat',
  width: '5.6rem',
  height: '1.1rem',
  cursor: 'pointer',
});

const customerService = css({
  fontSize: '1.3rem',
  letterSpacing: '-0.05rem',
  color: 'rgba(0,0,0,.6)',
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all',
  cursor: 'pointer',
});
