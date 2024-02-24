import { VercelRequest, VercelResponse } from '@vercel/node';
import { VITE_APP_ACCU_WEATHER_API_KEY } from '../configs';
import axios from 'axios';

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const { code } = req.query;

    if (!code) {
      res.status(400).json({ message: '위치 코드는 필수 사항입니다.' });
      return;
    }

    const params = {
      apikey: VITE_APP_ACCU_WEATHER_API_KEY,
      language: 'ko-kr',
      details: true,
    };

    const response = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${code}`,
      { params },
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
