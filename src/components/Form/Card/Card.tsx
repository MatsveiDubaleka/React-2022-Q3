import React from 'react';

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

export const Card: React.FC<ICard> = (props) => {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Surname: {props.surname}</p>
      <p>Age: {props.age}</p>
      <p>Date: {props.date}</p>
      <p>File: {props.file}</p>
      <p>Checkbox: {props.checkbox}</p>
      <p>Radio: {props.radio}</p>
      <p>Select: {props.select}</p>
    </>
  );
};
