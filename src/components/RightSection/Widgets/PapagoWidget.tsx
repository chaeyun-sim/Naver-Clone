import { useState } from 'react';
import { css } from '../../../../styled-system/css';

const PapagoWidget = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <a className={conatiner} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <div className={papagoBox}>
        <i className={papagoLogo}></i>
        <div className={text(hover)}>번역하기</div>
      </div>
    </a>
  );
};

export default PapagoWidget;

const conatiner = css({
  position: 'relative',
  textDecoration: 'none!important',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '5.4rem',
    left: '5.4rem',
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat',
    width: '7.8rem',
    height: '6.8rem',
  },
});

const papagoBox = css({
  display: 'flex',
  height: '100%',
  boxSizing: 'border-box',
  padding: '1.8rem 1.8rem 1.2rem 1.8rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const papagoLogo = css({
  backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
  backgroundSize: '44.4rem 43.4rem',
  backgroundPosition: '-5.6rem -25.4rem',
  backgroundRepeat: 'no-repeat',
  width: '7.6rem',
  height: '1.7rem',
});

const text = (isHovered: boolean) =>
  css({
    position: 'relative',
    margin: '0 1.3rem',
    borderRadius: '2rem',
    backgroundColor: isHovered ? '#1280e2' : '#00A2FF',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.04)',
    fontSize: '1.4rem',
    lineHeight: '4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '1px solid rgba(0,0,0,.02)',
      borderRadius: '2rem',
    },
  });
