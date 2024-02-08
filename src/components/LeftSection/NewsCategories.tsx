import { GoTriangleDown } from 'react-icons/go';
import { css } from '../../../styled-system/css';

interface Props {
  currentCategory: number;
}

const NewsCategories = ({ currentCategory }: Props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <a href="#" className={select}>
        {currentCategory === 0 && '전체언론사'}
        {currentCategory === 1 && '분야별 뉴스'}
        <GoTriangleDown />
      </a>

      <div className={divider}>.</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>연합뉴스</span>
        <div className={dot} />
        <span>의원 꿔주기, 지역구 나눠먹기…여야, ‘꼼수 위성정당’ 속도전</span>
      </div>
    </div>
  );
};

export default NewsCategories;

const select = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const divider = css({
  width: '0.1rem',
  height: '1.2rem',
  margin: '0 1.2rem',
  backgroundColor: '#D3D5D7',
  color: '#F5F7F8',
});

const dot = css({
  width: '0.3rem',
  height: '0.3rem',
  backgroundColor: '#d3d5d7',
  borderRightRadius: '50%',
  margin: '0 0.5rem',
});
