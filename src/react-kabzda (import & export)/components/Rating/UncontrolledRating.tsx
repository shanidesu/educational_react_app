import React from "react";
import s from './UncontrolledRating.module.css'
export type valueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
  grade: valueType
  callbackSetGrade: (value: valueType) => void
}

export const UncontrolledRating: React.FC<RatingPropsType> = (props ) => {

    return (
      <div>
        <Star callbackSetGrade={()=>{props.callbackSetGrade(1)}} selected={props.grade > 0}/>
        <Star callbackSetGrade={()=>{props.callbackSetGrade(2)}} selected={props.grade > 1}/>
        <Star callbackSetGrade={()=>{props.callbackSetGrade(3)}} selected={props.grade > 2}/>
        <Star callbackSetGrade={()=>{props.callbackSetGrade(4)}} selected={props.grade > 3}/>
        <Star callbackSetGrade={()=>{props.callbackSetGrade(5)}} selected={props.grade > 4}/>
      </div>
    )
}

type StarPropsType = {
  selected: boolean
  callbackSetGrade: () => void
}


const Star: React.FC<StarPropsType> = (props) => {

  return (
    <span className={s.star} onClick={props.callbackSetGrade}>
      {props.selected ?<b>Star </b> : "Star "}
    </span>
  )
}
