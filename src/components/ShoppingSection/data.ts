export type BrandItems = {
  [key: string]: {
    name: string;
    image: string;
    discount?: number;
    price?: number;
    url: string;
  }[];
};

export const brandData: BrandItems = {
  앙투어솔레: [
    {
      name: '프리미엄치즈',
      image:
        'https://s.pstatic.net/shopping.phinf/20240207_28/f2f7b08e-f124-4717-b0f3-abd57b59a808.jpg',
      url: 'https://smartstore.naver.com/aislingkorea/products/6100556898?NaPm=ct%3Dlsvqs5yw%7Cci%3Df359063e816fa3fd598b4f879ada84992928ac74%7Ctr%3Dsbsb%7Csn%3D4389760%7Cic%3D%7Chk%3Da3cf2e3d1c45193bbfb50cd9d377033ffa09948a',
    },
    {
      name: '소프트쿨러 백',
      image:
        'https://s.pstatic.net/shopping.phinf/20240202_25/359a7332-d140-4389-9ac6-8caac181d916.jpg',
      url: 'https://smartstore.naver.com/aislingkorea/products/9805781174?NaPm=ct%3Dlsvqsqsw%7Cci%3D9e6debcadaa6dd2bd98912fa7a8443ce72975b19%7Ctr%3Dsbsb%7Csn%3D4389760%7Cic%3D%7Chk%3Dcc6f67315dc51b00978bb6bb1284759356de1aff',
    },
    {
      name: '평점4.8점! 극찬 앙투어솔레 치즈!',
      image:
        'https://s.pstatic.net/shopping.phinf/20240207_4/8b119b73-eee2-4a02-b6d2-d05e684a63f3.jpg',
      url: 'https://smartstore.naver.com/aislingkorea/products/6100556898?NaPm=ct%3Dlsvs0q4w%7Cci%3Dfa194dfac1da801080380674afbd228185fd612a%7Ctr%3Dsbsb%7Csn%3D4389760%7Cic%3D%7Chk%3D4e2bbc77f0084cb53a510dc631b568e71eb40d08',
      price: 18900,
    },
  ],
  도로시DOROCY: [
    {
      name: '랩 다이아몬드',
      image:
        'https://s.pstatic.net/shopping.phinf/20240219_8/40b2d7c5-c336-498e-a62b-e6be3a5f9225.jpg',
      url: 'https://www.dorocy.co.kr/shop/shopbrand.html?xcode=066&type=P&ref=brandshop&da_ref=Yz05clZjOWw=&utm_source=naverbrand&utm_medium=PC&utm_campaign=01&NaPm=ct%3Dlsvquhaw%7Cci%3D722d886b8fad675911d5c4192ee7ba63f99241b2%7Ctr%3Dsbsb%7Csn%3D18417%7Cic%3D%7Chk%3D79a180ba22b39bb70cec56211edc679ccf9515e7',
    },
    {
      name: '신상 초특가',
      image:
        'https://s.pstatic.net/shopping.phinf/20240219_9/60a32c61-e84a-4a3a-9211-9fa940eb94a9.jpg',
      url: 'https://www.dorocy.co.kr/?ref=brandshop&da_ref=Yz1KWUx0VE4=&utm_source=naverbrand&utm_medium=PC&utm_campaign=02&NaPm=ct%3Dlsvqv1d4%7Cci%3D073ea2f57231befed09a085dc21d8dc3d62fc3bc%7Ctr%3Dsbsb%7Csn%3D18417%7Cic%3D%7Chk%3D327957ac0c94c405aec96b17e824bc1d5f3f4f53',
      discount: 45,
    },
    {
      name: '도로시 랩다이아몬드 신상10%쿠폰',
      price: 1490000,
      image:
        'https://s.pstatic.net/shopping.phinf/20240219_10/1121bbd1-405c-448c-8543-dad4e6b79cff.jpg',
      url: 'https://www.dorocy.co.kr/?ref=brandshop&da_ref=Yz1nY1RMcFM=&utm_source=naverbrand&utm_medium=PC&utm_campaign=03&NaPm=ct%3Dlsvqvt54%7Cci%3D740f15aa6ce9e18fd54328d17306a767347dfdb4%7Ctr%3Dsbsb%7Csn%3D18417%7Cic%3D%7Chk%3D15f73917bcc61267d2a2e1e98e1cd20eb3914478',
    },
  ],
  '두닷 dodot': [
    {
      name: '오피스 의자',
      image:
        'https://s.pstatic.net/shopping.phinf/20240214_14/6980d22d-ab3e-4387-bc6a-dbafbcb8e4dd.jpg',
      url: 'https://www.dodot.co.kr/play/salesView.php?sales_id=1484&NaPm=ct%3Dlsvr083c%7Cci%3D7243a8c7a3673d93ed119ddcef42b85c38b78a45%7Ctr%3Dsbsb%7Csn%3D272628%7Cic%3D%7Chk%3D6146de04361037d984e14421d638597ce76f749d',
      discount: 21,
    },
    {
      name: '집중력 상승',
      image:
        'https://s.pstatic.net/shopping.phinf/20240215_5/5b7de068-af4f-4f99-aab7-80eb1d392eff.jpg',
      url: 'https://www.dodot.co.kr/play/salesView.php?sales_id=1484&NaPm=ct%3Dlsvr0niw%7Cci%3D1dd2beb5a3ce8ca7a7a015283f1a3b6ad9b76ff4%7Ctr%3Dsbsb%7Csn%3D272628%7Cic%3D%7Chk%3D53ada94a682bc049ba63a5e283f4918c434ba92f',
      discount: 25,
    },
    {
      name: '신학기 마지막 특가세일 +추가쿠폰',
      price: 99000,
      image:
        'https://s.pstatic.net/shopping.phinf/20240214_5/5329fd1b-69a2-40e3-a6f6-d51327e67c6a.jpg',
      url: 'https://www.dodot.co.kr/play/salesView.php?sales_id=1484&NaPm=ct%3Dlsvr161k%7Cci%3D70738fa4e46aa98d3257413d9773002991983518%7Ctr%3Dsbsb%7Csn%3D272628%7Cic%3D%7Chk%3D9e1dd142986188464d920b84fec62e4fecdd569a',
    },
  ],
};

