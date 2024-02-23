export type CardData = {
  text: string;
  image: string;
  poster?: string;
  video: string;
  watchers: number;
  url: string;
  product?: {
    image: string;
    name: string;
    price: number;
    discount: number;
  };
};

export const cardData: CardData[] = [
  {
    text: '구찌 2024 가을 겨울 여성 패션쇼',
    image:
      'https://phinf.pstatic.net/dthumb/?src=https://g-selected.pstatic.net/MjAyNDAyMjNfMTQw/MDAxNzA4NjkyMDcyNjAy.OSyWookgtHVlVwqs4lHddXmhIzq3p8mg81HFFbwXSNEg.5sPz6H7hNKzfrabvZNl6yZ_egkWic_kr5R0_qWGQhgAg.JPEG/live_up1.jpg&service=shopad&type=f270_378',
    url: 'https://view.shoppinglive.naver.com/replays/1251225?tr=mblim&fm=main&sn=shoppingblock',
    poster:
      'https://phinf.pstatic.net/dthumb/?src=https://g-selected.pstatic.net/MjAyNDAyMjNfMTQw/MDAxNzA4NjkyMDcyNjAy.OSyWookgtHVlVwqs4lHddXmhIzq3p8mg81HFFbwXSNEg.5sPz6H7hNKzfrabvZNl6yZ_egkWic_kr5R0_qWGQhgAg.JPEG/live_up1.jpg&service=shopad&type=f408_616',
    video:
      'https://a01-g-naver-vod.akamaized.net/selective/c/read/v2/VOD_ALPHA/selective_2024_02_24_32/cd8c645b-d25f-11ee-8130-a0369ffdb988.mp4?__gda__=1708734481_757d41f7f74c60b6c3897cc3232c4273',
    watchers: 31899,
  },
  {
    url: 'https://view.shoppinglive.naver.com/replays/1230082?tr=mblim&fm=main&sn=shoppingblock',
    text: '[인텔 AI PC 위크] ASUS Zenbook ',
    image:
      'https://phinf.pstatic.net/dthumb/?src=https://g-selected.pstatic.net/MjAyNDAyMDhfMTc3/MDAxNzA3Mzc0MTM5NjYw.PfAzKpNU9WnkxrkWcgOoo5f8ounRBf22YM6pyi3aUH4g.Qh8X4_ldmCOSGPogxjQ11teT9PQfzN_3eFeAJfEdPGIg.PNG/live_up1.png&service=shopad&type=f270_378',
    video:
      'https://a01-g-naver-vod.akamaized.net/selective/c/read/v2/VOD_ALPHA/selective_2024_02_23_2/dd962674-d247-11ee-ac2a-e4434b2a1c7c.mp4?__gda__=1708732519_f9a846bf6955edb1ad77aed22d5483a1',
    watchers: 474524,
    product: {
      image:
        'https://phinf.pstatic.net/dthumb/?src=https://shop-phinf.pstatic.net/20240223_97/1708686131402fk8WC_JPEG/109822027133049735_1537813197.jpg&service=shopad&type=f110_110_q90',
      name: 'ASUS 젠북 14인치 OLED 인텔 코어 울트라7 AI 대학생 노트북 사무용 인강용 가벼운',
      price: 1499000,
      discount: 16,
    },
  },
  {
    url: 'https://view.shoppinglive.naver.com/replays/1230078?tr=mblim&fm=main&sn=shoppingblock',
    text: '[인텔 AI PC 위크] HP Omen Slim ',
    image:
      'https://phinf.pstatic.net/dthumb/?src=https://g-selected.pstatic.net/MjAyNDAyMDhfMTc2/MDAxNzA3Mzc0MTIwMjcw.piJxO85hNcEbnI86Kibeh8ulGmscIvqLgw3ps3lqYBMg.yy5Yg5YJtIwOvlkVcR_xb2qp09dh-RvubDKOBJcC8tYg.PNG/live_up1.png&service=shopad&type=f270_378',
    video:
      'https://a01-g-naver-vod.akamaized.net/selective/c/read/v2/VOD_ALPHA/selective_2024_02_22_26/b9c36a20-d17e-11ee-b73e-80615f0bcece.mp4?__gda__=1708727522_e0568544912014c0c66cf790eb542acc',
    watchers: 471504,
    product: {
      image:
        'https://phinf.pstatic.net/dthumb/?src=https://shop-phinf.pstatic.net/20240202_70/1706872485298a6AVB_JPEG/108008320128110668_978183718.jpg&service=shopad&type=f110_110_q90',
      name: 'HP 노트북 스펙터 x360 16인치 대학생 인강용 사무용 업무용 16-aa0005TU',
      price: 2399000,
      discount: 14,
    },
  },
  {
    text: '[블루밍데이즈] The보장데이 에버콜라겐 초특가',
    image:
      'https://phinf.pstatic.net/dthumb/?src=https://g-selected.pstatic.net/MjAyNDAyMTZfMjQz/MDAxNzA4MDY3NTc1ODUz.Mfn5PRyxIyAzfykCtIg3iOkg9_sC6TUJrtjysntP4uAg.44mzUGNfZ50CWODlELaKR-9O-IGbio4CXP5D8KzRDqUg.JPEG/image.jpg&service=shopad&type=f270_378',
    video:
      'https://a01-g-naver-vod.akamaized.net/selective/c/read/v2/VOD_ALPHA/selective_2024_02_22_22/afe2689c-d17a-11ee-b5f5-a0369ffb3a60.mp4?__gda__=1708729322_5b94fd80ce3baa64772487b9deba98e9',
    url: 'https://view.shoppinglive.naver.com/replays/1235174?tr=mblim&fm=main&sn=shoppingblock',
    watchers: 444796,
    product: {
      image:
        'https://phinf.pstatic.net/dthumb/?src=https://shop-phinf.pstatic.net/20230818_193/1692340764873fQn1y_JPEG/6054896737500007_1769648371.jpg&service=shopad&type=f110_110_q90',
      name: '에버콜라겐 인앤업비오틴 업 42주 (6주x7개) / 기능성 저분자 콜라겐 펩타이드 뉴트리 콜라겐',
      price: 291400,
      discount: 38,
    },
  },
  {
    text: '[단군마켓]셀퓨전씨 최대 77% 할인+최대증정 LIVE',
    image:
      'https://phinf.pstatic.net/dthumb/?src=https://g-selected.pstatic.net/MjAyNDAyMjBfMTgw/MDAxNzA4MzkzNjg4MzQ4.jJZypYBG-ICBPHpxiIaJVJskbI9NgsZ0m0R3MuShUPAg.CLBWO4Fm6FbdHyp9Hgj0H6IZBtvVY_B3TXXhN4QEL-Ag.PNG/live_up1.png&service=shopad&type=f270_378',
    video:
      'https://a01-g-naver-vod.akamaized.net/selective/c/read/v2/VOD_ALPHA/selective_2024_02_22_41/a8d0b28e-d137-11ee-8130-a0369ffdb988.mp4?__gda__=1708732802_1ca49d785b299f0adf5536e5880c3b6a',
    url: 'https://view.shoppinglive.naver.com/replays/1251870?tr=mblim&fm=main&sn=shoppingblock',
    watchers: 287236,
    product: {
      image:
        'https://phinf.pstatic.net/dthumb/?src=https://shop-phinf.pstatic.net/20240202_233/1706837267764lgEIf_JPEG/107973047486541484_191492830.jpg&service=shopad&type=f110_110_q90',
      name: '셀퓨전씨 레이저 UV 썬 스크린 50ml+50ml / SPF50+ PA++++',
      price: 34000,
      discount: 59,
    },
  },
  {
    text: '[️신상위크️] 쥬크 S/S 신상 특가 LIVE',
    image:
      'https://phinf.pstatic.net/dthumb/?src=https://g-selected.pstatic.net/MjAyNDAyMDhfMjY1/MDAxNzA3MzU2NzY4Nzc3.hiuF5ttYIiIIRAm4B3VXKUDKFNDCh0uGhSgpPPxIxIcg.P8FvesFyBVaWXmwwulrdLjM2c4poQcklkReozrgxJuIg.JPEG/image.jpg&service=shopad&type=f270_378',
    video:
      'https://a01-g-naver-vod.akamaized.net/selective/c/read/v2/VOD_ALPHA/selective_2024_02_22_40/919c5e24-d165-11ee-ac2a-e4434b2a1c7c.mp4?__gda__=1708730956_db3cdaeecaec7db00418836e776d0f25',
    url: 'https://view.shoppinglive.naver.com/replays/1228003?tr=mblim&fm=main&sn=shoppingblock',
    watchers: 230110,
    product: {
      image:
        'https://phinf.pstatic.net/dthumb/?src=https://shop-phinf.pstatic.net/20240216_236/17080488286371srO2_JPEG/35351512521473558_1675696129.jpg&service=shopad&type=f110_110_q90',
      name: '[신상위크][ZOOC] 디테처블 니트 카라 패딩 점퍼_Z241PSG181',
      price: 169000,
      discount: 63,
    },
  },
];
