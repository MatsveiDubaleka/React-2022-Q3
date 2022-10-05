import TextField from '@mui/material/TextField';
import React, { PropsWithChildren } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { Flex } from '../../styles/Flex';

const StyledSearchBar = styled(Flex)`
  align-items: center;
`;

interface IState {
  value?: string;
}

export class SearchBar extends React.Component<PropsWithChildren, IState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  };

  componentDidMount = (): void => {
    const storageInputValue = localStorage.getItem('inputValue');
    !storageInputValue ? console.log('nothing') : console.log(storageInputValue);
  };

  componentWillUnmount = () => {
    localStorage.setItem('inputValue', '');
  };

  render() {
    return (
      <StyledSearchBar>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          // value={this.state.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </StyledSearchBar>
    );
  }
}
