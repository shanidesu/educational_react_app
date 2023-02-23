import React, {useState} from "react";
import "./App.css";
import Header from "./react-kabzda (import & export)/components/header";
import Content from "./react-kabzda (import & export)/components/content";
import {UncontrolledAccordion} from "./react-kabzda (import & export)/components/Accordions/UncontrolledAccordion";
import {UncontrolledRating, valueType} from "./react-kabzda (import & export)/components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./react-kabzda (import & export)/components/OnOff/UncontrolledOnOff";


function App() {

  let [grade, setGrade] = useState<valueType>(0)
  let [collapsed, setCollapsed] = useState<boolean>(true)
  let [on1, setOn1] = useState<boolean>(false)
  let [on2, setOn2] = useState<boolean>(true)

  return (
    <div>
      <Header title="Our Header_component"/>
      <Content />
      <UncontrolledRating grade={grade} callbackSetGrade={setGrade}/>
      <UncontrolledAccordion titleValue="Заголовок аккордиона"
                             collapsed={collapsed}
                             callbackSetCollapsed={setCollapsed}/>

      <UncontrolledOnOff on={on1} callBackSetOn={setOn1}/>
      <UncontrolledOnOff on={on2} callBackSetOn={setOn2}/>
    </div>
  );
}


export default App;
