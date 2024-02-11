import { useState } from 'react';
import Section from '../base/Section';
import Tabs from '../base/Tabs';
import NewsCategories from '../LeftSection/NewsCategories';
import SubCategories from '../LeftSection/SubCategories';
import Entertainment from '../LeftSection/News/Entertainment';
import Sports from '../LeftSection/News/Sports';
import Economy from '../LeftSection/News/Economy';
import PageButton from '../base/PageButton';
import { css } from '../../../styled-system/css';
import Media from '../LeftSection/News/Media';
import NewsStand from '../LeftSection/News/NewsStand';

const categoryList = [
  {
    name: '언론사',
    totalPage: 4,
  },
  {
    name: '다른 언론사 뉴스',
    totalPage: 4,
  },
  {
    name: '연예 소식',
    totalPage: 3,
  },
  {
    name: '스포츠 소식',
    totalPage: 3,
  },
  {
    name: '경제 소식',
    totalPage: 4,
  },
];

const News = () => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openAllNews, setOpenAllNews] = useState<boolean>(false);
  const [seeSubscribed, setSeeSubscribed] = useState<boolean>(false);

  const handlePressLeft = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      const prevSectionTotalPage =
        currentCategory === 0
          ? categoryList[categoryList.length - 1].totalPage
          : categoryList[currentCategory - 1].totalPage;

      if (currentCategory === 0) {
        setCurrentCategory(4);
      } else {
        setCurrentCategory(currentCategory - 1);
      }

      setCurrentPage(prevSectionTotalPage);
    }
  };

  const handlePressRight = () => {
    if (currentPage < categoryList[currentCategory].totalPage) {
      setCurrentPage(currentPage + 1);
    } else {
      if (currentCategory === 4) {
        setCurrentCategory(0);
      } else {
        setCurrentCategory(currentCategory + 1);
      }
      setCurrentPage(1);
    }
  };

  return (
    <Section style={{ position: 'relative' }}>
      <div className={tabRow}>
        <Tabs
          categories={['뉴스스탠드', '언론사편집', '엔터', '스포츠', '경제']}
          currentCategory={currentCategory}
          onChangeCurrentCategory={(num) => setCurrentCategory(num)}
        />
        <a href="https://sports.news.naver.com/kfootball/index">
          <img
            src="https://s.pstatic.net/static/www/mobile/edit/20240110_1095/upload_17048514254674MZPF.png"
            className={newsTrend}
          />
        </a>
      </div>
      <div className={categoriesBox}>
        {[0, 1].includes(currentCategory) && (
          <NewsCategories
            currentCategory={currentCategory}
            openAllNews={openAllNews}
            onClickSeeMore={() => setOpenAllNews(!openAllNews)}
            initializeOpen={() => setOpenAllNews(false)}
            seeSubscribed={seeSubscribed}
            onSeeSubscribed={() => {
              setSeeSubscribed(!seeSubscribed);
              setOpenAllNews(false);
            }}
          />
        )}
        {currentCategory === 2 && (
          <SubCategories
            currentCategory={currentCategory}
            categories={['네이버TV', '시리즈온', 'VIBE']}
          />
        )}
        {currentCategory === 3 && (
          <SubCategories
            currentCategory={currentCategory}
            categories={[
              '야구',
              '해외야구',
              '아시안컵・축구',
              '해외축구',
              '농구',
              '배구',
              'N골프',
              '일반',
              'e스포츠',
            ]}
          />
        )}
        {currentCategory === 4 && (
          <SubCategories
            currentCategory={currentCategory}
            categories={['국내증시', '해외증시', '시장지표', '관심종목']}
          />
        )}
      </div>
      <div className={content}>
        {currentCategory === 0 && <NewsStand page={currentPage} seeSubscribed={seeSubscribed} />}
        {currentCategory === 1 && <Media page={currentPage} />}
        {currentCategory === 2 && <Entertainment page={currentPage} />}
        {currentCategory === 3 && <Sports page={currentPage} />}
        {currentCategory === 4 && <Economy page={currentPage} />}
      </div>
      {!seeSubscribed && (
        <div className={bottom}>
          <PageButton
            categoryName={categoryList[currentCategory].name}
            currentPage={currentPage}
            totalPage={categoryList[currentCategory].totalPage}
            onPressLeft={handlePressLeft}
            onPressRight={handlePressRight}
          />
        </div>
      )}
    </Section>
  );
};

export default News;

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

const tabRow = css({
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

const content = css({
  height: '22.4rem',
  margin: '1.8rem 2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
});

const bottom = css({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  height: '5.7rem',
  paddingTop: '1rem',
  paddingBottom: '1.1rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopWidth: '0.1rem',
  borderTopColor: '#EBEBEB',
});
