import axios from 'axios';
import {
  VITE_APP_ACCU_WEATHER_API_KEY,
  VITE_APP_HOLIDAY_API_KEY,
  VITE_APP_NAVER_CLIENT_ID,
  VITE_APP_NAVER_CLIENT_SECRET,
  VITE_APP_OPEN_WEATHER_API_KEY,
  VITE_APP_STOCK_API_KEY,
} from '../configs';

type Name = {
  official: string;
  common: string;
};

type Countries = {
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: object;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: object;
  translations: {
    ara: Name;
    bre: Name;
    ces: Name;
    cym: Name;
    deu: Name;
    est: Name;
    fin: Name;
    fra: Name;
    hrv: Name;
    ita: Name;
    jpn: Name;
    kor: Name;
    nld: Name;
    per: Name;
    pol: Name;
    por: Name;
    slk: Name;
    spa: Name;
    srp: Name;
    swe: Name;
    tur: Name;
    urd: Name;
    zho: Name;
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: object;
  flag: string;
  maps: object;
  population: number;
  gini: object;
  fifa: string;
  car: object;
  timezones: string[];
  continents: string[];
  flags: object;
  coatOfArms: object;
  startOfWeek: object;
  capitalInfo: object;
  postalCode: object;
};

type CountriesResponseData = string[];

export const getCountries = async () => {
  try {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    return res.data
      .map((el: Countries) => {
        if (el.translations.kor.common === '한국') {
          return [el.name.common, el.idd.root + el.idd.suffixes, '대한민국'];
        }
        return [el.name.common, el.idd.root + el.idd.suffixes, el.translations.kor.common];
      })
      .filter((el: CountriesResponseData) => el[1])
      .sort((a: string[], b: string[]) => {
        if (a[2] < b[2]) return -1;
        if (a[2] > b[2]) return 1;
        return 0;
      });
  } catch (error) {
    console.log(`${error!}`);
  }
};

export const getLocationData = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  try {
    const params = {
      apikey: VITE_APP_ACCU_WEATHER_API_KEY,
      q: `${latitude},${longitude}`,
      language: 'ko-kr',
    };

    const res = await axios.get(
      'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
      { params },
    );

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

export const getForecasts = async ({ code }: { code: number }) => {
  try {
    const params = {
      apikey: VITE_APP_ACCU_WEATHER_API_KEY,
      language: 'ko-kr',
      details: true,
    };

    const res = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${code}`,
      { params },
    );

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

export const getCurrentWeahter = async ({ lat, lon }: { lat: number; lon: number }) => {
  try {
    const params = {
      appid: VITE_APP_OPEN_WEATHER_API_KEY,
      lat: lat,
      lon: lon,
      lang: 'kr',
      units: 'metric',
    };

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, { params });

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const fetchItems = async (query: string, display: number) => {
  const { data } = await axios.get('/v1/search/shop', {
    params: { query, display },
    headers: {
      'X-Naver-Client-Id': VITE_APP_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': VITE_APP_NAVER_CLIENT_SECRET,
    },
  });
  return data.items;
};

export const getShoppingData = async ({ category }: { category: number }) => {
  try {
    let items = [];

    if (category === 0) {
      const queries = ['여성', '화장', '봄'];
      const requests = queries.map((query) => fetchItems(query, 10));
      const results = await Promise.all(requests);
      items = results.flat();
    } else if (category === 1) {
      const queries = ['남성', '맨'];
      const requests = queries.map((query) => fetchItems(query, 20));
      const results = await Promise.all(requests);
      items = results.flat();
    } else if (category === 2) {
      items = await fetchItems('원쁠딜', 100);
    }

    return items.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.log(`${error}`);
  }
};

export const getStock = async () => {
  try {
    const params = {
      serviceKey: VITE_APP_STOCK_API_KEY,
      numOfRows: 30,
      resultType: 'json',
    };

    const res = await axios.get(
      'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo',
      { params },
    );

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

export const getHoliday = async () => {
  try {
    const params = {
      serviceKey: VITE_APP_HOLIDAY_API_KEY,
      _type: 'json',
      solYear: '2024',
      solMonth: '03',
    };

    const res1 = await axios.get(
      'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo',
      {
        params,
      },
    );

    const res2 = await axios.get(
      'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo',
      {
        params,
      },
    );

    const res3 = await axios.get(
      'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/get24DivisionsInfo',
      {
        params,
      },
    );
    return [
      res1.data.response.body.items.item,
      res2.data.response.body.items.item,
      res3.data.response.body.items.item,
    ].flat();
  } catch (error) {
    console.log(`${error}`);
  }
};
