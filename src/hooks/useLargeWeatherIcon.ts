const useLargeWeatherIcon = () => {
  const getWeatherIcon = (weather: string, time: string) => {
    const hour = Number(time.split(':')[0]);
    const isNight = hour >= 20 || hour <= 5;

    if (weather.includes('흐림')) {
      return '-0.1rem -17.4rem';
    } else if (weather.includes('맑음')) {
      return isNight ? '-9rem 0' : '0 0';
    } else if (weather.includes('구름 많음') || weather.includes('튼구름')) {
      return isNight ? '-17.6rem -8.7rem' : '-17.7rem -0rem';
    } else if (weather.includes('구름 조금') || weather.includes('약간 구름')) {
      return isNight ? '-8.9rem -9rem' : '-0.4rem -9rem';
    } else if (weather.includes('소나기')) {
      return isNight ? '-52.8rem -43.5rem' : '-17.4rem -25.9rem';
    } else if (weather.includes('흐리고 한때 비')) {
      return isNight ? '-0.4rem -43.5rem' : '-9.3rem -34.4rem';
    } else if (weather.includes('적은 비') || weather === '실 비') {
      return '-8.9rem -17rem';
    } else if (weather.includes('뇌우') || weather.includes('번개')) {
      return '-34.8rem -8.7rem';
    } else if (weather.includes('우박')) {
      return '-34.9rem -17rem';
    } else if (weather.includes('눈')) {
      return '-17.7/rem -34.4rem';
    } else {
      return '-0.1rem -17.4rem';
    }
  };

  return getWeatherIcon;
};

export default useLargeWeatherIcon;
