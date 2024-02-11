interface ServiceStyle {
  [key: string]: {
    width: string;
    height: string;
    background: string;
    backgroundSize: string;
    backgroundPosition: string;
    backgroundRepeat?: string;
    zoom?: number;
    transform?: string;
    marginBottom?: string;
    marginLeft?: string;
  };
}

export const services: ServiceStyle = {
  메일: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundPosition: '-250px -90px',
    backgroundRepeat: 'no-repeat',
  },
  카페: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundPosition: '-250px 0px',
    backgroundRepeat: 'no-repeat',
  },
  블로그: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundPosition: '-201px -98px',
    backgroundRepeat: 'no-repeat',
  },
  쇼핑: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-90px -209px',
  },
  뉴스: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0px -209px',
  },
  증권: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-180px -209px',
  },
  부동산: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-45px -209px',
  },
  지도: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-201px 0px',
  },
  웹툰: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-225px -209px',
  },
  치지직: {
    width: '4.4rem',
    height: '4.4rem',
    background:
      'url(https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '',
  },
  없음: {
    width: '4.4rem',
    height: '4.4rem',
    background: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '444px 434px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-520px -295px',
  },
};
