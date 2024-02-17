function isValidDate(birth: string) {
  if (birth.length !== 8) {
    return false;
  }

  const year = parseInt(birth.substring(0, 4), 10);
  const month = parseInt(birth.substring(4, 6), 10) - 1;
  const day = parseInt(birth.substring(6, 8), 10);

  const date = new Date(year, month, day);

  if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
    return false;
  }

  return true;
}

const birthValidation = () => {
  const idvalidator = (birth: string) => {
    if (!birth) {
      return '필수 정보입니다.';
    } else if (!/^\d{8}$/.test(birth)) {
      return '생년월일은 8자리 숫자로 입력해 주세요.';
    } else if (!isValidDate(birth)) {
      return '생년월일이 정확한지 확인해 주세요.';
    }

    return '';
  };

  return idvalidator;
};

export default birthValidation;
