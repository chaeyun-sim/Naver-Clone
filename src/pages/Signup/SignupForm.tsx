import { useState } from 'react';
import { css } from '../../../styled-system/css';
import classNames from 'classnames';
import { getCountries } from '../../api/service';
import { useQuery } from 'react-query';

const SignupForm = () => {
  const [focus, setFocus] = useState<number>(0);
  const [selectGender, setSelectGender] = useState<string>('');
  const [isChecked, setisChecked] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    email: '',
    name: '',
    birth: '',
    nationalNumber: '',
    gender: '',
    phone: '',
  });
  const [countriesData, setCountriesData] = useState([]);
  const [show, setShow] = useState(false);

  const initializeFocus = () => setFocus(0);

  const { refetch } = useQuery(['countries-data'], getCountries, {
    onSuccess: (data) => {
      if (data) {
        setCountriesData(data);
      } else {
        refetch();
      }
    },
  });

  const addHypenToNumber = () => {
    setInputs((inputs) => {
      const firstPart = inputs.phone.slice(0, 3);
      let middlePart;
      let lastPart = inputs.phone.slice(-4);

      if (inputs.phone.length === 10) {
        middlePart = inputs.phone.slice(3, 6);
      } else if (inputs.phone.length === 11) {
        middlePart = inputs.phone.slice(3, 7);
      } else {
        return inputs;
      }

      return {
        ...inputs,
        phone: `${firstPart}-${middlePart}-${lastPart}`,
      };
    });
  };

  return (
    <div className={container}>
      <header className={header}>
        <div className={logo} />
      </header>
      <div className={content}>
        <form>
          <div className={joinByVerifiedName}>
            <span className={joinByVerifiedNameText}>
              실명 인증된 아이디로 가입{' '}
              <span
                className={classNames(checkedIcon, isChecked ? checked : unchecked)}
                onClick={() => setisChecked(!isChecked)}
              />
            </span>
          </div>
          <div className={formList} style={{ height: '15.2rem' }}>
            <div className={classNames(formItem(focus === 1), personIcon(inputs.id.length > 0))}>
              <input
                className={input}
                placeholder="아이디"
                value={inputs.id}
                onChange={(e) => setInputs({ ...inputs, id: e.target.value })}
                maxLength={20}
                autoCapitalize="off"
                onFocus={() => setFocus(1)}
                onBlur={initializeFocus}
              />
              <div className={email}>@naver.com</div>
            </div>
            <div
              className={classNames(formItem(focus === 2), lockerIcon(inputs.password.length > 0))}
            >
              <input
                type={show ? 'text' : 'password'}
                className={input}
                placeholder="비밀번호"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                maxLength={20}
                autoCapitalize="off"
                style={{ marginRight: '3.2rem' }}
                onFocus={() => setFocus(2)}
                onBlur={initializeFocus}
              />
              <div className={showOrNot}>
                <button
                  className={classNames(showOrNotButton, hideOrShowIcon(show))}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShow(!show);
                  }}
                />
              </div>
            </div>
            <div
              className={classNames(
                formItem(focus === 3, true),
                envelopeIcon(inputs.email.length > 0),
              )}
            >
              <input
                type={email}
                className={input}
                placeholder="[선택] 이메일주소 (비밀번호 찾기 등 본인 확인용)"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                maxLength={100}
                autoCapitalize="off"
                style={{ marginRight: '3.2rem' }}
                onFocus={() => setFocus(3)}
                onBlur={initializeFocus}
              />
            </div>
          </div>
          <div className={formList} style={{ height: '25rem' }}>
            <div className={classNames(formItem(focus === 4), personIcon(inputs.name.length > 0))}>
              <input
                className={input}
                placeholder="이름"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                maxLength={40}
                autoCapitalize="off"
                onFocus={() => setFocus(4)}
                onBlur={initializeFocus}
              />
            </div>
            <div
              className={classNames(formItem(focus === 5), calendarIcon(inputs.birth.length > 0))}
            >
              <input
                className={input}
                placeholder="생년월일 8자리"
                value={inputs.birth}
                onChange={(e) => setInputs({ ...inputs, birth: e.target.value })}
                maxLength={40}
                autoCapitalize="off"
                onFocus={() => setFocus(5)}
                onBlur={() => {
                  if (inputs.birth.length > 0) {
                    setInputs({
                      ...inputs,
                      birth:
                        inputs.birth.slice(0, 4) +
                        '.' +
                        inputs.birth.slice(4, 6) +
                        '.' +
                        inputs.birth.slice(6, 8),
                    });
                  }
                  initializeFocus();
                }}
              />
            </div>
            <div className={classNames(formItem(false, false))} style={{ padding: '0 1rem' }}>
              <ul className={genderList}>
                <li className={radioItem(1)}>
                  <label
                    className={gender(selectGender === 'M')}
                    onClick={() => setSelectGender('M')}
                  >
                    남자
                  </label>
                </li>
                <li className={radioItem(2)}>
                  <label
                    className={gender(selectGender === 'F')}
                    onClick={() => setSelectGender('F')}
                  >
                    여자
                  </label>
                </li>
                <li className={radioItem(3)}>
                  <label
                    className={gender(selectGender === 'None')}
                    onClick={() => setSelectGender('None')}
                  >
                    선택안함
                  </label>
                </li>
              </ul>
            </div>
            <div className={classNames(formItem(false), globalIcon)}>
              <div className={selectBox}>
                <select className={select} defaultValue={'South Korea'}>
                  {countriesData.map((el) => (
                    <option
                      key={el[0]}
                      className={selectItem}
                      value={el[0]}
                      selected={el[2] === '대한민국'}
                    >{`${el[2]} ${el[1]}`}</option>
                  ))}
                </select>
              </div>
            </div>
            <div
              className={classNames(
                formItem(focus === 6, true),
                phoneIcon(inputs.phone.length > 0),
              )}
            >
              <input
                className={input}
                placeholder="생년월일 8자리"
                value={inputs.phone}
                onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                maxLength={40}
                autoCapitalize="off"
                onFocus={() => setFocus(5)}
                onBlur={() => {
                  if (inputs.phone.length > 0) {
                    addHypenToNumber();
                  }
                  initializeFocus();
                }}
              />
            </div>
          </div>
          <div className={formList} style={{ height: '5rem' }}></div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

