import { useState } from 'react';
import { css } from '../../../../styled-system/css';

const MemoWidget = () => {
  const [lock, setLock] = useState(true);
  const [hover, setHover] = useState(false);
  const [hoverLock, setHoverLock] = useState(false);
  const [inputs, setInputs] = useState([
    {
      value: '',
      isFavorite: false,
      date: '',
    },
    {
      value: '',
      isFavorite: false,
      date: '',
    },
    {
      value: '',
      isFavorite: false,
      date: '',
    },
  ]);
  const background = () => {
    if (lock) {
      if (hoverLock) {
        return 'white';
      }
      return '#ccf2e2';
    } else {
      if (hoverLock) {
        return '#00af64';
      }
      return '#009a58';
    }
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputs = [...inputs];

    newInputs[index] = {
      ...newInputs[index],
      value: e.target.value,
      date: new Date().toISOString().split('T')[0].slice(2).split('-').join('.'),
    };

    setInputs(newInputs);
  };

  const onClickFavorite = (index: number) => {
    const newInputs = [...inputs];

    newInputs[index] = {
      ...newInputs[index],
      isFavorite: !newInputs[index].isFavorite,
    };

    setInputs(newInputs);
  };

  return (
    <div className={memo}>
      <div className={topBox}>
        <a href="https://m.memo.naver.com/" className={title}>
          메모
        </a>
        <div className={memoBtn}>
          <button
            type="button"
            className={btnMemo}
            onClick={() => setLock(!lock)}
            onMouseOver={() => setHoverLock(true)}
            onMouseOut={() => setHoverLock(false)}
          >
            <i className={memoLock(lock, background())}></i>
          </button>
        </div>
      </div>
      <div className={memoInfo}>
        <ul className={infoList}>
          {lock ? (
            <>
              <li className={infoItem(lock, true)}></li>
              <li className={infoItem(lock, false)}>
                <div className={lockedmemo}>
                  <span className={lockText1}>잠금 상태입니다.</span>
                  <span className={lockText2}>버튼을 눌러 잠금을 해제할 수 있어요.</span>
                </div>
              </li>
              <li className={infoItem(lock, false)}></li>
            </>
          ) : (
            <>
              {inputs.map((input, index) => (
                <li key={index} className={infoItem(lock, true)}>
                  <a className={linkItem}>
                    <span className={itemText}>
                      <i
                        className={iconStar(input.isFavorite)}
                        onClick={() => onClickFavorite(index)}
                      ></i>
                      <input
                        value={input.value}
                        onChange={(e) => onChangeValue(e, index)}
                        placeholder="메모를 입력하세요."
                        className={inputStyle}
                      />
                    </span>
                    <span className={itemDate}>{input.date}</span>
                  </a>
                </li>
              ))}
            </>
          )}
        </ul>
        <a
          href="https://m.memo.naver.com/write"
          className={writeBtn(hover)}
          aria-label="새 메모 쓰기"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {hover && (
            <span className={writeText} aria-hidden={hover}>
              새 메모 쓰기
            </span>
          )}
        </a>
      </div>
    </div>
  );
};

export default MemoWidget;

const memo = css({
  color: '#101010',
  display: 'block',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
});

const topBox = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '4.8rem',
  padding: '0.7rem 0.9rem',
  borderRadius: '0.8rem 0.8rem 0 0',
  backgroundImage: 'linear-gradient(to top, #00b869, #00c772)',
  lineHeight: '3.4rem',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    right: 0,
    bottom: '0.2rem',
    left: 0,
    height: '0.1rem',
    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.5) 70%, transparent 30%)',
    backgroundSize: '0.6rem 0.1rem',
  },
});

const title = css({
  flexBasis: '50%',
  paddingLeft: '1rem',
  boxSizing: 'border-box',
  fontSize: '1.5rem',
  fontWeight: '800',
  color: 'white',
  textDecoration: 'none!important',
});

const memoBtn = css({
  flex: 'none',
  marginLeft: 'auto',
  display: 'block',
});

const btnMemo = css({
  width: '3.8rem',
  height: '3.4rem',
  verticalAlign: 'top',
});

const memoLock = (isLocked: boolean, backgroundColor: string) =>
  css({
    backgroundColor,
    width: '2.8rem',
    height: '2.8rem',
    position: 'relative',
    display: 'inline-block',
    borderRadius: '50%',
    verticalAlign: 'top',
    cursor: 'pointer',
    marginTop: '0.2rem',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
      backgroundSize: '44.4rem 43.4rem',
      backgroundPosition: !isLocked ? '-8.4rem -38.4rem' : '-6.3rem -38.4rem',
      backgroundRepeat: 'no-repeat',
      width: '2rem',
      height: '2rem',
      margin: 'auto',
    },
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: !isLocked ? '1px solid #00af64' : '1px solid #A3E8CB',
      borderRadius: 'inherit',
    },
  });

const memoInfo = css({
  position: 'relative',
});

const infoList = css({
  padding: '0 0 0.4rem',
  listStyle: 'none',
});

const infoItem = (isLocked: boolean, isFirstItem: boolean) =>
  css({
    height: '4.6rem',
    padding: isLocked ? '0 4.8rem' : '0 1.8rem',
    lineHeight: '4.6rem',
    display: 'list-item',
    borderTop: isFirstItem ? 'none' : '1px solid #ebebeb',
  });

const linkItem = css({
  display: 'flex',
  cursor: 'pointer',
  color: 'inherit',
  textDecoration: 'none!important',
  position: 'relative',
});

const itemText = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  width: '28.3rem',
});

const iconStar = (favorite: boolean) =>
  css({
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: favorite ? '-39.5rem -38.4rem' : '-37.8rem -38.4rem',
    backgroundRepeat: 'no-repeat',
    width: '1.6rem',
    height: '1.6rem',
    fontStyle: 'normal',
    display: 'inline-block',
    marginRight: '0.6rem',
  });

const itemDate = css({
  color: '#606060',
  flex: 'none',
  paddingLeft: '1rem',
  fontSize: '1.3rem',
  cursor: 'pointer',
  position: 'absolute',
  right: 0,
});

const lockedmemo = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '4.2rem',
  marginTop: '0.2rem',
  lineHeight: '2rem',
});

const lockText1 = css({
  fontWeight: 'bold',
});

const lockText2 = css({
  color: '#606060',
  lineHeight: '1.9rem',
  '&::before': {
    content: '""',
    display: 'inline-block',
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-41.6rem -35.9rem',
    backgroundRepeat: 'no-repeat',
    width: '1.2rem',
    height: '1.4rem',
    margin: '0.3rem 0.4rem 0 0',
    verticalAlign: 'top',
  },
});

const writeBtn = (isHovered: boolean) =>
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
    textDecoration: 'none',
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
      backgroundPosition: isHovered ? '-41.6rem -37.4rem' : '-32.5rem -35.9rem',
      backgroundRepeat: 'no-repeat',
      width: isHovered ? '1.2rem' : '2.4rem',
      height: isHovered ? '1.4rem' : '2.4rem',
      margin: isHovered ? '1.2rem 0 0 0.7rem' : 'auto',
    },
    '&:hover': {
      minWidth: '11.6rem',
      width: 'auto',
      height: '4rem',
      padding: '0 1.3rem 0 1.6rem',
      borderRadius: '2rem',
      borderColor: '#00C16E',
      backgroundColor: '#00C16E',
      boxSizing: 'border-box',
      textAlign: 'right',
      whiteSpace: 'nowrap',
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

const inputStyle = css({
  outline: 'none',
  width: '100%',
});
