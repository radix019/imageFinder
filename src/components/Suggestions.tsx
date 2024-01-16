import { Chip, Grid } from "@mui/material";
import { memo, useState } from "react";
import { useInputsContext } from "../providers/searchInput/Inputs";
import { suggestions } from "../data";

interface SuggestionsProps {
  onFetchImages: (search: string) => void;
}

const Suggestions = memo<SuggestionsProps>(({ onFetchImages }) => {
  const { updateSearchText } = useInputsContext();

  const onChipClick = (value: string) => {
    updateSearchText(value);
    onFetchImages(value);
  };
  return (
    <Grid item mt={2}>
      {suggestions.map((word) => (
        <Chip
          label={word.value}
          key={word.id}
          sx={{ marginRight: "12px", cursor: "pointer" }}
          onClick={() => {
            onChipClick(word.value);
          }}
        />
      ))}
    </Grid>
  );
});

export default Suggestions;
