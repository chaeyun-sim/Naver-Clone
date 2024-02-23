import { css } from '../../../styled-system/css';

interface Props {
  image: string;
  name: string;
  when: string;
}

const ToBeOpenedCard = ({ image, name, when }: Props) => {
  return (
    <div className={container}>
      <div className={imageBox}>
        <span className={imageContent}>
          <img src={image} style={{ width: '100%', height: '100%' }} />
        </span>
        <div className={infoBox}>
          <div className={date}>{when}</div>
          <div className={time}>17:00</div>
        </div>
      </div>
      <div className={dataBox}>
        <div className={tagBox}>
          <span className={tagDouble}>1+@</span>
          <span className={tagFreeShipping}>무료배송</span>
        </div>
        <div className={title}>{name}</div>
        <div className={text}>알림받고 특가가격 확인</div>
        <div className={btnBox}>
          <button className={btnAlarm}>알림받기</button>
        </div>
      </div>
    </div>
  );
};

export default ToBeOpenedCard;

const container = css({
  display: 'flex',
  alignItems: 'center',
  width: '39.4rem',
  height: '11rem',
});

const imageBox = css({
  position: 'relative',
  marginRight: '1.6rem',
  borderRadius: '0.4rem',
  display: 'block',
});

const dataBox = css({
  paddingRight: '1rem',
  minWidth: 0,
  display: 'block',
  width: '25rem',
});

const imageContent = css({
  width: '11rem',
  height: '11rem',
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
  borderRadius: '0.4rem',
  '&::after': {
    content: '""',
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

const infoBox = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'inherit',
  backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,.2),rgba(0,0,0,.2))',
  color: 'white',
});

const date = css({
  fontSize: '1.2rem',
  lineHeight: '1.6rem',
  fontWeight: '700',
});

const time = css({
  marginTop: '0.3rem',
  fontSize: '1.9rem',
  lineHeight: '2.4rem',
  fontWeight: '600',
});

const tagBox = css({
  display: 'block',
  textAlign: '-webkit-match-parent',
  listStyle: 'none',
});

const title = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: '0.8rem',
  fontSize: '1.3rem',
  lineHeight: '1.9em',
  display: 'block',
});

const text = css({
  color: '#F4361E',
  marginTop: '0.1rem',
  fontSize: '1.3rem',
  lineHeight: '1.9rem',
  display: 'block',
});

const btnBox = css({
  position: 'relative',
  display: 'inline-block',
  marginTop: '0.5rem',
  verticalAlign: 'top',
});

const tagDouble = css({
  border: 'none',
  background: 'linear-gradient(90deg,#b8c6d3,#9fabb8)',
  lineHeight: '1.8rem',
  fontWeight: '700',
  color: 'white',
  display: 'inline-block',
  borderRadius: '0.2rem',
  fontSize: '1rem',
  padding: '0 0.4rem',
});

const tagFreeShipping = css({
  marginLeft: '0.3rem',
  backgroundColor: 'white',
  display: 'inline-block',
  padding: '0 0.4rem',
  border: '1px solid rgba(162,174,187,.55)',
  borderRadius: '0.2rem',
  fontSize: '1rem',
  lineHeight: '1.6rem',
  verticalAlign: 'top',
  color: '#8191a1',
});

const btnAlarm = css({
  border: '1px solid #F4361E',
  color: '#F4361E',
  position: 'relative',
  padding: '0 0.9rem',
  borderRadius: '1.4rem',
  fontSize: '1.1rem',
  lineHeight: '2.2rem',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    display: 'inline-block',
    backgroundImage:
      'url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png)',
    backgroundSize: '15.9rem 13.7rem',
    backgroundPosition: '-13.1rem -3.8rem',
    backgroundRepeat: 'no-repeat',
    width: '1.4rem',
    height: '1.4rem',
    margin: '0.4rem 0.5rem 0 0',
    verticalAlign: 'top',
    color: '#F4361E',
  },
});
