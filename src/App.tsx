import { Container } from "@mui/material";
import useFetchImages from "./hooks/useFetchImages";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { UnsplashPhoto } from "./interface";
import ImagesContainer from "./components/ImagesContainer";
import Suggestions from "./components/Suggestions";

function App() {
  const [imagesData, setImagesData] = useState<UnsplashPhoto[]>([]);
  const { fetchImages, isLoading } = useFetchImages();

  const onFetchImages = async (search: string) => {
    const data = await fetchImages(search);
    setImagesData(data);
  };
  return (
    <Container maxWidth="lg" sx={{ marginBottom: "24px" }}>
      <SearchBar onFetchImages={onFetchImages} loading={isLoading} />
      <Suggestions onFetchImages={onFetchImages} />
      {imagesData.length !== 0 && (
        <p>We have found {imagesData.length} images!</p>
      )}
      <ImagesContainer images={imagesData} />
    </Container>
  );
}

export default App;
