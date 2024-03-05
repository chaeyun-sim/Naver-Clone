import { useState } from 'react';
import { css } from '../../../../styled-system/css';
import { useQuery } from 'react-query';
import { getStock } from '../../../api/service';
import StockHeader from './StockHeader';
import Nasdaq from './Nasdaq';
import MostSearched from './MostSearched';

export type StockType = {
  basDt: string; // 기준일자
  clpr: string; // 종가
  fltRt: string; // 등락률
  hipr: string; // 고가
  isinCd: string; // ISIN 코드
  itmsNm: string; // 종목명
  lopr: string; // 저가
  lstgStCnt: string; // 상장주식수
  mkp: string; // 시가
  mrktCtg: string; // 시장구분
  mrktTotAmt: string; // 시가총액
  srtnCd: string; // 단축코드
  trPrc: string; // 거래대금
  trqu: string; // 거래량
  vs: string; // 대비
};

const Stock = () => {
  const [stockData, setStockData] = useState<StockType[]>([]);

  const { isLoading, refetch } = useQuery(['get-stock-data'], () => getStock(), {
    onSuccess: (data) => {
      if (data.response.body.items.item) {
        setStockData(
          data.response.body.items.item.sort(
            (a: StockType, b: StockType) => Number(b.clpr) - Number(a.clpr),
          ),
        );
      }

      if (!data && !isLoading) {
        refetch();
      }
    },
  });

  return (
    <div className={container}>
      <div className={dailyBoard}>
        <StockHeader />
        <div className={infoGroup}>
          <Nasdaq />
          <MostSearched isLoading={isLoading} data={stockData} />
        </div>
      </div>
    </div>
  );
};

export default Stock;

const container = css({
  width: '100%',
  height: '23.6rem',
  marginTop: '1.6rem',
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '0.8rem',
  boxShadow: '0 0 0 1px #e3e5e8, 0 1px 2px 0 rgba(0,0,0,.04)',
  boxSizing: 'border-box',
  display: 'block',
  '&::after': {
    content: '""',
    display: 'table',
    tableLayout: 'fixed',
    clear: 'both',
  },
});

const dailyBoard = css({
  padding: '0 1.8rem',
});

const infoGroup = css({
  borderTop: '1px solid #EBEBEB',
  position: 'relative',
  display: 'flex',
});

export const infoBox = css({
  margin: '0.9rem 0 1.4rem',
  position: 'relative',
  flex: 1,
  display: 'block',
  height: '16rem',
  width: '18rem',
  '&:nth-child(2)': {
    marginLeft: '2.5rem',
  },
});

export const stockName = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '1.5rem',
  lineHeight: '1.9rem',
});

export const typeDown = (isDisplay: boolean) =>
  css({
    backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
    backgroundSize: '44.4rem 43.4rem',
    backgroundPosition: '-13.3rem -27.2rem',
    backgroundRepeat: 'no-repeat',
    width: '0.9rem',
    height: '0.6rem',
    margin: isDisplay ? '0.8rem 0.4rem 0.1rem 0' : '0.8rem 0.4rem 0.1rem 0',
    backgroundColor: 'rgba(0,0,0,0)',
    display: 'inline-block',
  });
