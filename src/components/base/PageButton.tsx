import { css } from '../../../styled-system/css';

interface Props {
  categoryName: string;
  currentPage: number;
  totalPage: number;
  onPressRight: () => void;
  onPressLeft: () => void;
  renderRightComponent?: () => JSX.Element;
}

const PageButton = ({
  categoryName,
  currentPage,
  totalPage,
  onPressRight,
  onPressLeft,
  renderRightComponent,
}: Props) => {
  const handleTextColor = () => {
    if (categoryName === '연예 소식') {
      return '#E538E2';
    } else if (categoryName === '경제 소식') {
      return '#008f76';
    } else if (['쇼핑아이템', '맨즈아이템', '원쁠딜', '쇼핑라이브'].includes(categoryName)) {
      return '#9858f5';
    }

    return '#3A67EA';
  };

  return (
    <div className={container}>
      <div />
      <button className={circle} onClick={onPressLeft}>
        <div className={leftIcon} />
      </button>
      <div className={textBox}>
        <span className={seeMore}>
          <span className={category} style={{ color: handleTextColor() }}>
            {categoryName}
          </span>
          더보기
        </span>
        <span>
          <span className={current}>{currentPage}</span>
          <span className={total}>/{totalPage}</span>
        </span>
      </div>
      <button className={circle} onClick={onPressRight}>
        <div className={rightIcon} />
      </button>
      {renderRightComponent && <div>{renderRightComponent()}</div>}
    </div>
  );
};

export default PageButton;

const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const circle = css({
  width: '3.6rem',
  height: '3.6rem',
  border: '0.1rem solid #DADCDF',
  backgroundColor: 'white',
  position: 'relative',
  boxShadow: '0 1px 2px 0 rgba(0,0,0,.06)',
  borderRadius: '50%',
  verticalAlign: 'top',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    boxShadow: '0 0.1rem 0.2rem 0 rgba(0,0,0,0.25)',
  },
});

const leftIcon = css({
  width: '1.0em',
  height: '1.2rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundPosition: '-432px -246px',
  backgroundSize: '444px 434px',
  backgroundRepeat: 'no-repeat',
  transform: 'rotate(180deg)',
  marginRight: '0.7rem',
});

const rightIcon = css({
  width: '1.0em',
  height: '1.2rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundPosition: '-432px -246px',
  backgroundSize: '444px 434px',
  backgroundRepeat: 'no-repeat',
  marginLeft: '0.7rem',
});

const textBox = css({
  minWidth: '15.6rem',
  padding: '0 1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.37rem',
  fontWeight: '700',
});

const seeMore = css({
  color: '#606060',
  paddingRight: '0.4rem',
});

const category = css({
  color: '#3A67EA',
  paddingRight: '0.3rem',
});

const current = css({
  color: '#606060',
});

const total = css({
  color: 'rgba(96,96,96,0.5)',
});
