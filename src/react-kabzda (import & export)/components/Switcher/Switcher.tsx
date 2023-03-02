import React from "react";
import s from './Switcher.module.css'


type OnOffType = {
  on: boolean
  callBackSetOn?: (value: boolean) => void
}

export const Switcher: React.FC<OnOffType> = (props) => {

    return (
      <div className={s.container}>
        <div
          className={s.block}
          style={{backgroundColor: props.on ? 'green' : 'white'}}
          onClick={() => props.callBackSetOn?.(true)}
        >ON</div>

        <div
          className={s.block}
          style={{backgroundColor: props.on ? 'white' : 'red'}}
          onClick={() => props.callBackSetOn?.(false)}
        >OFF</div>

        <div
          className={s.lamp}
          style={{backgroundColor: props.on ? 'green' : 'red'}}
        ></div>
      </div>
    )
  }