const container = css({
  width: '50rem',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const header = css({
  padding: '1.6rem 0 1.6rem 2rem',
});

const logo = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
  backgroundSize: '37.2rem 32.6rem',
  backgroundPosition: '0 -24.4rem',
  backgroundRepeat: 'no-repeat',
  width: '9.4rem',
  height: '1.8rem',
});

const content = css({
  paddingTop: '3rem',
  flex: '1 1 auto',
  height: '100%',
});

const joinByVerifiedName = css({
  width: '100%',
  marginTop: '-0.8rem',
  textAlign: 'right',
});

const joinByVerifiedNameText = css({
  position: 'relative',
  paddingRight: '2.3rem',
  fontSize: '1.3rem',
  lineHeight: '1.8rem',
  letterSpacing: '-0.04rem',
  color: '#929294',
});

const unchecked = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
  backgroundPosition: '-342px -248px',
});

const checked = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
  backgroundPosition: '-342px -270px',
});

const checkedIcon = css({
  backgroundSize: '372px 326px',
  backgroundRepeat: 'no-repeat',
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  top: 0,
  right: 0,
  marginTop: '-0.15rem',
  cursor: 'pointer',
});

const formList = css({
  height: '15rem',
  margin: '1rem 0',
  borderRadius: '0.6rem',
  border: '1px solid #C6C6C6',
});

