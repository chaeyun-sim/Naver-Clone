import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import { VITE_APP_ACCU_WEATHER_API_KEY } from '../configs';

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      res.status(400).json({ message: '위도와 경도는 필수사항입니다.' });
      return;
    }

    const params = {
      apikey: VITE_APP_ACCU_WEATHER_API_KEY,
      q: `${latitude},${longitude}`,
      language: 'ko-kr',
    };

    const response = await axios.get(
      'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
      { params },
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
