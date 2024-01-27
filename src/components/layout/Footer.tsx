import { css } from '../../../styled-system/css';

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerBanner}>footer-top</div>
      <div className={footerNotice}>footer-middle</div>
      <div className={footerAside}>footer-bottom</div>
      <div className={footerCorp}>footer-corp</div>
    </footer>
  );
};

export default Footer;

const footer = css({
  height: '43rem',
});

const footerBanner = css({
  height: '16rem',
  padding: '3rem 0rem',
});

const footerNotice = css({
  height: '5.9rem',
});

const footerAside = css({
  height: '9rem',
});

const footerCorp = css({
  height: '4rem',
  paddingTop: '2rem',
});
