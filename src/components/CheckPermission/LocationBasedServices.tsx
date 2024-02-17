import { article, articleSubTitle, articleText, articleTitle } from './style';

const LocationBasedServices = () => {
  return (
    <>
      <div className={article(true)}>
        <p className={articleText}>
          위치기반서비스 이용약관에 동의하시면,{' '}
          <strong>위치를 활용한 광고 정보 수신 등을 포함하는 네이버 위치기반 서비스</strong>를
          이용할 수 있습니다.
        </p>
      </div>
      <div className={article()}>
        <h3 className={articleTitle}>제 1 조 (목적)</h3>
        <p className={articleText}>
          이 약관은 네이버 주식회사 (이하 “회사”)가 제공하는 위치기반서비스와 관련하여 회사와
          개인위치정보주체와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
        </p>
      </div>
      <div className={article()}>
        <p className={articleText}>...</p>
      </div>
      <div className={article()}>
        <h3 className={articleTitle}>부칙</h3>
        <h4 className={articleSubTitle} style={{ marginTop: '0.2rem' }}>
          제1조 시행일
        </h4>
        <ol>
          <li>
            2022년 4월 27일부터 시행되던 종전의 약관은 본 약관으로 대체하며, 본 약관은 2022년 5월
            18일부터 적용됩니다.
          </li>
        </ol>
      </div>
    </>
  );
};

export default LocationBasedServices;
