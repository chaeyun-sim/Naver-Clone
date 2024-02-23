const useAddHypen = () => {
  const convert = (phone: string) => {
    const firstPart = phone.slice(0, 3);
    let middlePart;
    let lastPart = phone.slice(-4);

    if (phone.length === 10) {
      middlePart = phone.slice(3, 6);
    } else if (phone.length === 11) {
      middlePart = phone.slice(3, 7);
    } else {
      return phone;
    }

    return `${firstPart}-${middlePart}-${lastPart}`;
  };

  return convert;
};

export default useAddHypen;
