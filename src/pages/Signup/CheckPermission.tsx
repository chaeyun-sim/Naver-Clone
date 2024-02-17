import { useEffect, useState } from 'react';
import { css } from '../../../styled-system/css';
import { useNavigate } from 'react-router-dom';
import TermsOfService from '../../components/Signup/CheckPermission/TermsOfService';
import { article, articleText } from '../../components/Signup/CheckPermission/style';
import LocationBasedServices from '../../components/Signup/CheckPermission/LocationBasedServices';
import PrivacyPolicy from '../../components/Signup/CheckPermission/PrivacyPolicy';

const CheckPermission = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<number>(0);
  const [checked, setChecked] = useState({
    이용약관: false,
    개인정보: false,
    실명: false,
    위치기반: false,
    개인정보2: false,
  });
  const [allChecked, setAllChecked] = useState<boolean>(false);

  useEffect(() => {
    if (Object.values(checked).some((el) => !el)) {
      setAllChecked(false);
    }
  }, [checked]);

  return (
    <div className={container}>
      <h1 className={header}>
        <a href="/" className={logo} />
      </h1>
      <div className={content}>
        <div className={langSelect}>
          <select className={select}>
            <option value="ko_KR" onClick={() => setLanguage(0)}>
              한국어
            </option>
            <option value="en_US" onClick={() => setLanguage(1)}>
              English
            </option>
            <option value="zh-Hans_CN" onClick={() => setLanguage(2)}>
              中文(简体)
            </option>
            <option value="zh-Hant_TW" onClick={() => setLanguage(3)}>
              中文(台灣)
            </option>
            <option value="ja_JP" onClick={() => setLanguage(4)}>
              日本語
            </option>
          </select>
        </div>
        <form className={form}>
          <div className={formSection}>
            <div className={allCheckBox}>
              <div>
                <label
                  className={termsLabel(allChecked, true)}
                  onClick={() => {
                    if (allChecked) {
                      setChecked({
                        이용약관: false,
                        개인정보: false,
                        개인정보2: false,
                        실명: false,
                        위치기반: false,
                      });
                    } else {
                      setChecked({
                        이용약관: true,
                        개인정보: true,
                        개인정보2: true,
                        실명: true,
                        위치기반: true,
                      });
                    }
                    setAllChecked(!allChecked);
                  }}
                >
                  <span className={title}>{language === 1 && '전체 동의하기'}</span>
                </label>
              </div>
            </div>
            <div className={allCheckdesc}>
              실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택), 이벤트・혜택 정보 수신(선택)
              동의를 포함합니다.
            </div>
            <ul>
              <li className={termsItem}>
                <div className={checkTerm}>
                  <label
                    className={termsLabel(checked.이용약관)}
                    onClick={() => {
                      let value = checked.이용약관;
                      setChecked({ ...checked, 이용약관: !value });
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <em className={option(true)}>[필수]</em>
                      <div className={textWrap}>
                        <span className={text}>{language === 1 && '네이버 이용약관'}</span>
                      </div>
                    </div>
                  </label>
                  <a className={link}>전체</a>
                </div>
                <div className={termBox('10rem')}>
                  <TermsOfService />
                </div>
              </li>
              <li className={termsItem}>
                <div className={checkTerm}>
                  <label
                    className={termsLabel(checked.개인정보)}
                    onClick={() => {
                      let value = checked.개인정보;
                      setChecked({ ...checked, 개인정보: !value });
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <em className={option(true)}>[필수]</em>
                      <div className={textWrap}>
                        <span className={text}>{language === 1 && '개인정보 수집 및 이용'}</span>
                      </div>
                    </div>
                  </label>
                  <a className={link}>전체</a>
                </div>
                <div className={termBox('10rem')}>
                  <PrivacyPolicy />
                </div>
              </li>
              <li className={termsItem}>
                <div className={checkTerm}>
                  <label
                    className={termsLabel(checked.실명)}
                    onClick={() => {
                      let value = checked.실명;
                      setChecked({ ...checked, 실명: !value });
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <em className={option()}>[선택]</em>
                      <div className={textWrap}>
                        <span className={text}>
                          {language === 1 && '실명 인증된 아이디로 가입'}
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className={termBox('6.6rem')} style={{ paddingTop: '1rem' }}>
                  <div className={article(true)}>
                    <p className={articleText}>
                      실명 인증된 아이디로 가입하시면 본인인증이 필요한 서비스(네이버 페이, 쇼핑,
                      멤버십 등)를 가입 후 바로 이용하실 수 있어요.
                    </p>
                  </div>
                </div>
              </li>
              <li className={termsItem}>
                <div className={checkTerm}>
                  <label
                    className={termsLabel(checked.위치기반)}
                    onClick={() => {
                      let value = checked.위치기반;
                      setChecked({ ...checked, 위치기반: !value });
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <em className={option()}>[선택]</em>
                      <div className={textWrap}>
                        <span className={text}>{language === 1 && '위치기반서비스 이용약관'}</span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className={termBox()} style={{ paddingTop: '1rem' }}>
                  <LocationBasedServices />
                </div>
              </li>
              <li className={termsItem}>
                <div className={checkTerm}>
                  <label
                    className={termsLabel(checked.개인정보2)}
                    onClick={() => {
                      let value = checked.개인정보2;
                      setChecked({ ...checked, 개인정보2: !value });
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <em className={option()}>[선택]</em>
                      <div className={textWrap}>
                        <span className={text}>{language === 1 && '개인정보 수집 및 이용'}</span>
                      </div>
                    </div>
                  </label>
                  <a className={link}>전체</a>
                </div>
                <div className={subCheckbox}>
                  <label className={checkLabel}>
                    <span className={subCheckLabel}>이벤트・혜택 정보 수신</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className={joinLink}>
            <a className={joinByBusiness}>단체, 비즈니스 회원 가입</a>
          </div>
          <div className={submit}>
            <button
              type="button"
              className={button(checked.이용약관 && checked.개인정보)}
              onClick={() => navigate('/user2/join/begin')}
            >
              다음
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckPermission;

const container = css({
  width: '50rem',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const header = css({
  width: '100%',
  height: '5rem',
  padding: '1.6rem 0 1.6rem 2rem',
});

const logo = css({
  cursor: 'pointer',
  textDecoration: 'none',
  '&::before': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '0 -24.4rem',
    backgroundRepeat: 'no-repeat',
    width: '9.4rem',
    height: '1.8rem',
    position: 'absolute',
  },
});

const content = css({
  flex: '1 1 auto',
  paddingTop: '3rem',
  height: '100%',
});

const langSelect = css({
  position: 'absolute',
  top: '1.2rem',
  right: '2.2rem',
  paddingLeft: '2.2rem',
  '&::before': {
    content: "''",
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-25.2rem -22.4rem',
    backgroundRepeat: 'no-repeat',
    width: '1.8rem',
    height: '1.8rem',
    position: 'absolute',
    top: 0,
    left: '0.2rem',
    marginTop: '0.35rem',
    cursor: 'pointer',
  },
  '&::after': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-36.4rem -24.8rem',
    backgroundRepeat: 'no-repeat',
    width: '0.7rem',
    height: '0.4rem',
    position: 'absolute',
    top: '0.8rem',
    right: '0',
    marginTop: '0.3rem',
  },
});

const select = css({
  paddingRight: '1.3rem',
  fontSize: '1.3rem',
  lineHeight: '2rem',
  letterSpacing: '-0.023rem',
  textAlign: 'center',
  width: '100%',
  color: '#222',
  cursor: 'pointer',
  outline: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',
});

const form = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  position: 'relative',
  padding: '0 2rem',
});

const formSection = css({
  height: '80.6rem',
  width: '100%',
  display: 'block',
  position: 'relative',
});

const allCheckBox = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  paddingLeft: '3.2rem',
});

const termsLabel = (allChecked: boolean, isFirstItem?: boolean) =>
  css({
    display: 'inline-block',
    position: 'relative',
    marginLeft: '-3.2rem',
    padding: isFirstItem ? '0.3rem 0 0 0' : '0.3rem 0 0rem 3.2rem',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: allChecked ? '-31rem -19.2rem' : '-21.6rem -9.6rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  });

const title = css({
  fontSize: '1.75rem',
  fontWeight: '800',
  color: '#222',
  letterSpacing: '-0.08rem',
  lineHeight: '2.2rem',
  marginRight: '0.5rem',
  marginLeft: '3.2rem',
});

const allCheckdesc = css({
  margin: '1.2rem 0 0 3.2rem',
  fontSize: '1.45rem',
  fontWeight: '500',
  color: '#929294',
  lineHeight: '1.8rem',
});

const termsItem = css({
  marginTop: '3rem',
});

const checkTerm = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  paddingLeft: '3.2rem',
});

const option = (isEssential?: boolean) =>
  css({
    color: !isEssential ? '#929294' : '#09aa5C',
    fontSize: '1.25rem',
    fontWeight: '800',
    marginRight: '0.3rem',
    lineHeight: '2.2rem',
    letterSpacing: '-0.06rem',
    cursor: 'pointer',
  });

const textWrap = css({
  display: 'inline-block',
});

const text = css({
  marginRight: '0.5rem',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#222',
  letterSpacing: '-0.08rem',
  lineHeight: '2.2rem',
  cursor: 'pointer',
});

const link = css({
  display: 'inline-block',
  position: 'relative',
  marginTop: '0.5rem',
  paddingRight: '1.3rem',
  fontSize: '1.2rem',
  lineHeight: '1.8rem',
  letterSpacing: '-0.08rem',
  color: '#929294',
  textDecoration: 'none',
  cursor: 'pointer',
  '&::after': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-14.1rem -22.6rem',
    backgroundRepeat: 'no-repeat',
    width: '1.3rem',
    height: '1.4rem',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: '-0.1rem',
    margin: 'auto 0',
  },
});

const termBox = (height?: string) =>
  css({
    overflow: 'auto',
    boxSizing: 'border-box',
    height: height ? height : '10rem',
    padding: '1.5rem',
    borderRadius: '0.6rem',
    border: '1px solid #D6D6D6',
    margin: '1.2rem 0 0 3.2rem',
  });

const subCheckbox = css({
  paddingLeft: '3.2rem',
  marginTop: '0.7rem',
});

const subCheckLabel = css({
  fontSize: '1.4rem',
  fontWeight: '500',
  lineHeight: '2rem',
  letterSpacing: '-.6px',
  color: '#767678',
  display: 'flex',
  alignItems: 'center',
});

const checkLabel = css({
  paddingLeft: '2rem',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-34.2rem -29.2rem',
    backgroundRepeat: 'no-repeat',
    width: '2rem',
    height: '2rem',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const joinLink = css({
  margin: '4rem 2rem 2rem',
  textAlign: 'right',
});

const joinByBusiness = css({
  display: 'inline-block',
  position: 'relative',
  paddingRight: '2rem',
  fontSize: '1.4rem',
  fontWeight: '500',
  lineHeight: '2rem',
  color: '#09AA5C',
  textDecoration: 'underline',
  verticalAlign: 'top',
  cursor: 'pointer',
  '&::after': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-29.1rem -22.4rem',
    backgroundRepeat: 'no-repeat',
    width: '1.7rem',
    height: '1.6rem',
    position: 'absolute',
    top: '0.2rem',
    right: 0,
  },
});

const submit = css({
  width: '46rem',
  margin: '0 auto',
  position: 'fixed',
  right: 0,
  bottom: 0,
  left: 0,
  background: 'white',
  padding: '2rem',
});

const button = (essentialsChecked: boolean) =>
  css({
    width: '100%',
    backgroundColor: essentialsChecked ? '#09aa5c' : '#8990A0',
    padding: '1.4rem 0',
    borderRadius: '0.6rem',
    border: '1px solid rgba(0,0,0,.05)',
    fontSize: '1.8rem',
    fontWeight: '700',
    color: 'white',
    lineHeight: '2.2rem',
    cursor: essentialsChecked ? 'pointer' : 'default',
  });
