import { css } from '../../../styled-system/css';
import classnames from 'classnames';
import { boldUnderline } from '../../styles/underline';

interface Props {
  categories: string[];
  currentCategory: number;
  onChangeCurrentCategory: (num: number) => void;
}

const Tabs = ({ categories, currentCategory, onChangeCurrentCategory }: Props) => {
  return (
    <div className={tabWrapper}>
      {categories.map((category: string, index: number) => {
        return (
          <>
            <div className={categoryBox}>
              <a
                href="#"
                className={classnames(
                  tabText,
                  boldUnderline,
                  css({ color: currentCategory === index ? '#080808' : '#08080880' }),
                )}
                onClick={() => onChangeCurrentCategory(index)}
              >
                {category}
              </a>
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
});

const lineDivider = css({
  width: '0.1rem',
  top: '0.4rem',
  left: '1.3rem',
  height: '1.5rem',
  backgroundColor: '#d3d5d7',
  transform: 'skewX(-15deg)',
  margin: '0 1.2rem',
});

const dotDivider = css({
  backgroundColor: '#d3d5d7',
  margin: '0 0.7rem',
  width: '0.4rem',
  height: '0.4rem',
  borderRadius: '0.4rem',
  marginBottom: '0.1rem',
});
