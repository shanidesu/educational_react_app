import React, {useState} from 'react';
import {Switcher} from "./Switcher";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Switcher',
  component: Switcher
}

export const SwitcherOn = () => <Switcher on={true} callBackSetOn={action('clicked')}/>
export const SwitcherOff = () => <Switcher on={false} callBackSetOn={action('clicked')}/>
export const SwitcherChanging = () => {

  const [on, setOn] = useState<boolean>(false)

  return <Switcher on={on} callBackSetOn={setOn}/>
}