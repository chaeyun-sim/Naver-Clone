import { css } from '../../../styled-system/css';

const NaverShopping = () => {
  const data = [
    {
      name: '쇼핑홈',
      icon: shopIcon,
    },
    {
      name: '리뷰적립',
      icon: pointIcon,
    },
    {
      name: '주문',
      icon: truckIcon,
    },
    {
      name: '장바구니',
      icon: bagIcon,
    },
  ];

  return (
    <div className={container}>
      {data.map((box) => (
        <div key={box.name} className={item}>
          <div className={box.name === '리뷰적립' ? itemWithBadge : ''}>
            {box.name === '리뷰적립' && <span className={badge}>5</span>}
            <div className={iconCircle}>
              <div className={box.icon} />
            </div>
          </div>
          <span className={name}>{box.name}</span>
        </div>
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
});

const container = css({
  width: '24.8rem',
  height: '6.5rem',
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
});

const shopIcon = css({
  width: '3.3rem',
  height: '3.6rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -606px -106px`,
  zoom: '0.5',
});

const pointIcon = css({
  width: '3.1rem',
  height: '3.4rem',
  background: `url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png) no-repeat -153px -83px`,
  zoom: '0.5',
});

const truckIcon = css({
  width: '3.4rem',
  height: '2.7rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.2b26eb67.png) no-repeat -606px -176px`,
  zoom: '0.5',
});

const bagIcon = css({
  width: '3.3rem',
  height: '3.2rem',
  background: `url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png) no-repeat -39px -242px`,
  zoom: '0.5',
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
