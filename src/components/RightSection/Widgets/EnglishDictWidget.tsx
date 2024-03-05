import { useState } from 'react';
import { css } from '../../../../styled-system/css';

const EnglishDictWidget = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverBody, setHoverBody] = useState<boolean>(false);

  return (
    <div className={box}>
      <div className={boxInfo}>
        <a className={infoText}>영어사전</a>
        <a
          className={infoToday}
          onMouseOver={() => setHoverBody(true)}
          onMouseOut={() => setHoverBody(false)}
        >
          {hoverBody ? (
            <div className={translate(hoverBody)}>네가 밥 줄거야?</div>
          ) : (
            <div className={todaysExpression}>
              <div className={expressionText}>Are you going to feed him?</div>
            </div>
          )}
        </a>
      </div>
      <a
        className={search(hover)}
        href="https://en.dict.naver.com/#/mini/main"
        aria-label="새 메모 쓰기"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {hover && (
          <span className={writeText} aria-hidden={hover}>
            단어 검색하기
          </span>
        )}
      </a>
    </div>
  );
};

export default EnglishDictWidget;

const box = css({
  pos: 'relative',
  height: '100%',
  display: 'block',
  position: 'relative',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: '0.4rem',
    bottom: 0,
    width: '1.4rem',
    borderRadius: '0 0.8rem 0.8rem 0',
    boxShadow: '0 0 0 1px #ebebeb,1px 0 2px 0 rgba(0,0,0,.04)',
  },
});

const boxInfo = css({
  backgroundColor: 'white',
  position: 'relative',
  height: '100%',
  marginRight: '0.8rem',
  borderRadius: '0.8rem',
  boxShadow: '0 0 0 1px #ebebeb,1px 0 2px 0 rgba(0,0,0,.04)',
});

const search = (isHovered: boolean) =>
  css({
    position: 'absolute',
    right: '1.4rem',
    bottom: '1.2rem',
    width: '3.8rem',
    height: '3.8rem',
    border: '1px solid #DADCDF',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.06)',
    textDecoration: 'none!important',
    '&::after': {
      content: '""',
      display: isHovered ? 'inline-block' : 'block',
      position: isHovered ? 'static' : 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
      backgroundSize: '44.4rem 43.4rem',
      backgroundPosition: isHovered ? '-4.2rem -38.4rem' : '-30rem -35.9rem',
      backgroundRepeat: 'no-repeat',
      width: isHovered ? '2rem' : '2.4rem',
      height: isHovered ? '2rem' : '2.4rem',
      margin: isHovered ? '0.9rem 0 0 0.3rem' : 'auto',
    },
    '&:hover': {
      minWidth: '11.6rem',
      width: 'auto',
      height: '4rem',
      padding: '0 1.3rem 0 1.6rem',
      borderRadius: '2rem',
      borderColor: '#031f5f',
      backgroundColor: '#031f5f',
      boxSizing: 'border-box',
      textAlign: 'right',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
    },
  });

const writeText = css({
  display: 'inline-block',
  fontSize: '1.4rem',
  lineHeight: '3.9rem',
  fontWeight: 'bold',
  verticalAlign: 'top',
  color: 'white',
  cursor: 'pointer',
});

const infoText = css({
  color: '#080808',
  display: 'block',
  padding: '1.6rem 1.8rem 1.9rem',
  fontSize: '1.5rem',
  lineHeight: '2rem',
  fontWeight: '800',
  textDecoration: 'none!important',
});

const infoToday = css({
  position: 'relative',
  display: 'block',
  height: '10.6rem',
  textDecoration: 'none!important',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '-0.3rem',
    right: 0,
    bottom: 0,
    left: 0,
    borderTop: '1px solid #E8EFFB',
    background: 'radial-gradient(circle at bottom, #e8effb 1px, transparent 0) top/1px 21px',
  },
});

const todaysExpression = css({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  margin: '0 1.8rem',
});

const expressionText = css({
  display: 'block',
  overflow: 'hidden',
  maxHeight: '10.5rem',
  lineHeight: '2.1rem',
  textOverflow: 'ellipsis',
  pos: 'relative',
  fontSize: '1.7rem',
  fontWeight: 'bold',
  wordWrap: 'break-word',
  letterSpacing: '-0.2px',
});

const translate = (isHovered: boolean) =>
  css({
    position: 'absolute',
    top: '-0.2rem',
    right: 0,
    left: 0,
    color: '#606060',
    display: isHovered ? 'block' : 'none',
    margin: '0 1.8rem',
    fontSize: '1.3rem',
    lineHeight: '2.1rem',
    fontWeight: '600',
  });
