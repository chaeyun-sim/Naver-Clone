import { useState } from 'react';
import { css } from '../../../styled-system/css';
import classNames from 'classnames';

const dummyData = [
  {
    date: '03.06',
    text: '맥북 14인치 파우치',
  },
  {
    date: '03.04',
    text: '잡곡밥',
  },
];

interface Props {
  onSetFocus: (value: boolean) => void;
}

const SearchBox = ({ onSetFocus }: Props) => {
  const [isAutoSaveOn, setisAutoSaveOn] = useState(true);

  const onDeleteClick = () => {
    let text = '';

    if (isAutoSaveOn) {
      text = '최근검색어 저장 기능을 사용 중지하시겠습니까?';
    } else {
      text = '최근검색어 저장 기능을 사용하시겠습니까?';
    }

    if (window.confirm(text)) {
      setisAutoSaveOn(!isAutoSaveOn);
    }
  };

  return (
    <div className={searchGroup}>
      <div className={searchBottomBox}>
        <div className={fixer}>
          {isAutoSaveOn ? (
            <>
              <div className={searchBoxHeader}>
                <strong className={currentSearch}>최근 검색어</strong>
                <div className={option}>
                  <a role="button" className={removeAll}>
                    전체삭제
                  </a>
                </div>
              </div>
              <div className={searchBoxContainer}>
                <ul className={recent}>
                  {dummyData.map((data) => (
                    <li key={data.text} className={item}>
                      <a className={kwd}>
                        <span className={fix}>
                          <i className={searchicon}></i>
                          <span className={kwdText}>{data.text}</span>
                        </span>
                      </a>
                      <span className={etc}>
                        <em className={date}>{data.date}</em>
                        <a className={deleteBtn}>
                          <i className={deleteicon}></i>
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className={noResult}>
              검색어 저장 기능이 꺼져 있습니다.
              <br />
              <span className={kwdDesc}>설정이 초기화 된다면 도움말을 확인해주세요.</span>
            </div>
          )}
          <div className={searchBoxFooter}>
            <div className={sideArea}>
              <span className={sideItem} onClick={onDeleteClick}>
                <a className={text}>자동저장 {isAutoSaveOn ? '끄기' : '켜기'}</a>
              </span>
              <span className={classNames(sideItem, dot)}>
                <a className={text}>도움말</a>
              </span>
            </div>
            <div className={rsideArea}>
              <span className={rsideItem} onClick={() => onSetFocus(false)}>
                <a className={text}>닫기</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

const searchGroup = css({
  display: 'block',
  position: 'absolute',
  top: '4.9rem',
  width: '70.8rem',
  transform: 'translateY(0.9rem)',
  zIndex: 1,
});

const searchBottomBox = css({
  backgroundColor: 'white',
  borderRadius: '0 0 1.6rem 1.6rem',
  boxShadow: '0 5px 2px 0 rgba(0,0,0,.05),0 5px 8px 0 rgba(0,0,0,.08)',
  letterSpacing: '-.3px',
  lineHeight: '1.8rem',
});

const fixer = css({
  display: 'block',
  position: 'relative',
  height: '100%',
  paddingBottom: '4.5rem',
  boxSizing: 'border-box',
  '&::before': {
    content: '""',
    position: 'absolute',
    height: '0.1rem',
    backgroundColor: '#F0F0F3',
    top: 0,
    right: 0,
    left: 0,
  },
});

const searchBoxHeader = css({
  padding: '1rem 2.8rem 0',
  marginBottom: '-1.3rem',
  fontSize: '1.4rem',
  position: 'relative',
  lineHeight: '4rem',
  color: '#555558',
  display: 'block',
});

const searchBoxContainer = css({
  paddingTop: '1.3rem',
});

const currentSearch = css({
  fontWeight: '400',
});

const option = css({
  position: 'absolute',
  right: '2.8rem',
  top: '1.1rem',
});

const removeAll = css({
  display: 'inline-block',
  color: '#939396',
  verticalAlign: 'top',
  cursor: 'pointer',
});

const recent = css({
  paddingBottom: '1.2rem',
  listStyle: 'none',
});

const item = css({
  padding: '0 9.2rem 0 2.8rem',
  position: 'relative',
  boxSizing: 'border-box',
  fontSize: '1.6rem',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(0,0,0,.05)',
  },
});

const kwd = css({
  fontWeight: '400',
  fontSize: '1.5rem',
  display: 'block',
  position: 'relative',
  padding: '0.75rem 0 0.75rem 0rem',
  color: '#000',
});

const fix = css({
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
});

const searchicon = css({
  width: '2.4rem',
  height: '2.4rem',
  verticalAlign: 'top',
  display: 'inline-block',
  overflow: 'hidden',
  color: 'transparent',
  whiteSpace: 'nowrap',
  background:
    'url(https://ssl.pstatic.net/sstatic/search/pc/img/sp_svg_autocomplete_940d5c7a.svg) 0 0 no-repeat',
  backgroundSize: '35rem 35rem',
  backgroundPosition: '-16.4rem -20.6rem',
});

const kwdText = css({
  display: 'block',
  overflow: 'hidden',
  maxHeight: '6.3rem',
  lineHeight: '2.1rem',
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  fontWeight: '500',
  fontSize: '1.55rem',
});

const etc = css({
  position: 'absolute',
  right: '1.7rem',
  top: '-0.1rem',
  bottom: 0,
  textAlign: 'right',
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
});

const date = css({
  fontSize: '1.4rem',
  position: 'absolute',
  top: '50%',
  right: '3.4rem',
  color: '#939396',
  letterSpacing: 0,
  transform: 'translate(-50%)',
  fontStyle: 'normal',
  marginTop: '-0.8rem',
});

const deleteBtn = css({
  display: 'block',
  position: 'relative',
  width: '3.2rem',
  height: '100%',
  cursor: 'pointer',
});

const deleteicon = css({
  display: 'inline-block',
  overflow: 'hidden',
  color: 'transparent',
  whiteSpace: 'nowrap',
  background:
    'url(https://ssl.pstatic.net/sstatic/search/pc/img/sp_svg_autocomplete_940d5c7a.svg) 0 0 no-repeat',
  backgroundSize: '35rem 35rem',
  fontStyle: 'normal',
  width: '1.2rem',
  height: '1.2rem',
  backgroundPosition: '-0.4rem -33.4rem',
  position: 'absolute',
  top: '50%',
  right: '1.1rem',
  marginTop: '-0.6rem',
});

const searchBoxFooter = css({
  fontSize: '1.4rem',
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  height: '4.4rem',
  borderTop: '1px solid #F0F0F3',
  borderRadius: '0 0 1.6rem 1.6rem',
  lineHeight: '4.4rem',
  textAlign: 'right',
  '&::after': {
    content: '""',
    display: 'block',
    clear: 'both',
  },
});

const sideArea = css({
  paddingLeft: '2.3rem',
  height: '100%',
  fontSize: '1.4rem',
  lineHeight: '4.4rem',
  textAlign: 'right',
});

const rsideArea = css({
  marginRight: '2.3rem',
  height: '100%',
  display: 'inline-block',
  verticalAlign: 'top',
  textAlign: 'right',
});

const sideItem = css({
  float: 'left',
  cursor: 'pointer',
});

const rsideItem = css({
  float: 'right',
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: '2.3rem',
  width: '3.4rem',
});

const dot = css({
  '&::before': {
    content: '""',
    display: 'inline-block',
    width: '0.3rem',
    height: '0.3rem',
    borderRadius: '50%',
    verticalAlign: '0.3rem',
    backgroundColor: '#D9D9DC',
  },
});

const text = css({
  display: 'inline-block',
  padding: '0 0.5rem',
  color: '#939396',
  verticalAlign: 'top',
});

const kwdDesc = css({
  fontSize: '1.37rem',
  color: '#939396',
  textAlign: 'center',
  letterSpacing: '-.3px',
  fontWeight: '500',
});

const noResult = css({
  padding: '5.7rem 0 5.6rem',
  display: 'block',
  fontSize: '1.47rem',
  fontWeight: '500',
  letterSpacing: '-0.3px',
  textAlign: 'center',
  lineHeight: '2.5rem',
});
