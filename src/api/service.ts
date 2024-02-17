import axios from 'axios';

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
