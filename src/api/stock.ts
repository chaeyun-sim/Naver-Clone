import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import { VITE_APP_STOCK_API_KEY } from '../configs';

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const params = {
      serviceKey: VITE_APP_STOCK_API_KEY,
      numOfRows: 30,
      resultType: 'json',
    };

    const response = await axios.get(
      'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo',
      { params },
    );

    res.status(200).json(response.data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
