import axios from 'axios';

const API_KEY = '1834798b08a04cc3a2105473d9210525';

export const fetchNewsByCountry = async (country) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
  );
  return response.data.articles;
};
