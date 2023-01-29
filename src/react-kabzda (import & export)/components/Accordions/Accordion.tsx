import React from "react";

type AccordionPropsType = {
  titleValue: string
}

function Accordion(props: AccordionPropsType) {
  return <div>
    <AccordionTitle title = {props.titleValue}/>
    <AccordionBody collapsed = {true}/>
    <div></div>
    <AccordionTitle title = {props.titleValue}/>
    <AccordionBody collapsed = {false}/>
  </div>
}



type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {
  collapsed: boolean
}


function AccordionBody(props: AccordionBodyPropsType) {
  if (props.collapsed) {
    return <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  }
  return <></>
}

export default Accordion;