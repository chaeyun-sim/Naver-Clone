import { Link } from 'react-router-dom';
import { css } from '../../../../styled-system/css';

interface Props {
  page: number;
  seeSubscribed: boolean;
}

const NewsStand = ({ page, seeSubscribed }: Props) => {
  return (
    <div className={container}>
      {!seeSubscribed ? (
        <div>asdf</div>
      ) : (
        <div>
          <p className={title}>구독한 언론사가 없습니다.</p>
          <div className={subtitle}>
            언론사 구독 설정에서 관심 있는 언론사를 구독하시면
            <br />
            언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.
          </div>
          <Link to={'https://newsstand.naver.com/config.html'}>
            <button className={button}>언론사 구독 설정하기</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NewsStand;

const container = css({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const title = css({
  marginTop: '2.5rem',
  fontSize: '1.45rem',
  color: '#101010',
  fontWeight: 'bold',
});

const subtitle = css({
  marginTop: '0.8rem',
  color: '#606060',
  fontSize: '1.35rem',
  lineHeight: '2rem',
});

const button = css({
  color: '#3A67EA',
  minWidth: '15.2rem',
  marginTop: '2rem',
  border: '1px solid rgba(58,103,234,.04)',
  borderRadius: '2.1rem',
  backgroundColor: 'rgba(58,103,234,.04)',
  fontSize: '1.33rem',
  lineHeight: '3.8rem',
  fontWeight: 'bold',
  verticalAlign: 'top',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.25rem',
  },
});
