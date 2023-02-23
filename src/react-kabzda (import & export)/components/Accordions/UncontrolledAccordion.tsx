import React from "react";
import s from './UncontrolledAccordion.module.css'
type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  callbackSetCollapsed: (value: boolean) => void
}

export const UncontrolledAccordion: React.FC<AccordionPropsType> = (props) => {

  return <div>
    <AccordionTitle callbackCollapse={() => {props.callbackSetCollapsed(!props.collapsed)}}
                    title = {props.titleValue}/>
    {!props.collapsed && <AccordionBody/>}
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