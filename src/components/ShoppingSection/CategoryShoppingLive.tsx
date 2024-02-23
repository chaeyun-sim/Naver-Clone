import { useEffect, useState } from 'react';
import { css } from '../../../styled-system/css';
import LiveShoppingCard from './LiveShoppingCard';
import { CardData, cardData } from './constant/liveShoppingData';
import { upcomingData } from './constant/upcomingData';
import usePriceSeperator from '../../hooks/usePriceSeperator';

interface Props {
  page: number;
}

const CategoryShoppingLive = ({ page }: Props) => {
  const seperator = usePriceSeperator();
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [liveData, setLiveData] = useState<CardData[]>([]);

  useEffect(() => {
    setLiveData([...cardData].sort(() => Math.random() - 0.5));
  }, [page]);

  return (
    <div className={container}>
      <div className={shopLive}>
        <div className={previewArea}>
          <a href={liveData[selectedCard]?.url} className={thumbBox}>
            <div className={badgeLive}>
              <div className={liveText}>LIVE</div>
              <span className={watchText}>{liveData[selectedCard]?.watchers} 시청</span>
            </div>
            <div className={thumb}>
              <video
                height="352"
                autoPlay
                width="100%"
                className={liveVideo}
                playsInline
                loop
                muted
                poster={liveData[selectedCard]?.poster}
                src={liveData[selectedCard]?.video}
              ></video>
              <i className={iconArrow} />
            </div>
            {liveData.length > 0 && liveData[selectedCard]?.product && (
              <div className={product}>
                <div className={productImageBox}>
                  <img className={productImage} src={liveData[selectedCard]?.product?.image} />
                </div>
                <div className={productText}>
                  <div className={productName}>{liveData[selectedCard]?.product?.name}</div>
                  <div className={productData}>
                    <span className={productDiscount}>
                      {liveData[selectedCard]?.product?.discount}%
                    </span>
                    <span className={productPrice}>
                      {seperator(liveData[selectedCard].product?.price as number)}원
                    </span>
                  </div>
                </div>
              </div>
            )}
          </a>
        </div>
        <ul className={shopLiveList}>
          {liveData.map((item, index) => (
            <li key={item.text} className={shopLiveItem}>
              <LiveShoppingCard
                text={item.text}
                image={item.image}
                onClick={() => setSelectedCard(index)}
                isSelected={selectedCard === index}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={schedule}>
        <ul style={{ listStyle: 'none' }}>
          {upcomingData.map((data, index) => (
            <li key={data.text} className={scheduleItem(index > 0)}>
              <a href={data.url} className={linkSchedule} />
              <div className={scheduleBox}>
                <div className={scheduleImageBox}>
                  <img src={data.image} className={scheduleImage} />
                </div>
                <div className={scheduleInfoBox}>
                  <div className={title}>{data.text}</div>
                  <div className={sub}>{data.brand}</div>
                  <div className={subBox}>
                    <span className={time}>{data.time}</span>
                    <button type="button" className={btnAlarm} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryShoppingLive;

const container = css({
  display: 'flex',
  height: '39.4rem',
  padding: '1.8rem 2rem 0.1rem',
  boxSizing: 'border-box',
});

const shopLive = css({
  display: 'flex',
  width: '54rem',
  '&::after': {
    content: '""',
    display: 'table',
    tableLayout: 'fixed',
    clear: 'both',
  },
});

const previewArea = css({
  width: '22.2rem',
  paddingRight: '1.8rem',
});

const thumbBox = css({
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
});

const badgeLive = css({
  position: 'absolute',
  top: '0.8rem',
  left: '0.8rem',
  display: 'inline-block',
  height: '2rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgba(0,0,0,.3)',
  fontSize: '1.1rem',
  letterSpacing: '-.4px',
  lineHeight: '2rem',
  verticalAlign: 'top',
  color: 'white',
  zIndex: 1,
});

const thumb = css({
  backgroundImage: 'none',
  overflow: 'hidden',
  position: 'relative',
  height: '30.8rem',
  borderRadius: '0.4rem',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid rgba(0,0,0,.06)',
    borderRadius: 'inherit',
    backgroundColor: 'rgba(0,0,0,.06)',
  },
});

const liveText = css({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#F4361E',
  width: '3.8rem',
  height: '100%',
  borderRadius: '1.2rem',
  fontWeight: '700',
  textAlign: 'center',
});

const watchText = css({
  position: 'relative',
  display: 'inline-block',
  padding: '0 0.6rem 0 4rem',
  verticalAlign: 'top',
  fontSize: '1.1rem',
  lineHeight: '2rem',
  letterSpacing: '-.4px',
  color: 'white',
});

const liveVideo = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  backgroundColor: 'transparent',
  overflowClipMargin: 'content-box',
  overflow: 'clip',
});

const iconArrow = css({
  position: 'absolute',
  right: '0.8rem',
  bottom: '0.8rem',
  width: '2.6rem',
  height: '2.6rem',
  backgroundColor: 'rgba(0,0,0,.3)',
  borderRadius: '50%',
  fontStyle: 'normal',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundImage:
      'url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png)',
    backgroundSize: '15.9rem 13.7rem',
    backgroundPosition: '-14.8rem 0',
    backgroundRepeat: 'no-repeat',
    width: '1.1rem',
    height: '1rem',
    transform: 'translate(-50%,-50%)',
  },
});

const shopLiveList = css({
  flex: '1 1',
  listStyle: 'none',
});

const shopLiveItem = css({
  display: 'inline-block',
  width: '9rem',
  margin: '0 1.4rem 1.4rem 0',
  verticalAlign: 'top',
});

const product = css({
  overflow: 'hidden',
  display: 'flex',
  marginTop: '1rem',
  borderRadius: '0.4rem',
});

const productImageBox = css({
  width: '4rem',
  height: '4rem',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '0.4rem',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid rgba(0,0,0,.06)',
    borderRadius: 'inherit',
  },
});

const productImage = css({
  verticalAlign: 'top',
  width: '4rem',
  height: '4rem',
});

const productText = css({
  overflow: 'hidden',
  paddingLeft: '0.6rem',
  fontSize: '1.3rem',
  lineHeight: '2rem',
  flex: '1 1',
});

const productName = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '1.3rem',
  lineHeight: '2rem',
});

const productData = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontWeight: '700',
});

