import { article, articleText, articleTitle } from './style';

const data = [
  '1. 수집하는 개인정보',
  '2. 수집한 개인정보의 이용',
  '3. 개인정보의 보관기간',
  '4. 개인정보 수집 및 이용 동의를 거부할 권리',
];

const PrivacyPolicy = () => {
  return (
    <>
      <div className={article(true)} style={{ marginTop: '-0.5rem' }}>
        <p className={articleText}>
          개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목,
          개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시
          불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
        </p>
      </div>
      <div className={article()}>
        <h3 className={articleTitle}>1. 수집하는 개인정보</h3>
        <p className={articleText}>
          이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과
          동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은
          회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한
          최소한의 개인정보를 수집합니다.
        </p>
      </div>
      <div className={article()}>
        <p className={articleText}>...</p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
