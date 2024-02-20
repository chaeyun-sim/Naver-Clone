import { useEffect, useState } from 'react';
import useGeolocation from '../../../hooks/useGeoLocation';
import { useQuery } from 'react-query';
import { getCurrentWeahter, getForecasts, getLocationData } from '../../../api/service';
import Section from '../../base/Section';
import { css } from '../../../../styled-system/css';
import classNames from 'classnames';
import { WeatherData } from '../../../types/Weather';
import TemperatureGraph from './Canvas';
import useLargeWeatherIcon from '../../../hooks/useLargeWeatherIcon';
import useSmallWeatherIcon from '../../../hooks/useSmallWeatherIcon';

const Weather = () => {
  const useLocation = useGeolocation();
  const getLargeIcons = useLargeWeatherIcon();
  const getSmallIcons = useSmallWeatherIcon();
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });
  const [currentCode, setCurrentCode] = useState<number>(0);
  const [locationName, setLocationName] = useState<string>('진주시 평거동');
  const [currentWeather, setCurrentWeahter] = useState({
    temperature: 0,
    description: '',
    time: '',
  });
  const [forecasts, setForecasts] = useState<(string | number)[][]>([]);

  useQuery(
    ['get-geolocation'],
    () => getLocationData({ latitude: location.lat, longitude: location.lon }),
    {
      onSuccess: (data) => {
        if (data) {
          setCurrentCode(data.Key);
          setLocationName(data.name);
        }
      },
    },
  );

  useQuery<WeatherData[]>(['get-forcasts'], () => getForecasts({ code: currentCode }), {
    enabled: !!currentCode,
    onSuccess: (data) => {
      if (data) {
        const newData = data
          .filter((_, i) => i % 2 === 0)
          .slice(0, 5)
          .map((el) => [
            el.DateTime.split('T')[1].split('+')[0],
            el.IconPhrase,
            Math.floor(((el.Temperature.Value - 32) * 5) / 9),
          ]);
        setForecasts(newData);
      }
    },
  });

  const { refetch } = useQuery(
    ['get-current-weather'],
    () => getCurrentWeahter({ lat: location.lat, lon: location.lon }),
    {
      onSuccess: (data) => {
        const curr = new Date();

        const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);

        setCurrentWeahter({
          temperature: Number(data.main.temp.toFixed(1)),
          description: data.weather[0].description,
          time: kr_curr.toISOString().split('T')[1],
        });
      },
    },
  );

  useEffect(() => {
    if (currentWeather) {
      refetch();
    }
  }, []);

  useEffect(() => {
    if (useLocation.loaded) {
      const coordinates = JSON.stringify(useLocation.coordinates);
      const locations = JSON.parse(coordinates);
      setLocation({ lat: locations.lat, lon: locations.lng });
    }
  }, [useLocation]);

  const transformedData = forecasts.map((el) => Number(el[2]));

  return (
    <Section style={{ marginTop: '1.6rem', height: '23.6rem' }}>
      <div className={container}>
        <div className={header}>
          <a href="https://weather.naver.com/" className={title}>
            날씨
          </a>
          <span className={compareButton}>
            <span style={{ marginTop: '-1rem' }}>예보 비교</span>
          </span>
          <span className={locationStyle}>{locationName}</span>
        </div>
        <div className={content}>
          <div className={now}>
            <div className={weatherDetail}>
              <div className={weatherInfo}>
                <div
                  className={classNames(
                    weatherWithicon,
                    weatherIcon(getLargeIcons(currentWeather.description, currentWeather.time)),
                  )}
                />
                <div className={current}>
                  {currentWeather.temperature + '°'}
                  <div className={weeatherDesc}>{currentWeather.description}</div>
                </div>
              </div>
              <div className={minMaxBox}>
                <span className={min}>11°</span>
                <span className={max}>20°</span>
              </div>
            </div>
            <a className={dustBox}>
              <span>
                미세 <span className={condition}>좋음</span>
              </span>
              <span className={ultraDust}>
                초미세 <span className={condition}>좋음</span>
              </span>
            </a>
          </div>
          <div className={forecast}>
            <a href="https://weather.naver.com/today/03170126?cpName=KMA" className={forecastBox}>
              <TemperatureGraph data={transformedData} />
              <ul className={weatherList}>
                {forecasts.map((el, index) => {
                  const hour = String(el[0]).split(':')[0];
                  const iconValue = getSmallIcons(String(el[1]), String(el[0]));

                  return (
                    <li key={el[0]} className={weatherItem}>
                      {index === 0 ? (
                        <strong>
                          <div className={time(index)}>{Number(hour)}시</div>
                        </strong>
                      ) : (
                        <div className={time(index)}>{Number(hour)}</div>
                      )}
                      <div className={icon(iconValue!)} />
                      <div className={celsius}>{el[2]}°</div>
                    </li>
                  );
                })}
              </ul>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Weather;

const container = css({
  height: '23.6rem',
  padding: '0 1.8rem',
  display: 'block',
});

const header = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '0.6rem 0',
  lineHeight: '4rem',
  fontSize: '1.3rem',
  fontWeight: '500',
  letterSpacing: '-0.4px',
});

const title = css({
  color: '#080808',
  display: 'inline-block',
  paddingRight: '0.7rem',
  fontSize: '1.5rem',
  fontWeight: '800',
  textDecoration: 'none',
});

