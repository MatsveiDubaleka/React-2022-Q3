import TextField from '@mui/material/TextField';
import React from 'react';
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

interface IProps {
  getData: (regex: string) => void;
}

export class SearchBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ value: e.target.value });
    localStorage.setItem('inputValue', e.target.value);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('form submitted ✅');
    const storageInputValue = localStorage.getItem('inputValue');
    console.log(storageInputValue);
    storageInputValue ? this.props.getData(storageInputValue) : console.log('No value in storage');
  };

  componentDidMount = (): void => {
    const storageInputValue = localStorage.getItem('inputValue');
    !storageInputValue ? console.log('LocalStorage is empty') : console.log(storageInputValue);
  };

  componentWillUnmount = () => {
    localStorage.setItem('inputValue', '');
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <StyledSearchBar>
          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </StyledSearchBar>
      </form>
    );
  }
}