const formItem = (isFocused: boolean, isLastItem?: boolean, noOutline?: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    maxWidth: '100%',
    minHeight: '5rem',
    padding: '0 1rem 0 4.5rem',
    borderBottom: isLastItem || isFocused ? 'none' : '1px solid #DFDFDF',
    outline: isFocused && !noOutline ? '2px solid #09AA5C' : 'none',
    '&:first-of-type': {
      borderTopLeftRadius: '0.6rem',
      borderTopRightRadius: '0.6rem',
    },
    '&:last-of-type': {
      borderBottomLeftRadius: '0.6rem',
      borderBottomRightRadius: '0.6rem',
    },
  });

const input = css({
  boxSizing: 'border-box',
  outline: 'none',
  width: '100%',
  fontSize: '1.6rem',
  fontWeight: '500',
  lineHeight: '2.2rem',
  color: '#222',
  cursor: 'pointer',
});

const email = css({
  flex: 'none',
  padding: '0 0.4rem 0 0.6rem',
  fontSize: '1.5rem',
  fontWeight: '500',
  lineHeight: '2.2rem',
  letterSpacing: '-.2px',
  color: '#767678',
});

const showOrNot = css({
  flex: 'none',
  padding: '0 0.5rem',
  position: 'relative',
});

const showOrNotButton = css({
  marginLeft: '0.4rem',
  verticalAlign: 'middle',
  cursor: 'pointer',
});

const genderList = css({
  width: '100%',
  listStyle: 'none',
});

const radioItem = (itemNumber: number) =>
  css({
    borderRadius:
      itemNumber === 1 ? '0.4rem 0 0 0.4rem' : itemNumber === 3 ? '0 0.4rem 0.4rem 0' : 'none',
    width: 100 / 3 + '%',
    display: 'inline-block',
    verticalAlign: 'top',
    border: '1px solid #C6C6C6',
    cursor: 'pointer',
    '&:not(:first-child):not(:last-child)': {
      borderLeft: 'none',
      borderRight: 'none',
    },
  });

const gender = (isFocused: boolean) =>
  css({
    display: 'block',
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    padding: '0.6rem 0',
    borderRadius: 'inherit',
    outline: isFocused ? '1px solid #09AA5C' : 'none',
    fontSize: '1.3rem',
    fontWeight: '500',
    lineHeight: '1.8rem',
    color: isFocused ? '#09AA5C' : '#929294',
    textAlign: 'center',
    cursor: 'pointer',
  });

const selectBox = css({
  flex: '1 1 auto',
  position: 'realtive',
  padding: '0.1rem 0 0.1rem 0',
  display: 'block',
  '&::after': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-9.6rem -24.4rem',
    backgroundRepeat: 'no-repeat',
    width: '1.6rem',
    height: '1.7rem',
    position: 'absolute',
    top: '50%',
    right: '1rem',
    transform: 'translateY(-50%)',
  },
});

const select = css({
  width: '100%',
  fontSize: '1.6rem',
  lineHeight: '2.2rem',
  color: '#222',
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
  outline: 'none',
});

const selectItem = css({
  fontWeight: 'normal',
  display: 'block',
  minHeight: '1.6rem',
  lineHeight: '2.2rem',
  color: '#222',
  padding: '0 0.2rem 0.1rem',
});

// icons

const personIcon = (hasItem?: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-31rem -16rem' : '-34.2rem -6.4rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });

const lockerIcon = (hasItem?: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-31rem -6.4rem' : '-31rem -0rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });

const hideOrShowIcon = (show: boolean) =>
  css({
    '&::after': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: show ? '-25.6rem -29.6rem' : '-25.6rem -26.4rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: 0,
      right: 0,
    },
  });

const envelopeIcon = (hasItem?: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-21.6rem -12.8rem' : '-9.6rem -29.6rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });

const calendarIcon = (hasItem: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-3.2rem -29.6rem' : '-19.2rem -29.6rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });

const globalIcon = css({
  '&::before': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-3.2rem -26.4rem',
    backgroundRepeat: 'no-repeat',
    width: '3rem',
    height: '3rem',
    position: 'absolute',
    top: '1rem',
    left: '0.9rem',
  },
});

const phoneIcon = (hasItem: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-16rem -29.6rem' : '-31rem -12.8rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });
