import { Grid, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import { memo } from "react";
import { useInputsContext } from "../providers/searchInput/Inputs";

interface SearchBarProps {
  onFetchImages: (search: string) => void;
  loading: boolean;
}
const SearchBar = memo<SearchBarProps>(({ onFetchImages, loading }) => {
  const { searchText, updateSearchText } = useInputsContext();

  const onSearchClick = () => {
    onFetchImages(searchText);
  };
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFetchImages(searchText);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Grid container justifyContent={"flex-start"} spacing={2} mt={1.5}>
        <Grid item xs={12} lg={8} md={8}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Find Images"
            variant="outlined"
            placeholder="e.g Car"
            value={searchText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              // updating value after removing numbers from the text
              updateSearchText(event.target.value.replace(/[0-9]/, ""))
            }
          />
        </Grid>
        <Grid item sm={12} lg={4} md={4}>
          <LoadingButton
            fullWidth
            loading={loading}
            startIcon={<SearchIcon />}
            variant="contained"
            onClick={onSearchClick}
            sx={{ padding: "15px" }}
          >
            Search
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
});

export default SearchBar;
