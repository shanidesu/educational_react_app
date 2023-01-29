import React from "react";
import "./App.css";
import Header from "./react-kabzda (import & export)/components/header";
import Content from "./react-kabzda (import & export)/components/content";
import Accordion from "./react-kabzda (import & export)/components/Accordions/Accordion";
import Rating from "./react-kabzda (import & export)/components/Rating/Rating";
// Главная компонента, которая помещает в себя дочерние Header & Content (ранее созданные)
// Её мы и вызываем
function App() {
  return (
    <div>
      <Header title="Our Header_component"/>
      <Content />
      <Rating value={3}/>
      <Accordion titleValue="Заголовок аккордиона"/>
      <Rating value={5}/>
    </div>
  );
}


export default App;
