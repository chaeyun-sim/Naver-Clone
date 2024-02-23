import { css } from '../../../styled-system/css';
import classNames from 'classnames';
import { BrandItems } from './data';
import usePriceSeperator from '../../hooks/usePriceSeperator';

interface Props {
  data: BrandItems;
  page: number;
}

const Brand = ({ data, page }: Props) => {
  const seperator = usePriceSeperator();
  const key = Object.keys(data)[page - 2];

  return (
    <div className={brandshop}>
      <div>
        <a className={brandshopTitle}>
          <strong className={title}>{key}</strong>
        </a>
      </div>
      <div className={brandshopBox}>
        <div>
          <ul className={brandshopBoxList}>
            <li className={brandshopBoxItem}>
              <a href={data[key][0].url}>
                <div className={block}>
                  <span className={classNames(imageContent(), beforeImage)}>
                    <img src={data[key][0].image} width={108} height={115} />
                  </span>
                  {data[key][0].discount && (
                    <span className={discount}>{data[key][0].discount}%</span>
                  )}
                  <span className={text}>{data[key][0].name}</span>
                </div>
              </a>
            </li>
            <li className={brandshopBoxItem}>
              <a href={data[key][1].url} target="_blank" rel="noreferrer">
                <div className={block}>
                  <span className={classNames(imageContent(), beforeImage)}>
                    <img src={data[key][1].image} width={108} height={115} />
                  </span>
                  {data[key][1].discount && (
                    <span className={discount}>{data[key][1].discount}%</span>
                  )}
                  <span className={text}>{data[key][1].name}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <a href={data[key][2].url} target="_blank" rel="noreferrer" className={brandshopContent}>
          <div className={block}>
            <span className={imageContent('22.4rem', '12.6rem')}>
              <img src={data[key][2].image} width={224} height={126} />
            </span>
            <span className={discount}></span>
          </div>
          <div className={blocktw}>
            <span className={outerText}>{data[key][2].name}</span>
            <div>
              <span className={price}>{seperator(data[key][2].price as number)}원</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Brand;

const brandshop = css({
  overflow: 'hidden',
  width: '24.8rem',
  border: '1px solid rgba(0,0,0,.05)',
  borderRadius: '0.4rem',
  backgroundColor: '#f5f8fb',
  boxSizing: 'border-box',
  display: 'block',
});

const brandshopTitle = css({
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
  position: 'relative',
  display: 'flex',
  padding: '1.5rem 2.4rem 1rem 1.2rem',
  textDecoration: 'none',
  '&::after': {
    content: '""',
    backgroundImage:
      'url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png)',
    backgroundSize: '15.9rem 13.7rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-14.8rem -7.6rem',
    width: '0.8rem',
    height: '1.2rem',
    margin: '0.4rem 0 0 0.5rem',
    flex: 'none',
  },
});

const title = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  lineHeight: '2rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const brandshopBox = css({
  display: 'block',
  padding: '0 1.1rem 1.2rem',
});

const brandshopBoxList = css({
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
});

const brandshopBoxItem = css({
  width: '10.8rem',
  margin: 0,
  padding: 0,
});

const block = css({
  position: 'relative',
});

const imageContent = (width?: string, height?: string) =>
  css({
    width: width || '10.8rem',
    height: height || '11.5rem',
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    borderRadius: '0.4rem',

    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '1px solid rgba(0,0,0,.06)',
      borderRadius: 'inherit',
      backgroundColor: 'rgba(0,0,0,.03)',
      transform: 'translateZ(0)',
      perspective: '0.1rem',
    },
  });

const discount = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '4rem',
  borderRadius: '0.4rem 0 0.4rem 0',
  fontSize: '1.1rem',
  lineHeight: '2rem',
  fontWeight: '700',
  letterSpacing: '.3px',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'rgba(0,0,0,.5)',
});

const text = css({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
  right: '1rem',
  bottom: '0.6rem',
  left: '1rem',
  fontSize: '1.3rem',
  lineHeight: '1.9rem',
  fontWeight: '700',
  letterSpacing: '-.5px',
  color: 'white',
});

const brandshopContent = css({
  marginTop: '1.2rem',
  display: 'block',
});

const blocktw = css({
  marginTop: '0.8rem',
  fontSize: '1.3rem',
  lineHeight: '1.9rem',
});

const price = css({
  fontWeight: '700',
});

const beforeImage = css({
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg,rgba(0,0,0,.03) 50%,rgba(0,0,0,.3))',
  },
});

const outerText = css({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontSize: '1.3rem',
  lineHeight: '1.9rem',
  fontWeight: '600',
  color: '#101010',
});
