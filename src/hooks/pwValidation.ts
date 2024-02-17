const pwValidation = () => {
  const validator = (password: string) => {
    if (!password) {
      return '필수 정보입니다.';
    } else if (password.length < 8 || password.length > 16) {
      return '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.';
    } else if (!/[^A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g.test(password)) {
      return '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.';
    }

    return '';
  };

  return validator;
};

export default pwValidation;
