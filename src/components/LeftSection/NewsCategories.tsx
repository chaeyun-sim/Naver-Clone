import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { css } from '../../../styled-system/css';
import Dot from '../base/Dot';
import { useEffect, useState } from 'react';
import MenuWidget from '../base/MenuWidget';
import Divider from '../base/Divider';

interface Props {
  currentCategory: number;
  openAllNews: boolean;
  seeSubscribed: boolean;
  onClickSeeMore: () => void;
  initializeOpen: () => void;
  onSeeSubscribed: () => void;
}

const NewsCategories = ({
  currentCategory,
  openAllNews,
  onClickSeeMore,
  initializeOpen,
  seeSubscribed,
  onSeeSubscribed,
}: Props) => {
  const [openNewsWidget, setOpenNewsWidget] = useState<boolean>(false);

  useEffect(() => {
    initializeOpen();
    setOpenNewsWidget(false);
  }, [currentCategory]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span
        className={select}
        onClick={() =>
          currentCategory === 1 ? setOpenNewsWidget(!openNewsWidget) : onClickSeeMore()
        }
      >
        {currentCategory === 0 && seeSubscribed && '구독언론사'}
        {currentCategory === 0 && !seeSubscribed && '전체언론사'}
        {currentCategory === 1 && '분야별 뉴스'}
        {openNewsWidget || openAllNews ? <GoTriangleUp /> : <GoTriangleDown />}
      </span>
      {openNewsWidget && <MenuWidget />}
      {openAllNews && (
        <MenuWidget
          isNewsStand
          title={!seeSubscribed ? '구독언론사' : '전체언론사'}
          onSeeSubscribed={onSeeSubscribed}
        />
      )}
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#">연합뉴스</a>
        <div style={{ margin: '0 0.5rem' }}>
          <Dot />
        </div>
        <a href="#">의원 꿔주기, 지역구 나눠먹기…여야, ‘꼼수 위성정당’ 속도전</a>
      </div>
    </div>
  );
};

export default NewsCategories;

const select = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.15rem',
    textDecorationThickness: '0.1rem',
  },
});
