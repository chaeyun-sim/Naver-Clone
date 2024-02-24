import { useEffect, useState } from 'react';
import { css } from '../../../styled-system/css';
import Section from '../base/Section';
import Tabs from '../base/Tabs';
import classNames from 'classnames';
import PageButton from '../base/PageButton';
import CategoryShopping from './CategoryShopping';
import CategoryMens from './CategoryMens';
import { useQuery } from 'react-query';
import CategoryOnePlusDeal from './CategoryOnePlusDeal';
import SubCategories from './SubCategories';
import CategoryShoppingLive from './CategoryShoppingLive';
import axios from 'axios';

export type ShopItem = {
  brand: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  hprice: string;
  image: string;
  link: string;
  lprice: string;
  maker: string;
  mallName: string;
  productId: string;
  productType: string;
  title: string;
};

const categoryList = [
  {
    name: '쇼핑아이템',
    totalPage: 5,
  },
  {
    name: '맨즈아이템',
    totalPage: 4,
  },
  {
    name: '원쁠딜',
    totalPage: 7,
  },
  {
    name: '쇼핑라이브',
    totalPage: 4,
  },
];

const fetchShoppingData = async (category: number) => {
  const { data } = await axios.get(`/api/shopping`, {
    params: { category },
  });
  return data;
};

