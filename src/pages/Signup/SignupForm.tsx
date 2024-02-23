import { useState } from 'react';
import classNames from 'classnames';
import idValidation from '../../hooks/idValidation';
import {
  calendarIcon,
  checked,
  checkedIcon,
  container,
  content,
  email,
  envelopeIcon,
  formList,
  header,
  hideOrShowIcon,
  joinByVerifiedName,
  joinByVerifiedNameText,
  lockerIcon,
  logo,
  personIcon,
  phoneIcon,
  showOrNot,
  showOrNotButton,
  unchecked,
} from './SignupForm.style';
import Form from '../../components/Signup/Form/Form';
import GenderForm from '../../components/Signup/Form/GenderForm';
import SelectBox from '../../components/Signup/Form/SelectBox';
import pwValidation from '../../hooks/pwValidation';
import emailValidation from '../../hooks/emailValidation';
import { SignupFormType } from '../../types/Signup';
import ErrorFields from '../../components/Signup/Form/ErrorFields';
import nameValidation from '../../hooks/nameValidation';
import birthValidation from '../../hooks/birthValidation';
import { css } from '../../../styled-system/css';
import { useNavigate } from 'react-router-dom';
import useAddHypen from '../../hooks/useAddHypen';

const SignupForm = () => {
  const navigate = useNavigate();
  const checkId = idValidation();
  const checkPw = pwValidation();
  const checkEmail = emailValidation();
  const checkName = nameValidation();
  const checkBirth = birthValidation();
  const convertPhone = useAddHypen();
  const [focus, setFocus] = useState<number>(0);
  const [selectGender, setSelectGender] = useState<string>('');
  const [isChecked, setisChecked] = useState<boolean>(false);
  const [inputs, setInputs] = useState<SignupFormType>({
    id: '',
    password: '',
    email: '',
    name: '',
    birth: '',
    gender: '',
    phone: '',
  });
  const [errors, setErrors] = useState<SignupFormType>({
    id: '',
    password: '',
    email: '',
    name: '',
    birth: '',
    gender: '',
    phone: '',
  });
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState<string>('');

  const initializeFocus = () => setFocus(0);

  const addHypenToNumber = () => {
    setInputs((inputs) => {
      return {
        ...inputs,
        phone: convertPhone(inputs.phone),
      };
    });
  };

  const handleValidation = (validator: (id: string) => string, name: string, value: string) => {
    if (validator(value).length > 0) {
      setErrors({ ...errors, [name]: validator(value) });
      initializeFocus();
    } else {
      setErrors({ ...errors, [name]: '' });
      initializeFocus();
    }
  };

  const handleBirth = () => {
    if (checkBirth(inputs.birth).length > 0) {
      setErrors({ ...errors, birth: checkBirth(inputs.birth) });
      initializeFocus();
    } else {
      setErrors({ ...errors, birth: '' });
      setInputs({
        ...inputs,
        birth:
          inputs.birth.slice(0, 4) +
          '.' +
          inputs.birth.slice(4, 6) +
          '.' +
          inputs.birth.slice(6, 8),
      });
      initializeFocus();
    }
  };

  const handleClick = () => {
    const required = '필수 정보입니다.';

    setErrors({
      id: !inputs.id ? required : '',
      password: !inputs.password ? required : '',
      email: '',
      name: !inputs.name ? required : '',
      birth: !inputs.birth ? required : '',
      gender: !inputs.gender ? '성별을 선택해 주세요.' : '',
      phone: !inputs.phone ? required : '',
    });

    if (
      inputs.id &&
      inputs.password &&
      inputs.name &&
      inputs.birth &&
      inputs.gender &&
      inputs.phone &&
      country
    ) {
      navigate('/');
    }
  };

  return (
    <div className={container}>
      <header className={header}>
        <a href="/">
          <div className={logo} />
        </a>
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
          <div style={{ marginTop: '-0.3rem' }}>
            <div className={formList} style={{ height: '15.2rem' }}>
              <Form
                placeholder="아이디"
                isFocused={focus === 1}
                isError={errors.id.length > 0}
                icon={() => personIcon(inputs.id.length > 0)}
                value={inputs.id}
                onChangeValue={(e) => setInputs({ ...inputs, id: e.target.value })}
                onFocus={() => setFocus(1)}
                onBlur={() => handleValidation(checkId, 'id', inputs.id)}
                endAdornment={() => <div className={email}>@naver.com</div>}
              />
              <Form
                placeholder="비밀번호"
                type={show ? 'text' : 'password'}
                isFocused={focus === 2}
                isError={errors.password.length > 0}
                value={inputs.password}
                onChangeValue={(e) => setInputs({ ...inputs, password: e.target.value })}
                onFocus={() => setFocus(2)}
                onBlur={() => handleValidation(checkPw, 'password', inputs.password)}
                style={{ marginRight: '3.2rem' }}
                icon={() => lockerIcon(inputs.password.length > 0)}
                endAdornment={() => (
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
                )}
              />
              <Form
                placeholder="[선택] 이메일주소 (비밀번호 찾기 등 본인 확인용)"
                type={email}
                isFocused={focus === 3}
                isError={errors.email.length > 0}
                isLastItem={true}
                value={inputs.email}
                onChangeValue={(e) => setInputs({ ...inputs, email: e.target.value })}
                onFocus={() => setFocus(3)}
                onBlur={() => handleValidation(checkEmail, 'email', inputs.email)}
                style={{ marginRight: '3.2rem' }}
                icon={() => envelopeIcon(inputs.email.length > 0)}
                endAdornment={() => <div />}
              />
            </div>
            <ErrorFields
              errors={errors}
              errorFields={[
                { key: 'id', label: '아이디' },
                { key: 'password', label: '비밀번호' },
                { key: 'email', label: '이메일' },
              ]}
            />
          </div>
          <div>
            <div className={formList} style={{ height: '25.3rem' }}>
              <Form
                placeholder="이름"
                isFocused={focus === 4}
                isError={errors.name.length > 0}
                value={inputs.name}
                onChangeValue={(e) => setInputs({ ...inputs, name: e.target.value })}
                onFocus={() => setFocus(4)}
                onBlur={() => handleValidation(checkName, 'name', inputs.name)}
                icon={() => personIcon(inputs.name.length > 0)}
                endAdornment={() => <div />}
              />
              <Form
                placeholder="생년월일 8자리"
                isFocused={focus === 5}
                isError={errors.birth.length > 0}
                value={inputs.birth}
                onChangeValue={(e) => setInputs({ ...inputs, birth: e.target.value })}
                onFocus={() => setFocus(5)}
                onBlur={handleBirth}
                icon={() => calendarIcon(inputs.birth.length > 0)}
                endAdornment={() => <div />}
              />
              <GenderForm selectGender={selectGender} onSetGender={setSelectGender} />
              <SelectBox
                isError={errors.gender.length > 0}
                onSetCountry={(country: string) => setCountry(country)}
              />
              <Form
                placeholder="휴대전화번호"
                isFocused={focus === 6}
                isError={errors.phone.length > 0}
                isLastItem={true}
                value={inputs.phone}
                onChangeValue={(e) => setInputs({ ...inputs, phone: e.target.value })}
                onFocus={() => setFocus(6)}
                onBlur={() => {
                  if (inputs.phone.length > 0) {
                    addHypenToNumber();
                  }
                  initializeFocus();
                }}
                icon={() => phoneIcon(inputs.phone.length > 0)}
                endAdornment={() => <div />}
              />
            </div>
            <ErrorFields
              errors={errors}
              errorFields={[
                { key: 'name', label: '이름' },
                { key: 'birth', label: '생년월일' },
                { key: 'gender', label: '성별' },
                { key: 'phone', label: '휴대전화번호' },
              ]}
            />
          </div>
          {isChecked && <div className={formList} style={{ height: '5rem' }}></div>}
          <div className={submit}>
            <button type="button" className={button} onClick={handleClick}>
              인증요청
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

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

const button = css({
  width: '100%',
  backgroundColor: '#09aa5c',
  padding: '1.4rem 0',
  borderRadius: '0.6rem',
  border: '1px solid rgba(0,0,0,.05)',
  fontSize: '1.8rem',
  fontWeight: '700',
  color: 'white',
  lineHeight: '2.2rem',
  cursor: 'pointer',
});
