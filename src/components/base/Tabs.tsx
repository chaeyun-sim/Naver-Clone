import { useState } from 'react';
import { css } from '../../../styled-system/css';
import classnames from 'classnames';

interface Props {
  categories: string[];
}

const Tabs = ({ categories }: Props) => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);

  return (
    <div className={tabWrapper}>
      {categories.map((category, index) => {
        return (
          <>
            <div className={categoryBox}>
              <a
                href="#"
                className={classnames(
                  tabText,
                  css({ color: currentCategory === index ? '#080808' : '#08080880' }),
                )}
                onClick={() => setCurrentCategory(index)}
              >
                {category}
              </a>
              {category === '스포츠' && (
                <div className={live}>
                  <div className={liveIcon} />
                  <span className={liveText}>LIVE</span>
                </div>
              )}
            </div>
            {categories[0] === '뉴스스탠드' && index === 0 && <div className={dotDivider} />}
            {category !== '뉴스스탠드' && index < categories.length - 1 && (
              <div className={lineDivider} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Tabs;

const tabWrapper = css({
  letterSpacing: '-0.04rem',
  display: 'flex',
  alignItems: 'center',
});

const categoryBox = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const tabText = css({
  fontFamily: 'var(--font-nanumsquare-extra)',
  fontSize: '1.6rem',
  letterSpacing: '-0.04rem',

  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.25rem',
  },
});

const lineDivider = css({
  width: '0.1rem',
  top: '0.4rem',
  left: '1.3rem',
  height: '1.5rem',
  backgroundColor: '#d3d5d7',
  transform: 'skewX(-15deg)',
  margin: '0 1.1rem',
});

const dotDivider = css({
  backgroundColor: '#d3d5d7',
  margin: '0 1.1rem',
  width: '0.4rem',
  height: '0.4rem',
  borderRadius: '0.4rem',
});

const live = css({
  width: '4.27rem',
  height: '1.8rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f4361e',
  paddingTop: '0.5rem',
  paddingBottom: '0.4rem',
  borderRadius: '0.9rem',
  marginLeft: '0.5rem',
});

const liveIcon = css({
  width: '3rem',
  height: '2rem',
  color: '#fff',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) -23.6rem -23.5rem`,
  backgroundPosition: '20px 20px',
  zoom: '0.4',
  marginLeft: '0.9rem',
});

const liveText = css({
  fontFamily: 'var(--font-nanumsquare-extra)',
  fontSize: '1.1rem',
  color: '#fff',
  textDecoration: 'none',
});
