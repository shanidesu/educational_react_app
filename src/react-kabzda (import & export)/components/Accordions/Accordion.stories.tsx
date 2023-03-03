import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {ComponentStory} from "@storybook/react";

export default {
  title: 'Accordion',
  component: Accordion,
}

const callbackAction = action('collapsed or not')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>
const Template2: ComponentStory<typeof Accordion> = ({titleValue}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const cb = (value: boolean) => {
    setCollapsed(value)
    callbackAction(value)
  }

 return <Accordion  titleValue={titleValue} collapsed={collapsed} callbackSetCollapsed={cb}/>
}

export const AccordionClosed = Template.bind({})
export const AccordionOpened = Template.bind({})
export const AccordionToggle = Template2.bind({})
//
AccordionClosed.args = {
  titleValue: 'AccordionClosed',
  collapsed: true,
  callbackSetCollapsed: callbackAction
}
AccordionOpened.args = {
  titleValue: 'AccordionOpened',
  collapsed: false,
  callbackSetCollapsed: callbackAction
}

AccordionToggle.args = {
  titleValue: 'AccordionToggle'
}
// export const CollapsedAcc = () => <Accordion titleValue={"Menu"} collapsed={true} callbackSetCollapsed={callbackAction}/>
// export const UncollapsedAcc = () => <Accordion titleValue={"User"} collapsed={false} callbackSetCollapsed={callbackAction}/>
// export const AccChanging = () => {
//
//   const [collapsed, setCollapsed] = useState<boolean>(true)
//   return <Accordion titleValue={"Our list"} collapsed={collapsed} callbackSetCollapsed={setCollapsed}/>
// }