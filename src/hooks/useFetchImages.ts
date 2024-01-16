import axios from "axios";
import { useState } from "react";

const useFetchImages = () => {
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = "https://api.unsplash.com/search/photos";

  const fetchImages = async (search: string) => {
    setIsLoading(true);
    const listOfImages = await axios.get(baseUrl, {
      headers: {
        Authorization: `Client-ID HV0Pi4YWLt2F9JJDQhHh8AmOUGPmhUrnW2bSe-192lo`,
      },
      params: {
        query: search,
      },
    });
    setIsLoading(false);
    return listOfImages.data.results;
  };

  return { fetchImages, isLoading };
};
export default useFetchImages;
