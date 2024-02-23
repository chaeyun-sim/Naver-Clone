import classNames from 'classnames';
import { css } from '../../../styled-system/css';

const data = [
  {
    name: '쇼핑홈',
    position: '-3.4rem 0',
    url: 'https://shopping.naver.com/home',
  },
  {
    name: '리뷰적립',
    position: '-6.8rem -3.4rem',
    url: 'https://shopping.naver.com/my/writable-reviews',
  },
  {
    name: '주문',
    position: '-3.4rem -3.4rem',
    url: 'https://new-m.pay.naver.com/pcpay?serviceGroup=SHOPPING&page=1',
  },
  {
    name: '장바구니',
    position: '',
    url: 'https://shopping.naver.com/cart',
  },
];

const NaverShopping = () => {
  return (
    <div className={container}>
      {data.map((box) => (
        <a href={box.url} key={box.name} className={item}>
          <div className={itemWithBadge}>
            {box.name === '리뷰적립' && <span className={badge}>5</span>}
            <div className={classNames(iconCircle, icon(box.name, box.position))} />
          </div>
          <span className={name}>{box.name}</span>
        </a>
      ))}
    </div>
  );
};

export default NaverShopping;

const itemWithBadge = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

const container = css({
  width: '24.8rem',
  height: '7.2rem',
  padding: '0.9rem',
  marginTop: '1.2rem',
  borderRadius: '0.4rem',
  backgroundColor: 'rgba(245,248,251,0.6)',
  border: '0.1rem solid rgba(0, 0, 0, 0.05)',
  display: 'flex',
});

const item = css({
  width: '25%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const iconCircle = css({
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '3.2rem',
  backgroundColor: 'white',
  lineHeight: '3.2rem',
  border: '0.1rem solid rgba(238, 242, 248, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const name = css({
  color: '#404040',
  fontSize: '1.3rem',
  fontWeight: '500',
  marginTop: '0.3rem',
});

// icon

const icon = (name: string, position: string) =>
  css({
    '&::before': {
      content: '""',
      display: 'block',
      width: name === '장바구니' ? '1.7rem' : '3.2rem',
      height: name === '장바구니' ? '1.6rem' : '3.2rem',
      backgroundImage: `url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png)`,
      backgroundPosition: name === '장바구니' ? '-1.9rem -12.1rem' : position,
      backgroundSize: '15.9rem 13.7rem',
      backgroundRepeat: 'no-repeat',
      transform: 'translate(-50%,-50%)',
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
  });

const badge = css({
  position: 'absolute',
  top: '-0.4rem',
  left: '2.4rem',
  width: '2rem',
  height: '2rem',
  backgroundColor: '#F4361e',
  border: '0.1rem solid rgba(0,0,0,0.04)',
  borderRadius: '1.3rem',
  fontSize: '1.1rem',
  fontWeight: '800',
  textAlign: 'center',
  color: 'white',
  paddingTop: '0.1rem',
});
