import classNames from 'classnames';
import { css } from '../../../styled-system/css';
import { imageAnimation } from '../../styles/imageAnimation';

const bannerData = [
  {
    href: 'https://blog.naver.com/premiumcontents/223347963859',
    url: 'https://ssl.pstatic.net/melona/libs/1487/1487000/dc02ef30bafe43cf4a40_20240220102149369.png',
    badge: '네이버 프리미엄콘텐츠',
    title: '콘텐츠로 돈 벌 수 있을까',
    desc: '프리미엄 스타 채널의\n주인공에 도전하세요',
  },
  {
    href: 'https://happybean.naver.com/fundings/detail/F1252',
    url: 'https://ssl.pstatic.net/melona/libs/1481/1481321/3c6a780bcad1b56f0d96_20240229151447588.jpg',
    badge: '네이버 해피빈 펀딩',
    title: '예민한 피부에 추천해요',
    desc: '흡수력과 통기성까지!\n친환경 소창 타올 세트',
  },
  {
    href: 'https://mkt.naver.com/p1/jrschool',
    url: 'https://ssl.pstatic.net/melona/libs/1479/1479913/77c890a43f0f2d0ffb57_20240228161944893.jpg',
    badge: '네이버 커넥트재단',
    title: '새학기, 사회성이 걱정이라면',
    desc: '소아정신과 천근가 교수와 만든\n쥬니버스쿨에서 무료로 학습해요',
  },
];

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerInner}>
        <div className={bannerArea}>
          {bannerData.map((item) => (
            <div key={item.title} className={bannerWrapper}>
              <div className={classNames(innerWrapper, imageAnimation)}>
                <a href={item.href} className={wrap} target="_blank">
                  <div className={image}>
                    <img src={item.url} alt={item.title} width={'100%'} height={'100%'} />
                  </div>
                  <div className={content}>
                    <strong className={classNames(badge, textBox)}>{item.badge}</strong>
                    <strong className={classNames(title, textBox)}>{item.title}</strong>
                    {item.desc.split('\n').map((text, index) => (
                      <strong key={text} className={classNames(desc(index === 0), textBox)}>
                        {text}
                      </strong>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={noticeArea}>footer-middle</div>
        <div className={asideArea}>footer-bottom</div>
        <div className={corpArea}>footer-corp</div>
      </div>
    </footer>
  );
};

export default Footer;

const footer = css({
  height: '43rem',
  borderTop: '1px solid #EBEBEB',
  backgroundColor: '#F5F6F7',
});

const footerInner = css({
  width: '128rem',
  margin: '0 auto',
  paddingBottom: '7.8rem',
  fontSize: '1.3rem',
});

const bannerArea = css({
  height: '16rem',
  padding: '3rem 0rem',
  overflow: 'hidden',
  borderBottom: '1px solid #EBEBEB',
  display: 'flex',
  gap: '2rem',
});

const bannerWrapper = css({
  float: 'left',
  display: 'block',
});

const innerWrapper = css({
  width: '41rem',
  height: '10rem',
  border: '0pt none',
});

const wrap = css({
  display: 'block',
  overflow: 'hidden',
  backgroundColor: '#F5F6F6',
});

const image = css({
  overflow: 'hidden',
  position: 'relative',
  float: 'left',
  width: '16rem',
  height: '10rem',
  borderRadius: '0.6rem',
  isolation: 'isolate',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid rgba(0,0,0,0.06)',
    borderRadius: 'inherit',
  },
});

const content = css({
  overflow: 'hidden',
  height: '10rem',
  padding: '0.5rem 0.3rem 0 1.8rem',
  boxSizing: 'border-box',
});

const textBox = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const badge = css({
  display: 'inline-block',
  height: '2rem',
  maxWidth: '14.1rem',
  padding: '0 0.6rem',
  borderRadius: '0.4rem',
  fontSize: '1.3rem',
  lineHeight: '2rem',
  letterSpacing: '-0.25px',
  color: 'white',
  backgroundColor: '#A0ADB2',
  verticalAlign: 'top',
  fontWeight: 'bold',
  textDecoration: 'none!important',
});

const title = css({
  display: 'block',
  marginTop: '1rem',
  fontSize: '1.4rem',
  lineHeight: '1.143',
  letterSpacing: '-0.25px',
  color: '#222122',
  fontWeight: 'bold',
});

const desc = (isFirstText: boolean) =>
  css({
    fontSize: '1.4rem',
    lineHeight: '1.43',
    letterSpacing: '-0.25px',
    color: '#545454',
    marginTop: isFirstText ? '0.6rem' : 0,
    display: 'block',
    fontWeight: '600',
    textDecoration: 'none!important',
  });

const noticeArea = css({
  height: '5.9rem',
});

const asideArea = css({
  height: '9rem',
});

const corpArea = css({
  height: '4rem',
  paddingTop: '2rem',
});
