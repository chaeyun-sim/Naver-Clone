import { VercelRequest, VercelResponse } from '@vercel/node';
import { VITE_APP_NAVER_CLIENT_ID, VITE_APP_NAVER_CLIENT_SECRET } from '../configs';
import axios from 'axios';

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const { category } = req.query;
    let items = [];
    let queries: string[] = [];

    if (category === '0') {
      queries = ['여성', '화장', '봄'];
    } else if (category === '1') {
      queries = ['남성', '맨'];
    } else if (category === '2') {
      queries = ['원쁠딜'];
    }

    const requests = queries.map((query) =>
      axios.get('https://openapi.naver.com/v1/search/shop', {
        params: { query, display: category === '2' ? 100 : 10 },
        headers: {
          'X-Naver-Client-Id': VITE_APP_NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': VITE_APP_NAVER_CLIENT_SECRET,
        },
      }),
    );

    const responses = await Promise.all(requests);
    items = responses.flatMap((response) => response.data.items);

    items.sort(() => Math.random() - 0.5);

    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
