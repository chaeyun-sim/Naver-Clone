import { css } from '../../../styled-system/css';
import { shopList } from './data';

const HotMallList = () => {
  return (
    <div className={container}>
      <div>
        <a target="_blank" rel="noreferrer" className={brandshopLinkTitle}>
          <strong className={brandshopTitleWrap}>요즘 핫한 쇼핑몰 소식</strong>
        </a>
      </div>
      <div></div>
      <div className={brandshopBlockBox}>
        <ul className={brandshopNewsList}>
          {shopList.map((shop, index) => (
            <li key={shop.name} className={brandshopNewsItem(!index ? true : false)}>
              <a href={shop.url} className={brandshopLinkNews}>
                <div className={brandshopNewsTitle}>{shop.name}</div>
                <div className={brandshopNewsDesc}>{shop.desc}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotMallList;

const container = css({
  overflow: 'hidden',
  width: '24.8rem',
  border: '1px solid rgba(0,0,0,.05)',
  borderRadius: '0.4rem',
  backgroundColor: '#F5F8FB',
  boxSizing: 'border-box',
  display: 'block',
});

const brandshopBlockBox = css({
  padding: '0 1.1rem 1.2rem',
});

const brandshopNewsList = css({
  paddingBlock: '0.3rem',
  listStyle: 'none',
});

const brandshopNewsItem = (isFirst?: boolean) =>
  css({
    marginTop: isFirst ? '0rem' : '1rem',
    position: 'relative',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '0.8rem',
      left: 0,
      width: '0.3rem',
      height: '0.3rem',
      backgroundColor: '#A881E0',
    },
  });

const brandshopLinkTitle = css({
  pointerEvents: 'none',
  position: 'relative',
  display: 'flex',
  padding: '1.5rem 2.4rem 1rem 1.2rem',
  textDecoration: 'none',
});

const brandshopTitleWrap = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  lineHeight: '2rem',
  fontSize: '1.45rem',
});

const brandshopLinkNews = css({
  display: 'block',
  paddingLeft: '0.9rem',
  lineHeight: '2rem',
  textDecoration: 'none',
});

const brandshopNewsTitle = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#A881E0',
  fontWeight: '800',
  fontSize: '1.45rem',
});

const brandshopNewsDesc = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontWeight: '600',
  marginTop: '0.2rem',
});
