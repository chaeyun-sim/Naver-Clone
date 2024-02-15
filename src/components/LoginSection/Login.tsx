import { css } from '../../../styled-system/css';
import Divider from '../base/Divider';
import Section from '../base/Section';

const Login = () => {
  return (
    <Section>
      <div className={loginContent}>
        <p className={text}>네이버를 더 안전하고 편리하게 이용하세요</p>
        <button className={loginButton}>
          <div className={logo} />
          <span className={loginText}>로그인</span>
        </button>
        <div className={findOrSignup}>
          <a href="/user2/help/idInquiry" className={pointer}>
            아이디 찾기
          </a>
          <Divider />
          <a href="/user2/help/pwInquiry" className={pointer}>
            비밀번호 찾기
          </a>
          <Divider />
          <a href="/user2/join/agree" className={pointer}>
            회원가입
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Login;

const loginContent = css({
  textAlign: 'center',
  padding: '2.1rem 2rem 1.8rem',
});

const text = css({
  fontSize: '1.4rem',
  lineHeight: '2rem',
  color: '#101010',
});

const loginButton = css({
  width: '37.8rem',
  height: '5.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid rgba(0,0,0,.06)',
  marginTop: '1.3rem',
  padding: '1.7rem 0',
  borderRadius: '0.4rem',
  backgroundColor: '#03C75A',
  boxShadow: '0 2px 4px 0 rgba(3,199,90,.12)',
  textDecoration: 'none',
  color: 'white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#17b75e',
    boxShadow: '0 2px 4px 0 rgba(3,199,90,.24)',
  },
});

const logo = css({
  background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
  backgroundPosition: '-55px -166px',
  backgroundSize: '444px 434px',
  backgroundRepeat: 'no-repeat',
  width: '7.2rem',
  height: '1.4rem',
  margin: '0.3rem 0.8rem 0 0',
});

const loginText = css({
  marginTop: '0.2rem',
});

const findOrSignup = css({
  width: '100%',
  marginTop: '1.6rem',
  fontSize: '1.3rem',
  color: '#606060',
  lineHeight: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const pointer = css({
  cursor: 'pointer',
});
