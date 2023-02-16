import React, {useState} from "react";
import s from './Rating.module.css'
type valueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  value: valueType
}

export const Rating = (props: RatingPropsType) => {

  let [grade, setGrade] = useState(props.value)

  const selectRating = (value:valueType) => {setGrade(value)}


    return (
      <div>
        <Star value={1} callbackRating={selectRating} selected={grade > 0}/>
        <Star value={2} callbackRating={selectRating} selected={grade > 1}/>
        <Star value={3} callbackRating={selectRating} selected={grade > 2}/>
        <Star value={4} callbackRating={selectRating} selected={grade > 3}/>
        <Star value={5} callbackRating={selectRating} selected={grade > 4}/>
      </div>
    )
}

type StarPropsType = {
  selected: boolean
  value: valueType
  callbackRating: (value:valueType) => void
}


function Star(props: StarPropsType) {

  const onClickHandler = () => {props.callbackRating(props.value)}

  return props.selected
    ? <span className={s.star} onClick={onClickHandler}><b>Star </b></span>
    : <span className={s.star} onClick={onClickHandler}>Star </span>
}
