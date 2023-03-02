import React, {useState} from 'react';
import {Rating, valueType} from "./Rating";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Rating',
  component: Rating
}


export const EmptyRating = () => <Rating grade={0} callbackSetGrade={action('star0')}/>
export const Rating1 = () => <Rating grade={1} callbackSetGrade={action('star1')}/>
export const Rating2 = () => <Rating grade={2} callbackSetGrade={x => x}/>
export const Rating3 = () => <Rating grade={3} callbackSetGrade={x => x}/>
export const Rating4 = () => <Rating grade={4} callbackSetGrade={x => x}/>
export const Rating5 = () => <Rating grade={5} callbackSetGrade={x => x}/>
export const ChangeRating = () => {

  const [grade, setGrade] = useState<valueType>(0)
  return <Rating grade={grade} callbackSetGrade={setGrade}/>
}