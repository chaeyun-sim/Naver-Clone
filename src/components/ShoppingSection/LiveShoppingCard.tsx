import { css } from '../../../styled-system/css';

interface Props {
  title: string;
  coverImage: string;
  shopName: string;
  date: string;
}

const LiveShoppingCard = ({ title, coverImage, shopName, date }: Props) => {
  const handleTextSlice = () => {
    return title.length > 22 ? title.slice(0, 22) + '...' : title;
  };

  return (
    <div className={container}>
      <div className={imageWrapper}>
        <img src={coverImage} className={image} />
      </div>
      <div className={box}>
        <div className={textBox}>
          <p className={liveTitle}>{handleTextSlice()}</p>
          <p className={liveShopName}>{shopName}</p>
        </div>
        <div className={liveTimeBox}>
          <span className={time}>{date}</span>
          <button className={noticeCircle}>
            <div className={noticeIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveShoppingCard;

const container = css({
  borderRadius: '0.4rem',
  display: 'flex',
  width: '22.9rem',
  height: '11rem',
  overflow: 'hidden',
  border: '0.1rem solid rgba(0,0,0,0.04)',
});

const imageWrapper = css({
  width: '8.2rem',
  height: '11rem',
  overflow: 'hidden',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const image = css({
  verticalAlign: 'top',
  width: '100%',
  height: '100%',
  transform: 'scale(1.0)',
  transition: 'transform 0.1s',
});

const box = css({
  padding: '1.2rem 1.2rem 0 1.3rem',
  flex: '1 1',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const textBox = css({});

const liveTitle = css({
  fontSize: '1.3rem',
  color: '#101010',
  lineHeight: '1.9rem',
  width: '10.9rem',
  marginTop: '-0.2rem',
});

const liveShopName = css({
  marginTop: '0.2rem',
  color: '#606060',
  fontSize: '1.3rem',
  lineHeight: '2rem',
});

const liveTimeBox = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '2.8rem',
});

const time = css({
  fontSize: '1.3rem',
  color: '#404040',
});

const noticeCircle = css({
  width: '2.8rem',
  height: '2.8rem',
  border: '0.1rem solid #F4361E',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

const noticeIcon = css({
  width: '1.4rem',
  height: '1.4rem',
  background: `url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png)`,
  backgroundSize: '159px 137px',
  backgroundRepeat: 'no-repeat',
});
