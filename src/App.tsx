import React from "react";
import "./App.css";
import Header from "./react-kabzda (import & export)/components/header";
import Content from "./react-kabzda (import & export)/components/content";

// Главная компонента, которая помещает в себя дочерние Header & Content (ранее созданные)
// Её мы и вызываем
function App() {
  return (
    <div>
      <Header />,
      <Content />,
      <Rating />,
      <Accordion />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Star() {
  return <div>Star</div>;
}

function Accordion() {
  return <div>
    <AccordionTitle />,
    <AccordionBody />,
  </div>
}

function AccordionTitle() {
  return <h3>Меню</h3>
}

function AccordionBody() {
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}
export default App;