export type ShopListData = {
  name: string;
  desc: string;
  url: string;
};

export const shopList: ShopListData[] = [
  {
    name: '수아팜',
    desc: '키즈 7부내의 전제품~50%',
    url: 'https://suafam.com/?utm_source=naver_shoppingbox&utm_medium=mallnews&NaPm=ct%3Dlsvrkl48%7Cci%3D4a7b6311438227eedb0fa0c5ebb9c2b81e9d69b4%7Ctr%3Dsbsn%7Csn%3D3692208%7Cic%3D%7Chk%3Dc525f90f030354ca72dbd0b550bd3470bb87f916',
  },
  {
    name: '린백의자',
    desc: '접이식 강의실 의자 56%↓',
    url: 'https://brand.naver.com/leanback/products/4546807190?NaPm=ct%3Dlsvrko7c%7Cci%3D769acde45a6ba5f772a8874ae6dc0ecb44623be2%7Ctr%3Dsbsn%7Csn%3D628980%7Cic%3D%7Chk%3D5c9738d9022239cb7feb8a748d1891f738482906',
  },
  {
    name: '무아스',
    desc: '가성비 인기LED시계51%↓',
    url: 'https://brand.naver.com/mooas/products/477898500?NaPm=ct%3Dlsvrksu0%7Cci%3Db6255e6b7804619457e652464a8e571d93af71fb%7Ctr%3Dsbsn%7Csn%3D158690%7Cic%3D%7Chk%3D8dd9b75e2a3299a06111eb0af260b463bb275b5e',
  },
  {
    name: '제이의옷장',
    desc: '따뜻한 봄 최대80%할인',
    url: 'https://j-closet.co.kr/?cafe_mkt=ue_shoppingnews&NaPm=ct%3Dlsvrkz08%7Cci%3D4c56caa10f065471e04623739c12549f9fa0cec0%7Ctr%3Dsbsn%7Csn%3D6944324%7Cic%3D%7Chk%3D4ac3fba97155d54fa1dd36bdeda3af3e2bbb4ba7',
  },
  {
    name: '권코낄',
    desc: '나만의 이니셜 휴대폰줄 세일',
    url: 'https://adcr.shopping.naver.com/adclk.nhn?x=sJK3b6hjzDYaZG2XpWmH%2BP%2F%2F%2Fw%3D%3Dsmd8zBqMJQLjellaiFGSaxX%2F38UQVCT4dP8NnFC0WCzvt6yxuE90alRtFYpp%2BuYPqzM2CmU%2FJAmh2ByzkbR3Ae4XpYeG8am3dcLdd%2F2qMbldIXb7RKJ8Tin6t4n2p8uv0nSbK5M8SmMlr%2BfLn43c%2B15k8327OCVmuRtqDzcwx3sS4fN3qAH6F0Jd4iVd8KKfx%2BVX3TS9XZXSGPwk5AdOHm0gXo0THlckERN22IheXQhSMHnypgMYOj%2BppYy8krfLQlSa6ZoX%2F4DOrnkM8TJEQtf7NRxJhj7peoLXgd3%2FDPC2q6yd%2BHR4M%2F0IP%2BksWdu42NMaVndKEYoYwcIcLUKSz%2FQzP9p%2BbtSK4NQi%2B%2F%2BzI7eDgm6U5aYo7o%2BfUmrQ%2BSCm0c4nLN1EhiJrSViX8m6i7iI7lmVvWWetV%2Fz%2B2N2bD2diOM4VswGeHxDp116xw15KhZLtt9Ij03Otja8bBF76CIQt4MVJhkjWETR3WjivuvlU%3D',
  },
  {
    name: '하이델로',
    desc: '존재감듬뿍 금반지 39%',
    url: 'https://adcr.shopping.naver.com/adclk.nhn?x=2jR6fSSmB7%2BFeVL9oxO%2Fjv%2F%2F%2Fw%3D%3Dsmd8zBqMJQLjellaiFGSaxX%2F38UQVCT4dP8NnFC0WCzvt6yxuE90alRtFYpp%2BuYPqzM2CmU%2FJAmh2ByzkbR3Ae4XpYeG8am3dcLdd%2F2qMbldIXb7RKJ8Tin6t4n2p8uv0nSbK5M8SmMlr%2BfLn43c%2B15k8327OCVmuRtqDzcwx3sSOB1KWyejAZmkM%2FYK%2BKDa9NLJhGVAehvKHGZ%2F7WuOlNQTHnYDCaDn88dKdQ2MXWzaMHnypgMYOj%2BppYy8krfLQlSa6ZoX%2F4DOrnkM8TJEQtf7NRxJhj7peoLXgd3%2FDPC2q6yd%2BHR4M%2F0IP%2BksWdu42NMaVndKEYoYwcIcLUKSz%2FSsPgNjsSUo0fn%2F%2BiMgsInngm6U5aYo7o%2BfUmrQ%2BSCm0FaFjVdu08ykb2oTM1tk21JhtSRrx619UHO10M4x5E%2BDAmxaonHKe2epebNjdJzLUf9Fa1m1D3mKJxYXd7TOebAt4MVJhkjWETR3WjivuvlU%3D',
  },
];

