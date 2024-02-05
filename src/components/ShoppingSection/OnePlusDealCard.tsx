import { Link } from 'react-router-dom';
import { css } from '../../../styled-system/css';

interface Props {
  price: number;
}

const OnePlusDealCard = ({ price }: Props) => {
  const title = '[설기획전] 오쏘몰 이뮨 2박스 포장 + 2일분 (쇼핑백 증정)';

  const handleSeperator = () => {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={container}>
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
        <img
          src="https://s.pstatic.net/shopping.phinf/20240130_18/f90772db-b620-4574-a3be-f9f2a4b8cf01.jpg?type=f320_230"
          className={image}
        />
      </div>
      <div className={textBox}>
        <span className={priceStyle}>{handleSeperator()}원</span>
        <span>{title.slice(0, 10)}</span>
        <span className={nextText}>{title.slice(11)}</span>
      </div>
    </div>
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
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const blur = css({
  position: 'absolute',
  backgroundColor: 'black',
  opacity: '0.03',
  width: '16rem',
  height: '11.5rem',
  borderRadius: '0.4rem',
});

const image = css({
  verticalAlign: 'top',
  width: '100%',
  height: '100%',
  transform: 'scale(1.0)',
  transition: 'transform 0.1s',
});

const textBox = css({
  paddingTop: '1rem',
  color: '#101010',
  fontSize: '1.3rem',
  fontWeight: '600',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.25rem',
  },
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
});
