import React, { useState } from 'react';
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

export const Form = () => {
  const [validation, setValidation] = useState<boolean>(false);
  const [cards, setCard] = useState<ICard[]>([]);

  const formInput = React.createRef<HTMLFormElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, surname, age, date, file, radio, checkbox, select } =
      formInput.current as HTMLFormElement & IFormElements;

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

    if (checkFormValidation(cardValue)) {
      console.log(cardValue);
      await setCard([...cards, cardValue]);
      alert('Data was saved');
    } else {
      console.log(cardValue);
      console.log('Form cant pass validation');
    }
  };

  const checkFormValidation = (inputsArray: ICard) => {
    for (const input of Object.values(inputsArray)) {
      if (input === '') {
        console.log('Empty');
        return false;
      } else {
        console.log(`${input}`, 'not empty');
      }
    }
    return true;
  };

  const checkInputValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      console.log(event.target.value);
    } else {
      setValidation(true);
    }
  };

  return (
    <>
      <form action="" ref={formInput} onSubmit={handleSubmit}>
        <Flex direction="column" gap="50px">
          <label>
            Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              onChange={(e) => checkInputValidation(e)}
            />
          </label>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Your surname"
              onChange={(e) => checkInputValidation(e)}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Your age"
              onChange={(e) => checkInputValidation(e)}
            />
          </label>
          <label>
            Date:
            <input type="date" name="date" id="date" onChange={(e) => checkInputValidation(e)} />
          </label>
          <label>
            Against War:
            <input
              type="radio"
              value="positive"
              name="radio"
              id="war"
              onChange={(e) => checkInputValidation(e)}
            />
            Agree War:
            <input
              type="radio"
              value="negative"
              name="radio"
              id="war"
              onChange={(e) => checkInputValidation(e)}
            />
          </label>
          <label>
            File:
            <input type="file" name="file" id="file" onChange={(e) => checkInputValidation(e)} />
          </label>
          <label>
            Checkbox:
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked
              onChange={(e) => checkInputValidation(e)}
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
            disabled={!validation}
            variant="contained"
          >
            Submit
          </Button>
        </Flex>
      </form>
      {cards.map((card: ICard, index: number) => (
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
};