type ToBeOpenedList = {
  image: string;
  name: string;
  when: string;
  benefit: string;
};

export const toBeOpenedList: ToBeOpenedList[] = [
  {
    image:
      'https://s.pstatic.net/shopping.phinf/20240205_2/2b187de1-8c35-44cb-875e-1b1fce9601dd.jpg?type=f200',
    name: '글래드 매직랩 미니(20cmx40m) 2개+컴팩트(30cmx12.3m) 2개',
    when: '오늘오픈',
    benefit: '1+@',
  },
  {
    image:
      'https://s.pstatic.net/shopping.phinf/20240205_16/2201eb82-2832-456b-8b8b-39057f1c6796.jpg?type=f200',
    name: '먼지없는 방수 러그 2컬러+N페이 5%적립',
    when: '오늘오픈',
    benefit: '적립',
  },
  {
    image:
      'https://s.pstatic.net/shopping.phinf/20240205_3/04d7b2e9-abda-4086-8f15-a55ef3eae1fa.jpg?type=f200',
    name: '디알고하이브리드노이즈캔슬링블루투스헤드폰ANC01+헤드셋거치대',
    when: '오늘오픈',
    benefit: '1+@',
  },
  {
    image:
      'https://s.pstatic.net/shopping.phinf/20240220_25/7b1a7b7b-f17c-419a-8613-677d3cda3829.jpg?type=f200',
    name: '브라운 전기면도기 시리즈9 ProPLUS + 브라운룸슈즈',
    when: '오늘오픈',
    benefit: '1+@',
  },
  {
    image:
      'https://s.pstatic.net/shopping.phinf/20240205_24/c929e04f-8e0b-4886-8ddd-defa6d1846a1.jpg?type=f200',
    name: '제대로 담은 국내산 100% 돼지포갈비 양념 돼지갈비 2팩+2팩',
    when: '내일오픈',
    benefit: '1+1',
  },
  {
    image:
      'https://s.pstatic.net/shopping.phinf/20240205_28/9dff8872-113b-4ced-9cc0-3280dff7a3c5.jpg?type=f200',
    name: '1개+1개 바닥닿지 않는 집게 스텐조리도구 모음전 2개 세트',
    when: '내일오픈',
    benefit: '1+1',
  },
];
