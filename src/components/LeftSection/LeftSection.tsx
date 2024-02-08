import { useState } from 'react';
import { css } from '../../../styled-system/css';
import Section from '../base/Section';
import Tabs from '../base/Tabs';
import NewsCategories from './NewsCategories';
import SubCategories from './SubCategories';

const LeftSection = () => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);

  return (
    <div className={container}>
      <Section height={'13rem'}>
        <img
          src="https://ssl.pstatic.net/melona/libs/1483/1483675/5a3c8bd1a3d66f17ea89_20240119163340926.png"
          className={banner}
        />
      </Section>
      <Section height={'42.6rem'} style={{ marginTop: '1.6rem' }}>
        <div className={tabRow}>
          <Tabs
            categories={['뉴스스탠드', '언론사편집', '엔터', '스포츠', '경제']}
            currentCategory={currentCategory}
            onChangeCurrentCategory={(num) => setCurrentCategory(num)}
          />
          <img
            src="https://s.pstatic.net/static/www/mobile/edit/20240110_1095/upload_17048514254674MZPF.png"
            className={newsTrend}
          />
        </div>
        <div className={categoriesBox}>
          {[0, 1].includes(currentCategory) ? (
            <NewsCategories currentCategory={currentCategory} />
          ) : (
            <SubCategories currentCategory={currentCategory} />
          )}
        </div>
      </Section>
    </div>
  );
};

export default LeftSection;

const categoriesBox = css({
  height: '5rem',
  margin: '0 2rem',
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F5F7F8',
  borderRadius: '0.4rem',
  fontSize: '1.5rem',
});

const container = css({
  width: '100%',
  height: '100%',
});

const banner = css({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const tabRow = css({
  width: '100%',
  height: '5.8rem',
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const newsTrend = css({
  width: '19.3rem',
  height: '1.9rem',
  cursor: 'pointer',
  marginRight: '0.85rem',
});
