import { Search, SearchIconWrapper, StyledInputBase } from './index.view';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </Search>
);

export default SearchInput;
