const idValidation = () => {
  const idvalidator = (id: string) => {
    if (!id) {
      return '필수 정보입니다.';
    } else if (id.length < 5 || id.length > 20) {
      return '5~20자의 영문 소문자, 숫자 와 특수기호(_),(-)만 사용 가능합니다.';
    } else if (!/^[a-z0-9_-]+$/.test(id)) {
      return '5~20자의 영문 소문자, 숫자 와 특수기호(_),(-)만 사용 가능합니다.';
    }

    return '';
  };

  return idvalidator;
};

export default idValidation;
