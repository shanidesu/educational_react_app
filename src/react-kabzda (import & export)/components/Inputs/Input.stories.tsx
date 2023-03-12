import {ChangeEvent, useRef, useState} from "react";


export default {
  title: 'Input',
}


export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')

  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }

  return (
    <>
      <input onChange={onChangeHandler}/> - {value}
    </>
  )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickSaveValue = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={onClickSaveValue}>save</button> - actuel value: {value}
    </>
  )
}
