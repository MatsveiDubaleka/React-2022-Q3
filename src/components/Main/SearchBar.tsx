import TextField from '@mui/material/TextField';
import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { Flex } from '../../styles/Flex';
import { DataContext } from '../../utils/reducer';

const StyledSearchBar = styled(Flex)`
  margin: 20px;
  align-items: center;
`;

export const SearchBar = () => {
  const formInput = React.createRef<HTMLFormElement>();
  const dataContext = useContext(DataContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dataContext.dispatch({
      payload: formInput.current?.search.value,
      type: 'setSearchValue',
    });
  };

  return (
    <form action="" ref={formInput} onSubmit={(e) => handleSubmit(e)}>
      <StyledSearchBar>
        <TextField
          id="outlined-search"
          label="Persons of Lords of the Rings"
          type="search"
          name="search"
          sx={{
            width: '450px',
            bgcolor: '#fff',
            border: 'none',
            borderRadius: '5px',
            outline: 'none',
          }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </StyledSearchBar>
    </form>
  );
};
