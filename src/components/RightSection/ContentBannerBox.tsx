import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const data = [
  {
    href: 'https://campaign.naver.com/new-naverapp/?pcode=naver_pcwidgetbottom&campaign_id=2311-naverapp-001&channel_id=naver_pcwidgetbottom',
    url: 'https://s.pstatic.net/static/www/mobile/edit/20231108_1095/upload_1699408070967XVp4e.png',
    text1: '이제, 네이버앱에서 탭하세요!',
    text2: '새로워진 네이버앱 살펴보기',
  },
  {
    href: 'https://whale.naver.com/ko/download/mac/',
    url: 'https://s.pstatic.net/static/www/mobile/edit/20231109_1095/upload_1699514358075UmvS8.png',
    text1: '나만의 스마트한 브라우저, 웨일',
    text2: '인터넷을 여는 가장 스마트한 방법',
  },
];

const ContentBannerBox = () => {
  const [currentIndex, setCurrentIndex] = useState<number>();

  return (
    <div className={container}>
      <div className={bannerBox}>
        <div className={bannerRolling}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            speed={700}
            loop
            slidesPerView={1}
            allowTouchMove={false}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          >
            {data.map((item) => (
              <SwiperSlide key={item.url}>
                <div className={rolling}>
                  <a href={item.href} className={linkBanner}>
                    <span className={thumb}>
                      <img src={item.url} width={42} height={42} />
                    </span>
                    <div className={bannerDesc}>
                      <div className={text1}>{item.text1}</div>
                      <div className={text2}>{item.text2}</div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={indicator}>
          <span className={dot(currentIndex === 0, true)}></span>
          <span className={dot(currentIndex === 1)}></span>
        </div>
      </div>
    </div>
  );
};

export default ContentBannerBox;

const container = css({
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '0.8rem',
  boxShadow: '0 0 0 1px #e3e5e8,0 1px 2px 0 rgba(0,0,0,.04)',
  boxSizing: 'border-box',
  cursor: 'pointer',
  height: '8rem',
  '&::after': {
    content: '""',
    display: 'table',
    tableLayout: 'fixed',
    clear: 'both',
  },
});

const bannerBox = css({
  position: 'relative',
  padding: '0.8rem 5rem 8rem 1.8rem',
  height: '100%',
});

const bannerRolling = css({
  overflow: 'hidden',
  display: 'flex',
  width: '35.2rem',
});

const indicator = css({
  position: 'absolute',
  top: '50%',
  right: '1.8rem',
  height: '0.6rem',
  marginTop: '-0.3rem',
});

const rolling = css({
  animationDuration: '0.5s',
  flexShrink: 0,
  width: '100%',
  animationFillMode: 'forwards',
});

const linkBanner = css({
  color: '#404040',
  display: 'flex',
  alignItems: 'center',
  width: '35.2rem',
  padding: '1.1rem 0',
  lineHeight: '2rem',
});

const thumb = css({
  width: '4.2rem',
  height: '4.2rem',
  display: 'inline-block',
  marginRight: '1.2rem',
  verticalAlign: 'top',
  color: '#404040',
});

const bannerDesc = css({
  flex: 1,
  minWidth: 0,
});

const text1 = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#101010',
  fontWeight: 'bold',
});

const text2 = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#606060',
  marginTop: '0.2rem',
  lineHeight: '2rem',
});

const dot = (isActive: boolean, isFirst?: boolean) =>
  css({
    width: '0.6rem',
    height: '0.6rem',
    display: 'inline-block',
    borderRadius: '50%',
    verticalAlign: 'top',
    color: 'rgba(0,0,0,0)',
    backgroundColor: isActive ? '#03C75A' : 'rgba(128,134,140,.3)',
    marginLeft: isFirst ? 0 : '0.4rem',
  });