const Shopping = () => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [shoppingData, setShoppingData] = useState<ShopItem[]>([]);

  const { refetch } = useQuery<ShopItem[]>(
    ['get-shoopping-list'],
    () => fetchShoppingData(currentCategory),
    {
      onSuccess: (data) => {
        if (data) {
          setShoppingData(data.sort(() => Math.random() - 0.5));
        }
      },
    },
  );

  useEffect(() => {
    refetch();
    setCurrentPage(1);
  }, [currentCategory]);

  const handlePressLeft = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      const prevSectionTotalPage = categoryList[currentCategory].totalPage;

      setCurrentPage(prevSectionTotalPage);
    }
  };

  const handlePressRight = () => {
    if (currentPage < categoryList[currentCategory].totalPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  return (
    <Section>
      <div className={container}>
        <div className={tabRow}>
          <Tabs
            categories={['쇼핑', '맨즈', '원쁠딜', '쇼핑라이브']}
            currentCategory={currentCategory}
            onChangeCurrentCategory={(num: number) => setCurrentCategory(num)}
          />
        </div>
        {[0, 1].includes(currentCategory) ? (
          <div className={todayPick}>
            <div className={todayPickContent}>
              <span className={todayPickTitle}>오늘의 혜택</span>
              <a className={todayPickMall}>
                <span className={mallImageBox}>
                  <img
                    src="https://s.pstatic.net/shopping.phinf/20230523_26/0e20d198-b64e-450e-ae90-bdc4603e2188.jpg"
                    className={mallImage}
                  />
                </span>
                <span className={todayPickDesc}>
                  디지털 라이프 BIG SALE~<em className={todayPickEmphasis}>최대 20만원쿠폰</em>
                  +스마일페이 카드사할인
                </span>
              </a>
            </div>
            <div className={pagination}>
              <div className={countContent}>
                <span>{currentPage}</span>
                <span className={total}>/{categoryList[currentCategory].totalPage}</span>
              </div>
              <button
                type="button"
                className={classNames(prevButton, todayPickButton)}
                onClick={handlePressLeft}
              >
                <i className={arrowIcon(true)} />
              </button>
              <button
                type="button"
                className={classNames(nextButton, todayPickButton)}
                onClick={handlePressRight}
              >
                <i className={arrowIcon(false)} />
              </button>
            </div>
          </div>
        ) : (
          <div className={categoriesBox}>
            <SubCategories
              category={currentCategory}
              currentPage={currentPage}
              onSetPage={(num) => setCurrentPage(num)}
            />
          </div>
        )}
        {currentCategory === 0 && <CategoryShopping page={currentPage} data={shoppingData} />}
        {currentCategory === 1 && <CategoryMens page={currentPage} data={shoppingData} />}
        {currentCategory === 2 && <CategoryOnePlusDeal page={currentPage} data={shoppingData} />}
        {currentCategory === 3 && <CategoryShoppingLive page={currentPage} />}
        <div className={contentPaging}>
          <PageButton
            categoryName={categoryList[currentCategory].name}
            currentPage={currentPage}
            totalPage={categoryList[currentCategory].totalPage}
            onPressLeft={handlePressLeft}
            onPressRight={handlePressRight}
          />
        </div>
      </div>
    </Section>
  );
};

export default Shopping;

const container = css({
  height: '100%',
  position: 'relative',
});

const tabRow = css({
  height: '5.8rem',
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const todayPick = css({
  display: 'flex',
  margin: '0 2rem',
});

const todayPickContent = css({
  backgroundColor: '#F5F7F8',
  display: 'flex',
  width: '66.8rem',
  padding: '1.5rem 2rem 1.4rem',
  borderRadius: '0.4rem',
  boxSizing: 'border-box',
  lineHeight: '2.1rem',
  fontWeight: '700',
  fontSize: '1.4rem',
});

const todayPickTitle = css({
  flex: 'none',
  position: 'relative',
  paddingRight: '1.9rem',
  fontWeight: '700',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '0.8rem',
    right: '0.8rem',
    width: '0.3rem',
    height: '0.3rem',
    backgroundColor: '#D3D5D7',
    borderRadius: '50%',
  },
});

const todayPickMall = css({
  flex: '1 1',
  display: 'flex',
  textDecoration: 'none',
  fontSize: '1.4rem',
  fontWeight: '600',
  cursor: 'pointer',
});

const mallImageBox = css({
  display: 'inline-block',
  height: '1.3rem',
  paddingTop: '0.4rem',
  lineHeight: '1.3rem',
  verticalAlign: 'top',
});

const mallImage = css({
  border: 0,
  height: '1.3rem',
  overflowClipMargin: 'content-box',
  overflow: 'clip',
});

const todayPickDesc = css({
  marginLeft: '0.8rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#404040',
  fontWeight: '600',
});

const todayPickEmphasis = css({
  color: '#9858f5',
  fontStyle: 'normal',
});

const pagination = css({
  marginLeft: 'auto',
  padding: '1rem 0',
  display: 'block',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
});

const countContent = css({
  color: '#606060',
  display: 'inline-block',
  margin: '0.6rem 0.9rem 0.8rem 0',
  fontSize: '1.3rem',
  lineHeight: '1.6rem',
  fontWeight: '600',
  verticalAlign: 'top',
});

const total = css({
  color: 'rgba(113,113,113,.6)',
});

const todayPickButton = css({
  width: '3rem',
  height: '3rem',
  position: 'relative',
  display: 'inline-block',
  border: '1px solid rgba(211,213,215,.8)',
  verticalAlign: 'top',
  cursor: 'pointer',
});

const prevButton = css({
  borderRadius: '0.4rem 0 0 0.4rem',
});

const nextButton = css({
  borderLeft: 0,
  borderRadius: '0 0.4rem 0.4rem 0',
});

const arrowIcon = (isLeft: boolean) =>
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    width: '1rem',
    height: '1.2rem',
    display: 'inline-block',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '0.7rem',
      height: '0.7rem',
      transform: 'translate(-50%,-50%) rotate(45deg)',
      borderLeft: isLeft ? '2px solid #80868c' : 'none',
      borderBottom: isLeft ? '2px solid #80868c' : 'none',
      borderTop: isLeft ? 'none' : '2px solid #80868c',
      borderRight: isLeft ? 'none' : '2px solid #80868c',
      marginLeft: '0.1rem',
    },
  });

const contentPaging = css({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  height: '5.7rem',
  borderTop: '1px solid #EBEBEB',
  paddingTop: '1rem',
  paddingBottom: '1.1rem',
  lineHeight: '3.4rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

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
