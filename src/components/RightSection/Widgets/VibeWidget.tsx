import classNames from 'classnames';
import { css } from '../../../../styled-system/css';
import { imageAnimation } from '../../../styles/imageAnimation';

const data = [
  {
    url: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Faudio.phinf%2F20220711_20%2F1657511663488Bdfub_PNG%2F06_%25B9%25B0%25B6%25F3%25B4%25D9%25B6%25F3%25C2%25F7%25C5%25A9%25B6%25F3%25B8%25ED%25BB%25F3_04%25C5%25AC%25B8%25B3%25BD%25E6%25B3%25D7%25C0%25CF.png%22&type=f216_324&service=navermain',
    href: 'https://vibe.naver.com/audio_player?curationId=843&contentId=CH_10018_EP_6&audioContentId=CH_10018_EP_6',
    text: '걱정, 불안, 부정적인 감정에서 해방',
  },
  {
    url: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Faudio.phinf%2F20211220_3%2F16399616012298qaWj_PNG%2F05%25C0%25DC%25C0%25DC%25C7%25D1%25C6%25C4%25B5%25B5_04%25BD%25E6%25B3%25D7%25C0%25CF.png%22&type=f216_324&service=navermain',
    href: 'https://vibe.naver.com/audio_player?curationId=843&contentId=CH_9098_EP_6&audioContentId=CH_9098_EP_6',
    text: '잔잔한 파도',
  },
  {
    url: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Faudio.phinf%2F20211220_88%2F1639962064571h6yDb_PNG%2F06%25B5%25FB%25B6%25E6%25C7%25D1%25C0%25A7%25B7%25CE_04%25BD%25E6%25B3%25D7%25C0%25CF.png%22&type=f216_324&service=navermain',
    href: 'https://vibe.naver.com/audio_player?curationId=843&contentId=CH_9098_EP_7&audioContentId=CH_9098_EP_7',
    text: '따뜻한 위로',
  },
  {
    url: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Faudio.phinf%2F20220711_270%2F1657511527360HtRRg_PNG%2F04_%25BF%25EC%25BF%25EF%25C1%25F5%25C5%25D7%25B6%25F3%25C7%25C7_04%25C5%25AC%25B8%25B3%25BD%25E6%25B3%25D7%25C0%25CF.png%22&type=f216_324&service=navermain',
    href: 'https://vibe.naver.com/audio_player?curationId=843&contentId=CH_10018_EP_4&audioContentId=CH_10018_EP_4',
    text: '지독하게 우울하다면',
  },
];

const VibeWidget = () => {
  return (
    <div className={container}>
      <div className={vibeTop}>
        <i className={icon}></i>
        <div className={title}>부정적인 마음은 내려놓아요</div>
      </div>
      <div className={vibeInfo}>
        <ul style={{ display: 'flex' }}>
          {data.map((item) => (
            <li key={item.text} className={classNames(listItem, imageAnimation)}>
              <a href={item.href} className={itemThumb}>
                <span className={thumb}>
                  <span className={gradient}>
                    <img className={image} src={item.url} />
                  </span>
                  <i className={play}></i>
                </span>
              </a>
              <a className={itemDesc}>
                <span className={text}>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VibeWidget;

const container = css({
  height: '100%',
  boxSizing: 'border-box',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
});

const vibeTop = css({
  display: 'flex',
  padding: '1.5rem 1.8rem 0',
});

const vibeInfo = css({
  overflow: 'hidden',
  display: 'flex',
  height: '21rem',
  margin: '1.3rem 0 1.8rem 0rem',
});

const icon = css({
  backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
  backgroundSize: '44.4rem 43.4rem',
  backgroundPosition: '-6.9rem -28rem',
  backgroundRepeat: 'no-repeat',
  width: '6.8rem',
  height: '1.8rem',
  flex: 'none',
  margin: '0.2rem 0.8rem 0 0',
});

const title = css({
  color: '#080808',
  fontSize: '1.5rem',
  lineHeight: '2.2rem',
  fontWeight: '800',
});

const listItem = css({
  width: '10.8rem',
  flexShrink: 0,
  marginLeft: '1.2rem',
});

const itemThumb = css({
  position: 'relative',
  display: 'block',
  textDecoration: 'none!important',
});

const itemDesc = css({
  color: 'inherit',
  cursor: 'pointer',
});

const thumb = css({
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
  borderRadius: '0.4rem',
});

const gradient = css({
  width: '10.8rem',
  height: '16.2rem',
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
  borderRadius: '0.4rem',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    backgroundColor: 'rgba(0,0,0,.09)',
    transform: 'translate3d(0, 0, 0)',
    perspective: '0.1rem',
  },
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid rgba(0,0,0,.06)',
    transform: 'translate3d(0, 0, 0)',
    perspective: '0.1rem',
  },
});

const play = css({
  position: 'absolute',
  right: '0.8rem',
  bottom: '0.8rem',
  width: '2.8rem',
  height: '2.8rem',
  borderRadius: '50%',
  backgroundColor: 'rgba(0,0,0,.05)',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-7.4rem -40.5rem',
    backgroundRepeat: 'no-repeat',
    width: '0.7rem',
    height: '1rem',
    margin: 'auto',
  },
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid rgba(0,0,0,.04)',
    borderRadius: 'inherit',
  },
});

const image = css({
  transition:
    'transform .2s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform .2s cubic-bezier(0.165, 0.84, 0.44, 1)',
  imageRendering: '-webkit-optimize-contrast',
  width: '10.8rem',
  height: '16.2rem',
});

const text = css({
  display: 'block',
  overflow: 'hidden',
  maxHeight: '4rem',
  lineHeight: '2rem',
  textOverflow: 'ellipsis',
  marginTop: '0.8rem',
});
