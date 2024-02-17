const nameValidation = () => {
  const validator = (name: string) => {
    if (!name) {
      return '필수 정보입니다.';
    }

    return '';
  };

  return validator;
};

export default nameValidation;
