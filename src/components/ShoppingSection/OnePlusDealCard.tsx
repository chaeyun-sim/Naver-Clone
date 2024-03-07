import classNames from 'classnames';
import { css } from '../../../styled-system/css';
import usePriceSeperator from '../../hooks/usePriceSeperator';
import { imageAnimation } from '../../styles/imageAnimation';

interface Props {
  price: string;
  image: string;
  title: string;
  url: string;
}

const OnePlusDealCard = ({ image, title, url, price }: Props) => {
  const seperator = usePriceSeperator();

  return (
    <a href={url}>
      <div className={classNames(container, imageAnimation)}>
        <div className={imageBox}>
          <div className={costBox}>
            <div className={plus}>
              <span>1+1</span>
            </div>
            <div className={discountBox}>
              <span className={discount}>38%</span>
            </div>
          </div>
          <div className={blur} />
          <img src={image} className={image} />
        </div>
        <div className={textBox}>
          <span className={priceStyle}>{seperator(Number(price))}원</span>
          <span>{title.slice(0, 10)}</span>
          <span className={nextText}>{title.slice(11)}</span>
        </div>
      </div>
    </a>
  );
};

export default OnePlusDealCard;

const container = css({
  paddingLeft: '2rem',
  paddingBottom: '2.4rem',
  width: '18rem',
  height: '18.9rem',
  cursor: 'pointer',
});

const imageBox = css({
  position: 'relative',
  border: '0.1rem solid rgba(0,0,0,0.06)',
  width: '16rem',
  height: '11.5rem',
  overflow: 'hidden',
  borderRadius: '0.4rem',
});

const blur = css({
  position: 'absolute',
  backgroundColor: 'black',
  opacity: '0.03',
  width: '16rem',
  height: '11.5rem',
  borderRadius: '0.4rem',
});

const textBox = css({
  paddingTop: '1rem',
  color: '#101010',
  fontSize: '1.3rem',
  fontWeight: '600',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const priceStyle = css({
  color: '#F4361E',
  fontSize: '1.3rem',
  fontWeight: '800',
  marginRight: '0.4rem',
});

const nextText = css({
  whiteSpace: 'nowrap',
});

const costBox = css({
  width: '5.96rem',
  height: '2rem',
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  paddingRight: '0.6rem',
  borderRadius: '0.4rem 0 0.4rem',
  fontSize: '1.1rem',
  fontWeight: '600',
  color: 'white',
});

const plus = css({
  height: '2rem',
  position: 'absolute',
  marginRight: '0.4rem',
  padding: '0 0.6rem',
  backgroundImage: 'linear-gradient(90deg,#ff7043,#ff3356)',
  borderRadius: '0.4rem 0 0.4rem 0',
  verticalAlign: 'top',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
});

const discountBox = css({
  position: 'relative',
  backgroundColor: 'black',
  opacity: '0.5',
  top: 0,
  right: 0,
  bottom: 0,
  left: 1,
  paddingRight: '0.6rem',
  borderRadius: '0 0 0.4rem 0',
  width: '6.14rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const discount = css({
  position: 'absolute',
  right: 2,
  fontSize: '1.2rem',
});
