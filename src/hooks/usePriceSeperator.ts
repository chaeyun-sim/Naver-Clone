const usePriceSeperator = () => {
  const handleSeperator = (price: number) => {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return handleSeperator;
};

export default usePriceSeperator;
