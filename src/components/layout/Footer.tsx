import classNames from 'classnames';
import { css } from '../../../styled-system/css';
import { imageAnimation } from '../../styles/imageAnimation';
import { bannerData, servicesData } from '../../constants/footer';

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
        <div className={noticeArea}>
          <div className={noticeBox}>
            <h3 className={noticeTitle}>
              <a target="_blank">공지사항</a>
            </h3>
          </div>
          <a className={linkAll}>서비스 전체보기</a>
        </div>
        <div className={asideArea}>
          <div className={partnerBoxWrap}>
            <div className={partnerBox(true)}>
              <h3 className={boxTitle}>Partners</h3>
              {[
                '프로젝트 꽃',
                '네이버 비즈니스',
                '네이버 비즈니스 스쿨',
                '네이버 광고',
                '스토어 개설',
                '지역업체 등록',
                '엑스퍼트 등록',
              ].map((text, index) => (
                <a className={!index ? linkPartner : classNames(linkPartner, divider)}>{text}</a>
              ))}
            </div>
            <div className={partnerBox(false)}>
              <h3 className={boxTitle}>Developers</h3>
              {[
                '네이버 개발자 센터',
                '오픈 API',
                '오픈소스',
                '네이버 D2',
                '네이버 D2SF',
                '네이버 랩스',
              ].map((text, index) => (
                <a className={!index ? linkPartner : classNames(linkPartner, divider)}>{text}</a>
              ))}
            </div>
          </div>
          <div className={serviceBoxWrap}>
            {servicesData.map((item, index) => (
              <div className={serviceBox(!index)}>
                <a className={serviceLogo}>
                  <img src={item.image} width={48} height={48} />
                </a>
                <div className={serviceInfo}>
                  <strong className={classNames(textBox, serviceTitle)}>{item.title}</strong>
                  <a className={classNames(textBox, serviceDesc)}>{item.desc}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
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
  borderBottom: '1px solid #EBEBEB',
  overflow: 'hidden',
  padding: '2.1rem 0',
  lineHeight: '1.7rem',
});

const noticeBox = css({
  float: 'left',
  display: 'block',
});

const linkAll = css({
  float: 'right',
  fontWeight: '900',
  textDecoration: 'none!important',
  fontSize: '1.35rem',
  '&::after': {
    content: '""',
    display: 'inline-block',
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-32.3rem -22.3rem',
    backgroundRepeat: 'no-repeat',
    width: '0.8rem',
    height: '1.2rem',
    margin: '0.3rem 0 0 1rem',
    verticalAlign: 'top',
  },
});

const noticeTitle = css({
  fontSize: '1.35rem',
  float: 'left',
  marginRight: '1.1rem',
  cursor: 'pointer',
  fontWeight: '900',
});

const asideArea = css({
  height: '9rem',
  borderBottom: '1px solid #EBEBEB',
  overflow: 'hidden',
});

const partnerBoxWrap = css({
  float: 'left',
  padding: '2rem 0',
});

const partnerBox = (isFirstList: boolean) =>
  css({
    overflow: 'hidden',
    lineHeight: '2rem',
    marginTop: isFirstList ? 0 : '1rem',
    fontSize: '1.35rem',
  });

const boxTitle = css({
  float: 'left',
  width: '8.7rem',
  marginRight: '1rem',
  fontWeight: '800',
});

const linkPartner = css({
  color: '#404040',
  float: 'left',
  cursor: 'pointer',
});

const divider = css({
  '&::before': {
    content: '""',
    display: 'inline-block',
    width: '0.1rem',
    height: '1.2rem',
    backgroundColor: '#D3D5D7',
    margin: '0 1rem',
    verticalAlign: '-0.1rem',
    color: '#404040',
  },
});

const serviceBoxWrap = css({
  float: 'right',
  padding: '2.1rem 0',
  '&::after': {
    content: '""',
    display: 'table',
    tableLayout: 'fixed',
    clear: 'both',
  },
});

const serviceBox = (isNextItem: boolean) =>
  css({
    float: 'left',
    display: 'block',
    fontSize: '1.35rem',
    marginLeft: isNextItem ? 0 : '3rem',
  });

const serviceLogo = css({
  marginLeft: '1.1rem',
  float: 'right',
});

const serviceInfo = css({
  overflow: 'hidden',
  display: 'block',
});

const serviceTitle = css({
  display: 'block',
  paddingTop: '0.5rem',
  fontWeight: '900',
});

const serviceDesc = css({
  display: 'block',
  paddingTop: '0.5rem',
  textDecoration: 'none!important',
  color: '#404040',
});

const corpArea = css({
  height: '4rem',
  paddingTop: '2rem',
});
