import React, {useState} from "react";
import s from './OnOff.module.css'


type OnOffType = {
  on: boolean
}


export const OnOff: React.FC<OnOffType> = (props) => {

  let [on, setOn] = useState(props.on)

    return (
      <div className={s.container}>
        <div
          className={s.block}
          style={{backgroundColor: on ? 'green' : 'white'}}
          onClick={() => setOn(true)}
        >ON</div>
        <div
          className={s.block}
          style={{backgroundColor: on ? 'white' : 'red'}}
          onClick={() => setOn(false)}
        >OFF</div>
        <div
          className={s.lamp}
          style={{backgroundColor: on ? 'green' : 'red'}}
        ></div>
      </div>
    )
  }

