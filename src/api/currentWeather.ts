import { VercelRequest, VercelResponse } from '@vercel/node';
import { VITE_APP_OPEN_WEATHER_API_KEY } from '../configs';
import axios from 'axios';

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      res.status(400).json({ message: '위도와 경도는 필수 사항입니다.' });
      return;
    }

    const params = {
      appid: VITE_APP_OPEN_WEATHER_API_KEY,
      lat: lat,
      lon: lon,
      lang: 'kr',
      units: 'metric',
    };

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, { params });

    res.status(200).json(response.data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
