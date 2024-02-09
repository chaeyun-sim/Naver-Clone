import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { useEffect } from 'react';

interface Props {
  currentCategory: number;
}

const SubCategories = ({ currentCategory }: Props) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    switch (currentCategory) {
      case 2:
        setCategories(['네이버TV', '시리즈온', 'VIBE']);
        break;
      case 3:
        setCategories([
          '야구',
          '해외야구',
          '아시안컵・축구',
          '해외축구',
          '농구',
          '배구',
          'N골프',
          '일반',
          'e스포츠',
        ]);
        break;
      case 4:
        setCategories(['국내증시', '해외증시', '시장지표', '관심종목']);
        break;
    }
  }, [currentCategory]);

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
            <a href="#" className={text}>
              {el}
            </a>
            {idx < categories.length - 1 && <div className={wideDot} />}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {currentCategory === 2 && (
          <a href="#" className={home}>
            연예홈
          </a>
        )}
        {currentCategory === 3 && (
          <>
            <a href="#">커뮤니티</a>
            <div className={divider}>.</div>
            <a href="#" className={home}>
              스포츠홈
            </a>
          </>
        )}
        {currentCategory === 4 && (
          <>
            <a href="#" className={home}>
              증권홈
            </a>
            <div className={divider}>.</div>
            <a href="#" className={home}>
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

const divider = css({
  width: '0.1rem',
  height: '1.2rem',
  margin: '0 1.2rem',
  backgroundColor: '#D3D5D7',
  color: '#F5F7F8',
});