const productDiscount = css({
  color: '#F4361E',
  marginRight: '0.4rem',
});

const productPrice = css({
  whiteSpace: 'nowrap',
  fontWeight: '700',
});

const schedule = css({
  overflow: 'hidden',
  position: 'relative',
  flex: '1 1',
  paddingLeft: '2.1rem',
  display: 'block',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    bottom: '2rem',
    left: 0,
    backgroundColor: '#EBEBEB',
    width: '0.1rem',
  },
});

const scheduleItem = (isNotFirstLine: boolean) =>
  css({
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '0.4rem',
    marginTop: isNotFirstLine ? '1.4rem' : 0,
    '& img': {
      transition: 'transform 0.3s ease-in-out',
    },
    '&:hover img': {
      transform: 'scale(1.1)',
      transition: 'transform 0.3s ease-in-out',
    },
  });

const linkSchedule = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});

const scheduleBox = css({
  position: 'relative',
  display: 'flex',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid rgba(0,0,0,.05)',
    borderRadius: '0.4rem',
  },
});

const scheduleImageBox = css({
  overflow: 'hidden',
  position: 'relative',
  width: '8.2rem',
  height: '11rem',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRight: '1px solid rgba(0,0,0,.04)',
    backgroundColor: 'rgba(0,0,0,.03)',
  },
});

const scheduleImage = css({
  width: '100%',
  height: '100%',
});

const scheduleInfoBox = css({
  overflow: 'hidden',
  position: 'relative',
  flex: '1 1',
  padding: '1.2rem 1.2rem 0 1.3rem',
});

const title = css({
  display: 'block',
  overflow: 'hidden',
  maxHeight: '3.8rem',
  lineHeight: '1.9rem',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  marginLeft: '0.2rem',
  fontSize: '1.3rem',
});

const sub = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#606060',
  margin: '0.2rem 0 0 0.2rem',
  fontSize: '1.3rem',
  lineHeight: '2rem',
});

const subBox = css({
  position: 'absoltue',
  right: '0.8rem',
  bottom: '0.8rem',
  left: '1.3rem',
  display: 'flex',
  justifyContent: 'space-between',
  whiteSpace: 'nowrap',
});

const time = css({
  color: '#404040',
  fontSize: '1.4rem',
  lineHeight: '2.8rem',
  letterSpacing: '-.8px',
});

const btnAlarm = css({
  width: '2.8rem',
  height: '2.8rem',
  border: '1px solid #F4361E',
  flex: 'none',
  position: 'relative',
  borderRadius: '50%',
  fontSize: '1.1rem',
  lineHeight: '2.2rem',
  letterSpacing: '-.26px',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    backgroundImage:
      'url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png)',
    backgroundSize: '15.9rem 13.7rem',
    backgroundRepeat: 'no-repeat',
    width: '1.4rem',
    height: '1.4rem',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundPosition: '-13.1rem -3.8rem',
    margin: 'auto',
  },
});
