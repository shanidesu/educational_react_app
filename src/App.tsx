import React, {useState} from "react";
import "./App.css";
import Header from "./react-kabzda (import & export)/components/header";
import Content from "./react-kabzda (import & export)/components/content";
import {Accordion} from "./react-kabzda (import & export)/components/Accordions/Accordion";
import {Rating, valueType} from "./react-kabzda (import & export)/components/Rating/Rating";
import {Switcher} from "./react-kabzda (import & export)/components/Switcher/Switcher";


function App() {

  let [grade, setGrade] = useState<valueType>(0)
  let [collapsed, setCollapsed] = useState<boolean>(true)
  let [on1, setOn1] = useState<boolean>(false)
  let [on2, setOn2] = useState<boolean>(true)

  return (
    <div>
      <Header title="Our Header_component"/>
      <Content />
      <Rating grade={grade} callbackSetGrade={setGrade}/>
      <Accordion titleValue="Заголовок аккордиона"
                 collapsed={collapsed}
                 callbackSetCollapsed={setCollapsed}/>

      <Switcher on={on1} callBackSetOn={setOn1}/>
      <Switcher on={on2} callBackSetOn={setOn2}/>
    </div>
  );
}


export default App;
