import { css } from '../../../styled-system/css';
import Divider from '../base/Divider';
import { serviceUrl } from './News/constants/serviceUrl';

interface Props {
  currentCategory: number;
  categories: string[];
}

const SubCategories = ({ currentCategory, categories }: Props) => {
  const handleUrl = (text: string) => {
    return serviceUrl[text];
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '1.45rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {categories.map((el, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
            <a href={`${handleUrl(el)}`} className={text}>
              {el}
            </a>
            {idx < categories.length - 1 && <div className={wideDot} />}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {currentCategory === 2 && (
          <a href="https://entertain.naver.com/home" className={home}>
            연예홈
          </a>
        )}
        {currentCategory === 3 && (
          <>
            <a href="https://m.sports.naver.com/community/index">커뮤니티</a>
            <Divider />
            <a href="https://sports.news.naver.com/index.nhn" className={home}>
              스포츠홈
            </a>
          </>
        )}
        {currentCategory === 4 && (
          <>
            <a href="https://finance.naver.com/" className={home}>
              증권홈
            </a>
            <Divider />
            <a href="https://land.naver.com/" className={home}>
              부동산홈
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default SubCategories;

const wideDot = css({
  width: '0.3rem',
  height: '0.3rem',
  backgroundColor: '#d3d5d7',
  borderRightRadius: '50%',
  margin: '0 0.8rem',
});

const text = css({
  fontWeight: '500',
  fontSize: '1.5rem',
});

const home = css({
  fontSize: '1.45rem',
  fontWeight: '800',
  color: '#101010',
});
