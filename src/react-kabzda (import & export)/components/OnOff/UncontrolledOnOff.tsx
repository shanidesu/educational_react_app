import React from "react";
import s from './UncontrolledOnOff.module.css'


type OnOffType = {
  on: boolean
  callBackSetOn: (value: boolean) => void
}


export const UncontrolledOnOff: React.FC<OnOffType> = (props) => {

    return (
      <div className={s.container}>
        <div
          className={s.block}
          style={{backgroundColor: props.on ? 'green' : 'white'}}
          onClick={() => props.callBackSetOn(!props.on)}
        >ON</div>

        <div
          className={s.block}
          style={{backgroundColor: props.on ? 'white' : 'red'}}
          onClick={() => props.callBackSetOn(!props.on)}
        >OFF</div>

        <div
          className={s.lamp}
          style={{backgroundColor: props.on ? 'green' : 'red'}}
        ></div>
      </div>
    )
  }

