import classNames from 'classnames';
import { css } from '../../../styled-system/css';

interface Props {
  category: number;
  currentPage: number;
  onSetPage: (num: number) => void;
}

const SubCategories = ({ category, currentPage, onSetPage }: Props) => {
  const categories =
    category === 2
      ? ['HOT', '식품', '생활·육아', '패션소호', '디지털', '패션뷰티', '오픈예정']
      : ['네쇼라Pick', '패션', '뷰티', '푸드', '라이프/테크', '키즈', '취미/여행/문화'];

  return (
    <div className={container}>
      <div className={box}>
        {categories.map((el, idx) => (
          <div key={idx} className={classNames(box, pointer)} onClick={() => onSetPage(idx + 1)}>
            {el === '오픈예정' ? (
              <a className={classNames(text(idx + 1 === currentPage), alarmIcon)}>{el}</a>
            ) : (
              <a className={text(idx + 1 === currentPage)}>{el}</a>
            )}
            {idx < categories.length - 1 && <div className={wideDot} />}
          </div>
        ))}
      </div>
      <div className={box}>
        <a
          href={
            category === 2
              ? 'https://plusdeal.naver.com/?sort=1'
              : 'https://shoppinglive.naver.com/home'
          }
          className={home}
        >
          {category === 2 && '원쁠딜 홈'}
          {category === 3 && '쇼핑라이브 홈'}
        </a>
      </div>
    </div>
  );
};

export default SubCategories;

const container = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.45rem',
});

const box = css({
  display: 'flex',
  alignItems: 'center',
});

const pointer = css({
  cursor: 'pointer',
});

const wideDot = css({
  width: '0.3rem',
  height: '0.3rem',
  backgroundColor: '#d3d5d7',
  borderRightRadius: '50%',
  margin: '0 0.8rem',
});

const text = (isClicked: boolean) =>
  css({
    fontSize: '1.5rem',
    color: isClicked ? '#101010' : 'rgba(16,16,16,.55)',
    lineHeight: '2.1rem',
    fontWeight: '800',
  });

const home = css({
  fontSize: '1.45rem',
  fontWeight: '800',
  color: '#101010',
});

const alarmIcon = css({
  '&::after': {
    content: '""',
    display: 'inline-block',
    backgroundImage:
      'url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2402021651/_next/static/media/sp_main.05384be4.png)',
    backgroundSize: '15.9rem 13.7rem',
    backgroundPosition: '-11.5rem -9.6rem',
    backgroundRepeat: 'no-repeat',
    width: '1.3rem',
    height: '1.4rem',
    margin: '0.3rem 0 0 0.3rem',
    verticalAlign: 'top',
  },
});
