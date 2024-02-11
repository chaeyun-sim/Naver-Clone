import { css } from '../../../styled-system/css';
import Dot from './Dot';

type MenuUrlType = {
  [key: string]: string;
};

const menuUrl: MenuUrlType = {
  신문보기: 'https://news.naver.com/newspaper/home?viewType=pc',
  오피니언: 'https://news.naver.com/opinion/home',
  랭킹뉴스: 'https://news.naver.com/main/ranking/popularDay.naver',
  TV: 'https://news.naver.com/main/tv/index.naver',
};

interface Props {
  isNewsStand?: boolean;
  title?: string;
  onSeeSubscribed?: () => void;
}

const MenuWidget = ({ isNewsStand, title, onSeeSubscribed }: Props) => {
  return (
    <>
      <div className={triangleIcon} />
      <div className={container} style={{ width: isNewsStand ? '12.76rem' : '23.8rem' }}>
        {!isNewsStand ? (
          ['신문보기', '오피니언', '랭킹', 'TV'].map((el, idx) => (
            <div key={el} style={{ display: 'flex', alignItems: 'center' }}>
              <a href={menuUrl[el]}>{el}</a>
              {idx < 3 && (
                <div style={{ margin: '0 0.8rem' }}>
                  <Dot />
                </div>
              )}
            </div>
          ))
        ) : (
          <span className={seeMoreText} onClick={onSeeSubscribed}>
            <strong>{title} </strong>
            보기
          </span>
        )}
      </div>
    </>
  );
};

export default MenuWidget;

const container = css({
  height: '4.9rem',
  position: 'absolute',
  top: '10.0rem',
  left: '4.8rem',
  zIndex: 1,
  fontSize: '1.46rem',
  backgroundColor: 'white',
  border: '1px solid #3a67ea',
  padding: '1.4rem 1.9rem',
  borderRadius: '0.4rem',
  boxShadow: '0 3px 6px 0 rgba(0,0,0,.06)',
  lineHeight: '2rem',
  verticalAlign: 'top',
  display: 'flex',
  flexDirection: 'row',
});

const triangleIcon = css({
  position: 'absolute',
  top: '9.0rem',
  left: '10.4rem',
  zIndex: 2,
  width: '1.9rem',
  height: '1.1rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '-307px -254px',
  backgroundRepeat: 'no-repeat',
});

const seeMoreText = css({
  color: '#404040',
  lineHeight: '2rem',
  fontSize: '1.44rem',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.15rem',
    textDecorationThickness: '0.1rem',
  },
});
