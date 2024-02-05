import { css } from '../../../styled-system/css';

interface Props {
  price: number;
  title: string;
}

const OnePlusDealHorizontalCard = ({ title, price }: Props) => {
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
        <p className={titleStyle}>{title}</p>
        <p className={priceStyle}>{handleSeperator()}</p>
      </div>
    </div>
  );
};

export default OnePlusDealHorizontalCard;

const container = css({
  width: '22.9rem',
  height: '9.2rem',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
});

const imageBox = css({
  position: 'relative',
  border: '0.1rem solid rgba(0,0,0,0.06)',
  width: '9rem',
  height: '9.2rem',
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

const textBox = css({
  height: '100%',
  fontSize: '1.3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '1.5rem',
  width: '12.2rem',
});

const titleStyle = css({
  textOverflow: 'ellipsis',
  whiteSpace: 'wrap',
});

const priceStyle = css({
  marginTop: '0.4rem',
  color: ' #F4361E',
});
