interface ServiceStyle {
  [key: string]: {
    width: string;
    height: string;
    background: string;
    zoom?: number;
    transform?: string;
    marginBottom?: string;
    marginLeft?: string;
  };
}

export const services: ServiceStyle = {
  메일: {
    width: '6.7rem',
    height: '7rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -508px -191px',
  },
  카페: {
    width: '6.5rem',
    height: '7rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -511px -11px',
  },
  블로그: {
    width: '7.4rem',
    height: '6.5rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -409px -211px',
  },
  쇼핑: {
    width: '6.8rem',
    height: '6.8rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -188px -431px',
  },
  뉴스: {
    width: '6.8rem',
    height: '6.2rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -8px -434px',
  },
  증권: {
    width: '7.1rem',
    height: '5.9rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -367px -436px',
    zoom: 1,
  },
  부동산: {
    width: '6.8rem',
    height: '7.5rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -99px -428px',
  },
  지도: {
    width: '9.3rem',
    height: '8rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -413px -11px',
    marginLeft: '1.9rem',
  },
  웹툰: {
    width: '6.8rem',
    height: '6.8rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -458px -431px',
  },
  치지직: {
    width: '8.5rem',
    height: '9.5rem',
    background:
      'url(https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png)',
    // zoom: 0.9,
  },
  없음: {
    width: '3.7rem',
    height: '3.4rem',
    background:
      'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png) no-repeat -641px -156px',
    transform: 'rotate(90deg)',
    zoom: 1.2,
  },
};
