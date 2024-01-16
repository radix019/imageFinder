import { memo } from "react";
import { UnsplashPhoto } from "../interface";
import { Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface ImageListProps {
  images: UnsplashPhoto[];
}

const ImagesContainer = memo<ImageListProps>(({ images }) => {
  return (
    <Grid container sx={{ placeItems: "center" }} spacing={2}>
      <ImageList cols={3}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
});

export default ImagesContainer;
