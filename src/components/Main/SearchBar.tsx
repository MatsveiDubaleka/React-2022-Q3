import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { Flex } from '../../styles/Flex';

const StyledSearchBar = styled(Flex)`
  margin: 20px;
  align-items: center;
`;

interface IProps {
  getData: (reg: string) => void;
}

export const SearchBar = ({ getData }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputValue ? loadData(inputValue) : console.log('No value in storage');
  };

  const loadData = (reg: string) => {
    getData(reg);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <StyledSearchBar>
        <TextField
          id="outlined-search"
          label="Persons of Lords of the Rings"
          type="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
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
