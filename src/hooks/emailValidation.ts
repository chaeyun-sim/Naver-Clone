const emailValidation = () => {
  const validator = (email: string) => {
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      return '이메일 주소가 정확한지 확인해 주세요';
    }

    return '';
  };

  return validator;
};

export default emailValidation;
