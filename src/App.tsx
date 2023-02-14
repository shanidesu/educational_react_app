import React from "react";
import "./App.css";
import Header from "./react-kabzda (import & export)/components/header";
import Content from "./react-kabzda (import & export)/components/content";
import {UncontrolledAccordion} from "./react-kabzda (import & export)/components/Accordions/UncontrolledAccordion";
import {Rating} from "./react-kabzda (import & export)/components/Rating/Rating";
import {OnOff} from "./react-kabzda (import & export)/components/OnOff/OnOff";


function App() {
  return (
    <div>
      <Header title="Our Header_component"/>
      <Content />
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      <Rating value={3}/>
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <UncontrolledAccordion titleValue="Заголовок аккордиона" collapsed={true}/>
      <UncontrolledAccordion titleValue="Заголовок аккордиона" collapsed={true}/>
      <OnOff on={true}/>
      <OnOff on={false}/>
    </div>
  );
}


export default App;
