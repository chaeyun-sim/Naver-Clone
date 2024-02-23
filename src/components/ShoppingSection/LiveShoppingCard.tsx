import { css } from '../../../styled-system/css';

interface Props {
  text: string;
  image: string;
  onClick: () => void;
  isSelected: boolean;
}

const LiveShoppingCard = ({ text, image, onClick, isSelected }: Props) => {
  return (
    <div className={box} onClick={onClick}>
      <div className={item(isSelected)}>
        <div className={badge}>
          <div className={badgeText}>LIVE</div>
        </div>
        <span className={imgBox}>
          <img className={img} src={image} width="90" height="126" />
        </span>
      </div>
      <div className={shopLiveTitle}>{text}</div>
    </div>
  );
};

export default LiveShoppingCard;

const box = css({
  cursor: 'pointer',
  '& img': {
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease-in-out',
  },
});

const item = (selected: boolean) =>
  css({
    position: 'relative',
    display: 'block',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '1px solid #F4361E',
      backgroundColor: 'rgba(244,54,30,.08)',
      borderRadius: '0.4rem',
      visibility: selected ? 'visible' : 'hidden',
    },
  });

const badge = css({
  position: 'absolute',
  top: '0.6rem',
  left: '0.6rem',
  display: 'inline-block',
  height: '2rem',
  borderRadius: '1.2rem',
  backgroundClip: 'rgba(0,0,0,.3)',
  fontSize: '1.1rem',
  lineHeight: '2rem',
  letterSpacing: '-.4px',
  verticalAlign: 'top',
  color: 'white',
});

const badgeText = css({
  position: 'absolute',
  top: 0,
  left: 0,
  background: '#F4361E',
  width: '3.8rem',
  height: '100%',
  borderRadius: '1.2rem',
  fontWeight: '700',
  textAlign: 'center',
});

const imgBox = css({
  width: '9rem',
  height: '12.6rem',
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
  borderRadius: '0.4rem',
  cursor: 'pointer',
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
    background: 'rgba(0,0,0,.03)',
    transform: 'translateZ(0)',
    perspective: '0.1rem',
  },
});

const img = css({
  transition: 'transform .2s cubic-bezier(.165,.84,.44,1)',
  imageRendering: '-webkit-optimize-contrast',
  pointerEvents: 'none',
});

const shopLiveTitle = css({
  overflow: 'hidden',
  maxHeight: '3.8rem',
  width: '9rem',
  lineHeight: '1.9rem',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  marginTop: '0.8rem',
  fontSize: '1.3rem',
});
