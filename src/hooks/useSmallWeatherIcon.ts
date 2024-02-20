const useSmallWeatherIcon = () => {
  const getIcon = (weather: string, time: string) => {
    const hour = Number(time.split(':')[0]);
    const isNight = hour >= 20 || hour <= 5;
    console.log(weather, time);

    if (weather.includes('맑음') || weather === '화창') {
      return isNight ? '-3.5rem -52.2rem' : '0 -52.2rem';
    } else if (weather === '일부 화창') {
      return isNight ? '-10rem -52.2rem' : '-6.7rem -52.2rem';
    } else if (weather === '대체로 흐림') {
      return isNight ? '-16.6rem -52.2rem' : '-13.4rem -52.2rem';
    } else if (weather === '흐림') {
      return '-19.8rem -52.2rem';
    } else if (weather === '비') {
      return '-23rem -52.2rem';
    } else if (weather === '많은 비') {
      return '-26.4rem -52.2rem';
    } else if (weather === '소나기') {
      return '-29.7rem -52.2rem';
    } else {
      return 'N/A';
    }
  };

  return getIcon;
};

export default useSmallWeatherIcon;
