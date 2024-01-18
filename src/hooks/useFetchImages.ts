import axios from "axios";
import { useState } from "react";
import { getApiUrl, getClientId } from "../env";
import { useInputsContext } from "../providers/searchInput/Inputs";

const useFetchImages = () => {
  const { updateSearchText } = useInputsContext();
  const [isLoading, setIsLoading] = useState(false);
  const fetchImages = async (search: string) => {
    setIsLoading(true);
    const listOfImages = await axios.get(getApiUrl(), {
      headers: {
        Authorization: `Client-ID ${getClientId()}`,
      },
      params: {
        query: search,
      },
    });
    setIsLoading(false);
    updateSearchText("");
    return listOfImages.data.results;
  };

  return { fetchImages, isLoading };
};
export default useFetchImages;
