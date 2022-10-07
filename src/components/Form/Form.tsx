import React, { Component, PropsWithChildren } from 'react';
import {
  Button,
  TextField,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { Flex } from '../../styles/Flex';

export class Form extends Component<PropsWithChildren> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputRef = React.createRef<HTMLInputElement>();
  fileInput = React.createRef<HTMLInputElement>();

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <Flex direction={'column'} gap={'50px'}>
            <TextField type="text" ref={this.inputRef} />
            <TextField type="date" ref={this.inputRef} />
            <TextField type="select" ref={this.inputRef} />
            <input type="file" ref={this.fileInput} />
            <Checkbox />
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                sx={{ width: '100px' }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained">Submit</Button>
          </Flex>
        </form>
      </>
    );
  }
}
