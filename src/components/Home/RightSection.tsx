import { css } from '../../../styled-system/css';
import Login from '../LoginSection/Login';
import Ad from '../RightSection/Ad/Ad';
import Stock from '../RightSection/Stock/Stock';
import Weather from '../RightSection/Weather/Weather';
import Widgets from '../RightSection/Widgets/Widgets';
import ContentBannerBox from '../RightSection/ContentBannerBox';

const RightSection = () => {
  return (
    <div className={container}>
      <div className={loginWrapper}>
        <Login />
        <Ad
          height="24rem"
          url="https://happybean.naver.com/fundings/detail/F1223"
          image="https://ssl.pstatic.net/melona/libs/1486/1486023/74f29aafb815fef79360_20240202152510385.jpg"
        />
        <Weather />
        <Stock />
        <Ad
          height="8rem"
          url="https://chzzk.naver.com/"
          image="https://s.pstatic.net/static/www/mobile/edit/20240201_1095/upload_1706775713042cVCXR.png"
        />
        <div className={widgetWrapper}>
          <Widgets />
          <ContentBannerBox />
        </div>
      </div>
    </div>
  );
};

export default RightSection;

const container = css({
  width: '100%',
  height: '100%',
});

const loginWrapper = css({
  height: '16.4rem',
});

const widgetWrapper = css({
  width: '42rem',
  height: '110.6rem',
  float: 'left',
  marginTop: '1.6rem',
});
