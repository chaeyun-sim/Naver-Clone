import { css } from '../../../styled-system/css';
import DOMPurify from 'dompurify';
import { ShopItem } from './Shopping';

interface Props {
  page: number;
  data: ShopItem[];
}

const Items = ({ page, data }: Props) => {
  return (
    <div className={leftSection}>
      <ul className={hotList}>
        {data.slice((page - 1) * 5, page * 5).map((item) => {
          const title = DOMPurify.sanitize(item.title.split('<b>').join(' '));

          return (
            <li key={item.title} className={hotItem}>
              <a href={item.link}>
                <div className={hotItemArea}>
                  <span className={hotItemImageBox}>
                    <img src={item.image} className={hotItemImage} />
                  </span>
                  <span className={hotItemTextBox}>
                    <div className={hotItemText}>{title}</div>
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={hotList}>
        {data.slice(page * 5, (page + 1) * 5).map((item) => {
          const title = DOMPurify.sanitize(item.title.split('<b>').join(' '));

          return (
            <li key={item.title} className={hotItem}>
              <a href={item.link}>
                <div className={hotItemArea}>
                  <span className={hotItemImageBox}>
                    <img src={item.image} className={hotItemImage} />
                  </span>
                  <div className={hotItemTextBox}>
                    <div
                      className={hotItemText}
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
                    />
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Items;

const leftSection = css({
  position: 'relative',
  width: '52.2rem',
  marginRight: '2rem',
});

const hotList = css({
  listStyle: 'none',
  display: 'flex',
  gap: '0.8rem',
});

const hotItem = css({
  paddingBottom: '1.4rem',
  cursor: 'pointer',
});

const hotItemArea = css({
  position: 'relative',
  width: '9.8rem',
  display: 'block',
  fontSize: '1.4rem',
  lineHeight: ' 1.7rem',
  '& img': {
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease-in-out',
  },
});

const hotItemImageBox = css({
  width: '9.8rem',
  height: '12.6rem',
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
  borderRadius: '0.4rem',
  '&::after': {
    content: '""',
    display: 'block',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid rgba(0,0,0,.06)',
    borderRadius: 'inherit',
    backgroundClip: 'rgba(0,0,0,.03)',
    transform: 'translateZ(0)',
    perspective: '0.1rem',
  },
});

const hotItemImage = css({
  transition: 'transform .2s cubic-bezier(.165,.84,.44,1)',
  imageRendering: '-webkit-optimize-contrast',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const hotItemTextBox = css({
  display: 'block',
  paddingTop: '0.8rem',
  height: '5rem',
});

const hotItemText = css({
  overflow: 'hidden',
  fontSize: '1.3rem',
  lineHeight: '1.9rem',
  letterSpacing: '-.4px',
  whiteSpace: 'wrap',
  WebkitLineClamp: 2,
  height: '100%',
  '&:hover': {
    textDecoration: 'underline',
  },
});
