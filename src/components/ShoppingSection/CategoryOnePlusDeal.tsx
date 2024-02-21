import { useEffect, useState } from 'react';
import { css } from '../../../styled-system/css';
import OnePlusDealCard from './OnePlusDealCard';
import { ShopItem } from './Shopping';
import OnePlusDealHorizontalCard from './OnePlusDealHorizontalCard';
import { toBeOpenedList } from './data';
import ToBeOpenedCard from './ToBeOpenedCard';

interface Filters {
  [key: number]: (el?: ShopItem) => boolean | ShopItem[];
}

interface Props {
  page: number;
  data: ShopItem[];
}

const CategoryOnePlusDeal = ({ page, data }: Props) => {
  const [dataSet, setDataSet] = useState<ShopItem[]>([]);

  const filters: Filters = {
    1: () => data,
    2: (el) => el?.category1 === '식품',
    3: (el) => ['출산/육아', '생활/건강'].includes(el?.category1 as string),
    4: (el) => el?.category1 === '가구/인테리어',
    5: (el) => el?.category1 === '디지털/가전',
    6: (el) => ['패션의류', '화장품/미용'].includes(el?.category1 as string),
    7: (el) => ['10', '11', '12'].includes(el?.productType as string),
  };

  useEffect(() => {
    const filterFunction = filters[page] || (() => data);
    if (page === 1) {
      setDataSet(filterFunction() as ShopItem[]);
    } else {
      setDataSet(data.filter(filterFunction as (el: ShopItem) => boolean));
    }
  }, [page, data]);

  const removeString = (str: string) => {
    let result = str.split('<b>').join(' ');
    result = result.split('</b>').join(' ');
    return result;
  };

  return (
    <>
      {page < 7 ? (
        <div className={commerceArea}>
          <div className={threeColumn}>
            <ul className={threeColumnList}>
              {dataSet.slice(0, 6).map((item, index) => (
                <li key={item.title} className={threeColumnItem(index < 3)}>
                  <OnePlusDealCard
                    title={removeString(item.title)}
                    price={item.lprice}
                    url={item.link}
                    image={item.image}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={sidearea}>
            <div className={sideTitle}>
              <em>만원쁠딜</em>
              배송비 포함가격 맞아요
            </div>
            <ul className={sideList}>
              {dataSet
                .filter((el) => Number(el.lprice) < 10000)
                .slice(0, 3)
                .map((item) => (
                  <li key={item.title} className={sideItem}>
                    <OnePlusDealHorizontalCard
                      price={Number(item.lprice)}
                      title={removeString(item.title)}
                      image={item.image}
                      url={item.link}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={commerceArea}>
          <div className={twoColumn}>
            <ul className={twoColumnList}>
              {toBeOpenedList.map((item, index) => (
                <li key={item.name} className={twoColumnItem(index < 2)}>
                  <ToBeOpenedCard {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryOnePlusDeal;

const commerceArea = css({
  display: 'flex',
  height: '39.4rem',
  padding: '1.8rem 2rem 0.1rem 0',
  boxSizing: 'border-box',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
  fontWeight: '500',
});

const threeColumn = css({
  marginRight: '2rem',
  width: '54rem',
});

const sidearea = css({
  position: 'relative',
  flex: '1 1',
  paddingLeft: '2.1rem',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    bottom: '2rem',
    left: 0,
    backgroundColor: '#EBEBEB',
    width: '0.1rem',
  },
});

const threeColumnList = css({
  width: '100%',
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
});

const threeColumnItem = (isFirstLine?: boolean) =>
  css({
    paddingLeft: 0,
    float: 'left',
    height: '16.5rem',
    marginBottom: isFirstLine ? '2.7rem' : 0,
  });

const sideTitle = css({
  color: '#606060',
  marginBottom: '1.2rem',
  padding: '1rem 1.2rem',
  borderRadius: '0.4rem',
  backgroundColor: '#FFF3F0',
  fontSize: '1.4rem',
  lineHeight: '2rem',
  whiteSpace: 'nowrap',
  '& em': {
    color: '#101010',
    marginRight: '0.8rem',
    fontWeight: '700',
  },
});

const sideList = css({
  listStyle: 'none',
});

const sideItem = css({
  marginBottom: '1.2rem',
});

const twoColumn = css({
  position: 'relative',
  flex: '1 1',
  display: 'block',
});

const twoColumnList = css({
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  paddingLeft: '2rem',
});

const twoColumnItem = (isFirstLine?: boolean) =>
  css({
    marginTop: isFirstLine ? 0 : '1.2rem',
    display: 'flex',
    alignItems: 'center',
  });
