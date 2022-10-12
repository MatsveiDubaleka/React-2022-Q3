import React, { Component, PropsWithChildren } from 'react';
import { Button } from '@mui/material';
import { Flex } from '../../styles/Flex';
import { Card } from './Card/Card';

interface ICard {
  name: string;
  surname: string;
  age: string;
  date: string;
  file: string;
  radio: string;
  checkbox: boolean;
  select: string;
}

type IFormElements = {
  name: HTMLInputElement;
  surname: HTMLInputElement;
  age: HTMLInputElement;
  date: HTMLInputElement;
  file: HTMLInputElement;
  radio: HTMLInputElement;
  checkbox: HTMLInputElement;
  select: HTMLSelectElement;
};

type IData = {
  validation: boolean;
  data: Array<ICard>;
};

export class Form extends Component<PropsWithChildren, IData> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      validation: false,
      data: [],
    };
  }

  formInput = React.createRef<HTMLFormElement>();

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, surname, age, date, file, radio, checkbox, select } = this.formInput
      .current as HTMLFormElement & IFormElements;

    const cardValue = {
      name: name?.value,
      surname: surname?.value,
      age: age?.value,
      date: date?.value,
      file: file?.value,
      radio: radio?.value,
      checkbox: checkbox?.checked,
      select: select?.value,
    };

    await this.setState(({ data }: IData) => {
      const res = data.concat(cardValue);
      return { data: [...res] };
    });

    alert('Data was saved');
  }

  checkValidation(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    if (event.target.value === '') {
      console.log(event.target.value);
      console.log(this.state.validation);
    } else {
      this.setState({
        validation: true,
      });
    }
  }

  render() {
    return (
      <>
        <form action="" ref={this.formInput} onSubmit={this.handleSubmit}>
          <Flex direction="column" gap="50px">
            <label>
              Name:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={(e) => this.checkValidation(e)}
              />
            </label>
            <label>
              Surname:
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Your surname"
                onChange={(e) => this.checkValidation(e)}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Your age"
                onChange={(e) => this.checkValidation(e)}
              />
            </label>
            <label>
              Date:
              <input type="date" name="date" id="date" onChange={(e) => this.checkValidation(e)} />
            </label>
            <label>
              Against War:
              <input
                type="radio"
                value="positive"
                name="radio"
                id="war"
                onChange={(e) => this.checkValidation(e)}
              />
              Agree War:
              <input
                type="radio"
                value="negative"
                name="radio"
                id="war"
                onChange={(e) => this.checkValidation(e)}
              />
            </label>
            <label>
              File:
              <input type="file" name="file" id="file" onChange={(e) => this.checkValidation(e)} />
            </label>
            <label>
              Checkbox:
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked
                onChange={(e) => this.checkValidation(e)}
              />
            </label>
            <select name="select" id="select">
              <option value="Man">Man</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <Button
              type="submit"
              onClick={(e) => e.preventDefault}
              disabled={!this.state.validation}
              variant="contained"
            >
              Submit
            </Button>
          </Flex>
        </form>
        {this.state.data.map((card: ICard, index: number) => (
          <Card
            key={index}
            name={card.name}
            surname={card.surname}
            age={card.age}
            date={card.date}
            file={card.file}
            radio={card.radio}
            checkbox={card.checkbox}
            select={card.select}
          />
        ))}
      </>
    );
  }
}
