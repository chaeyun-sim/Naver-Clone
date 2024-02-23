import { css } from '../../../styled-system/css';
import Items from './Items';
import MallNameGroup from './MallNameGroup';
import NaverShopping from './NaverShopping';
import { ShopItem } from './Shopping';

interface Props {
  page: number;
  data: ShopItem[];
}

const CategoryMens = ({ page, data }: Props) => {
  return (
    <div className={commerceArea}>
      <Items page={page} data={data} />
      <div className={rightSection}>
        <MallNameGroup />
        <NaverShopping />
        <div className={adBox}>
          <a
            href="https://item.gmarket.co.kr/Item?goodscode=3419482196&jaehuid=200014609&NaPm=ct%3Dlsuhuh34%7Cci%3D0e1132c32444c2421ec55c18584479ae861e9d99%7Ctr%3Dsbsf%7Csn%3D24%7Cic%3D%7Chk%3Dbf854dc033ed11745cc54b525291f07cea303fde"
            className={adBoxImage}
          >
            <span className={adContentImage}>
              <img
                src="https://s.pstatic.net/shopping.phinf/20240216_1/6438bcdf-2a3f-4689-a431-4326814eaefd.jpg"
                style={{ width: '100%', height: '100%' }}
              />
            </span>
            <div className={adText}>갤럭시Z플립~BIG SALE특가+12%쿠폰</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryMens;

const commerceArea = css({
  display: 'flex',
  height: '39.4rem',
  padding: '1.8rem 2rem 0.1rem',
  boxSizing: 'border-box',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
  fontWeight: '500',
});

const adBox = css({
  height: '17.3rem',
});

const adBoxImage = css({
  display: 'block',
  marginTop: '1.2rem',
  textDecoration: 'none',
});

const adContentImage = css({
  width: '24.8rem',
  height: '14.6rem',
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
  border: '0.1rem solid rgba(0,0,0,0.05)',
  borderRadius: '0.4rem',
});

const adText = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: '0.8rem',
  fontSize: '1.3rem',
  lineHeight: '1.9rem',
  textAlign: 'center',
});

const rightSection = css({
  flex: '1 1',
  minWidth: 0,
  display: 'block',
});
