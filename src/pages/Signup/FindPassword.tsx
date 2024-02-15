import { useState } from 'react';
import { css } from '../../../styled-system/css';
import Divider from '../../components/base/Divider';

const FindPassword = () => {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <div className={container}>
      <header className={header}>
        <a href="/">
          <div className={image} />
        </a>
      </header>
      <h2 className={title}>비밀번호를 찾고자하는 아이디를 입력해주세요.</h2>
      <div className={content}>
        <div className={inputBox}>
          <span className={profileIcon} />
          <input
            className={input}
            type="email"
            placeholder="네이버 아이디 또는 단체 아이디"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            maxLength={40}
          />
          {keyword && <span className={deleteIcon} onClick={() => setKeyword('')} />}
        </div>
        <button className={next}>
          <span className={nextText}>다음</span>
        </button>
        <div className={findId}>
          <span className={helpText}>
            아이디가 기억나지 않는다면?{' '}
            <a href="/user2/help/idInquiry" className={findIdText}>
              아이디 찾기
            </a>
          </span>
        </div>
      </div>
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

export default FindPassword;

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
  fontWeight: '700',
});

const content = css({
  width: '46rem',
  margin: '0 auto',
});

const inputBox = css({
  width: '100%',
  height: '5.4rem',
  position: 'relative',
  padding: '1.6rem 1.7rem 1.4rem 5rem',
  borderRadius: '0.6rem',
  boxShadow: '0 1px 5px 0 rgba(0,0,0,.05)',
  border: '1px solid #BBBBBD',
  backgroundColor: 'white',
  boxSizing: 'border-box',
  display: 'flex',
});

const profileIcon = css({
  background: 'url(https://ssl.pstatic.net/static/nid/identify/m_sp_01_idpw_fdd53d03.png)',
  backgroundSize: '8.2rem 6.2rem',
  width: '3rem',
  height: '3rem',
  backgroundPosition: '0 -32px',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '1.1rem',
  left: '1.2rem',
});

const input = css({
  width: '100%',
  fontSize: '1.6rem',
  lineHeight: '2.2rem',
  letterSpacing: '-0.08rem',
  color: '#303038',
  cursor: 'pointer',
  fontWeight: '500',
  outline: 'none',
});

const deleteIcon = css({
  background: 'url(https://ssl.pstatic.net/static/nid/identify/m_sp_01_idpw_fdd53d03.png)',
  backgroundSize: '8.2rem 6.2rem',
  position: 'abolute',
  top: '1.7rem',
  right: '1.7rem',
  backgroundPosition: '-64px 0',
  backgroundRepeat: 'no-repeat',
  width: '1.9rem',
  height: '1.8rem',
  cursor: 'pointer',
});

const next = css({
  width: '100%',
  height: '5.5rem',
  marginTop: '1.4rem',
  padding: '1.5rem 0 1.6rem',
  borderRadius: '0.6rem',
  border: 'solid 1px rgba(0,0,0,.05)',
  backgroundColor: '#09AA5C',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const nextText = css({
  fontSize: '1.8rem',
  fontWeight: '700',
  color: 'white',
  cursor: 'pointer',
  marginBottom: '0.2rem',
});

const findId = css({
  width: '100%',
  marginTop: '3.7rem',
  textAlign: 'center',
});

const findIdText = css({
  paddingLeft: '0.5rem',
  color: '#09AA5c',
  fontSize: '1.4rem',
  fontWeight: '500',
  lineHeight: '2rem',
  letterSpacing: '-0.05rem',
});

const helpText = css({
  fontSize: '1.4rem',
  lineHeight: '2rem',
  letterSpacing: '-0.05rem',
  color: '#929294',
});

const footer = css({
  padding: '5.7rem 0 2.7rem',
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
  marginTop: '0.1rem',
});
