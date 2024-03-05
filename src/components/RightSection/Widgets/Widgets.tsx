import React from 'react';
import classNames from 'classnames';
import { css } from '../../../../styled-system/css';
import CalendarWidget from './CalendarWidget';
import MemoWidget from './MemoWidget';
import PapagoWidget from './PapagoWidget';
import EnglishDictWidget from './EnglishDictWidget';
import VibeWidget from './VibeWidget';

const Widgets = () => {
  return (
    <div className={container}>
      <div className={title}>위젯 보드</div>
      <div className={content}>
        <div className={classNames(group(true), wide)}>
          <CalendarWidget />
        </div>
        <div className={classNames(group(true), wide)}>
          <MemoWidget />
        </div>
        <div className={group(false)}>
          <PapagoWidget />
        </div>
        <div className={group(false, true)}>
          <EnglishDictWidget />
        </div>
        <div className={classNames(group(true), wide, vibe)}>
          <VibeWidget />
        </div>
      </div>
      <a className={linkMore} href="https://m.naver.com/">
        <span className={moreText}>
          <strong>모바일 네이버 메인 </strong>
          열기
        </span>
      </a>
    </div>
  );
};

export default Widgets;

const container = css({
  backgroundColor: '#F4F6FA',
  marginBottom: '1.6rem',
  padding: '1.5rem 1.8rem 2rem',
  boxShadow: '0 0 0 1px #e3e5e8,0 1px 2px 0 rgba(0,0,0,.04)',
  borderRadius: '0.8rem',
  height: '101rem',
});

const title = css({
  color: '#080808',
  position: 'relative',
  paddingBottom: '0.1rem',
  fontSize: '1.5rem',
  lineHeight: '2.4rem',
  fontWeight: '800',
});

const content = css({
  display: 'block',
  height: '90.2rem',
  '&::after': {
    content: '""',
    display: 'table',
    tableLayout: 'fixed',
    clear: 'both',
  },
});

const group = (isWide: boolean, isRight?: boolean) =>
  css({
    backgroundColor: 'white',
    float: 'left',
    width: isWide ? '100%' : '18.6rem',
    marginTop: isWide ? 0 : '1.2rem',
    height: '19.2rem',
    boxShadow: '0 0 0 1px #ebebeb,0 1px 2px 0 rgba(0,0,0,.04)',
    borderRadius: '0.8rem',
    marginLeft: isRight ? '1.2rem' : 0,
  });

const wide = css({
  width: '100%',
  margin: '1.2rem 0 0 0',
});

const vibe = css({
  height: '27.8rem',
});

const linkMore = css({
  position: 'relative',
  display: 'block',
  marginBottom: '-1.5rem',
  padding: '2.1rem 0 1.7rem',
  lineHeight: '2.5rem',
  cursor: 'pointer',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '2.8rem',
    right: '0.4rem',
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-32.3rem -29.9rem',
    backgroundRepeat: 'no-repeat',
    width: '0.8rem',
    height: '1.2rem',
  },
});

const moreText = css({
  display: 'inline-block',
  verticalAlign: 'top',
  lineHeight: '2.5rem',
  fontSize: '1.4rem',
  '&::before': {
    content: '""',
    display: 'inline-block',
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-39.1rem -7.3rem',
    backgroundRepeat: 'no-repeat',
    width: '2.2rem',
    height: '2.2rem',
    margin: '0.2rem 1.1rem 0 0.3rem',
    verticalAlign: 'top',
  },
});
