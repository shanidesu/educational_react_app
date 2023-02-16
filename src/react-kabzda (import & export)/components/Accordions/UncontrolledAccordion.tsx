import React, {useState} from "react";
import s from './UncontrolledAccordion.module.css'
type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

  let [collapsed, setCollapsed] = useState(props.collapsed)

  const collapseList = () => {
    setCollapsed(!collapsed)
  }

  return <div>
    <AccordionTitle callbackCollapse={collapseList} title = {props.titleValue}/>
    {!collapsed && <AccordionBody/>}
    <div></div>
  </div>
}



type AccordionTitlePropsType = {
  title: string
  callbackCollapse: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 className={s.title} onClick={props.callbackCollapse}>{props.title}</h3>
}


function AccordionBody() {
    return <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
}