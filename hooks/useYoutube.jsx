import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useYoutube = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: query || 'all',
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '50',
          order: 'date',
        },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_API_KEY,
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        },
      };

      try {
        setIsLoading(true);
        const response = await axios(options);
        setData(response.data.items);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query]); // Include query in the dependency array

  return { isLoading, data };
};

export default useYoutube;