const compareButton = css({
  border: '1px solid #EBEBEB',
  backgroundColor: 'white',
  color: '#606060',
  display: 'inline-block',
  minWidth: '7.5rem',
  height: '2.6rem',
  padding: '0 1rem 0 0.7rem',
  borderRadius: '1.5rem',
  fontSize: '1.15rem',
  lineHeight: '2.5rem',
  textDecoration: 'none',
  textAlign: 'center',
  verticalAlign: 'top',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#F8F8F8',
    color: '#101010',
  },
  '&::before': {
    content: '""',
    display: 'inline-block',
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-43.2rem -11.7rem',
    backgroundRepeat: 'no-repeat',
    width: '1.2rem',
    height: '1.2rem',
    marginBottom: '-0.15rem',
    marginRight: '0.2rem',
  },
});

const locationStyle = css({
  color: '#606060',
  flex: 'none',
  marginLeft: 'auto',
  fontSize: '1.3rem',
  fontWeight: '600',
});

const content = css({
  borderTop: '1px solid #EBEBEB',
  height: '18.4rem',
  position: 'relative',
  display: 'flex',
});

const now = css({
  position: 'relative',
  flex: 1,
  width: '18rem',
  margin: '2rem 0 1.8rem',
  display: 'block',
});

const forecast = css({
  width: '18rem',
  marginLeft: '2.4rem',
  position: 'relative',
  flex: 1,
  margin: '2rem 0 1.8rem',
});

const forecastBox = css({
  position: 'relative',
  display: 'block',
});

const weatherDetail = css({
  display: 'block',
  textDecoration: 'none',
  cursor: 'pointer',
});

const weatherInfo = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0.1rem',
});

const weatherWithicon = css({
  width: '8.6rem',
  height: '8.6rem',
  marginRight: '0.4rem',
  display: 'block',
  cursor: 'pointer',
});

const current = css({
  fontSize: '3.9rem',
  lineHeight: '4.8rem',
  letterSpacing: '-2px',
  display: 'block',
});

const weeatherDesc = css({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  paddingLeft: '0.5rem',
  fontSize: '1.4rem',
  lineHeight: '2rem',
  fontWeight: 'bold',
  letterSpacing: '-0.3px',
  color: '#101010',
});

const minMaxBox = css({
  marginTop: '1.6rem',
  lineHeight: '1.6rem',
  textAlign: 'center',
  display: 'block',
});

const min = css({
  color: '#3172E7',
});

const max = css({
  color: '#CD3534',
  '&::before': {
    content: '""',
    display: 'inline-block',
    width: '0.1rem',
    height: '1.1rem',
    backgroundColor: '#D3D5D7',
    margin: '0 0.5rem 0 0.3rem',
    transform: 'skewX(-15deg)',
    verticalAlign: '-0.1rem',
  },
});

const dustBox = css({
  display: 'block',
  marginTop: '0.6rem',
  lineHeight: '2rem',
  textAlign: 'center',
  fontSize: '1.3rem',
  cursor: 'pointer',
});

const condition = css({
  color: '#32A1FF',
  paddingLeft: '0.4rem',
});

const ultraDust = css({
  lineHeight: '2rem',
  textAlign: 'center',
  '&::before': {
    content: '""',
    display: 'inline-block',
    width: '0.3rem',
    height: '0.3rem',
    backgroundColor: '#D3D5D7',
    margin: '0.8rem 0.6rem 0',
    borderRadius: '50%',
    verticalAlign: 'top',
  },
});

const weatherList = css({
  display: 'flex',
  justifyContent: 'space-between',
  height: '14.3rem',
  listStyle: 'none',
});

const weatherItem = css({
  position: 'relative',
  width: '3.2rem',
  textAlign: 'center',
});

const time = (index: number) =>
  css({
    color: index === 0 ? '#101010' : '#606060',
    fontWeight: index === 0 ? 'bold' : '600',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    fontSize: '1.3rem',
    lineHeight: '1.6rem',
    whiteSpace: 'nowrap',
  });

const icon = (position: string) =>
  css({
    position: 'absolute',
    right: 0,
    bottom: '2rem',
    left: 0,
    width: '3.2rem',
    height: '3.2rem',
    display: 'block',
    '&::before': {
      content: '""',
      display: 'block',
      backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_weather.11654bc0.png)',
      backgroundSize: '64.1rem 58.7rem',
      backgroundPosition: position,
      backgroundRepeat: 'no-repeat',
      width: '3.2rem',
      height: '3.2rem',
    },
  });

const celsius = css({
  marginTop: 0,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: '6rem',
  left: 0,
  fontSize: '1.4rem',
  lineHeight: '1.6rem',
  // '&::before': {
  //   content: '""',
  //   display: 'block',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: '1.5rem',
  //   backgroundColor: '#EBEBEB',
  //   width: '0.1rem',
  //   height: lineHeight,
  // },
});

// icon

const weatherIcon = (icon: string) =>
  css({
    '&::before': {
      content: '""',
      display: 'block',
      backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_weather.11654bc0.png)',
      backgroundSize: '64.1rem 58.7rem',
      backgroundPosition: icon,
      backgroundRepeat: 'no-repeat',
      width: '8.6rem',
      height: '8.6rem',
    },
  });
