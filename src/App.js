import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Components/Form";
import { List } from "./Components/List";

function App() {
  const [bone, setBone] = useState({ name: "", studied: false });
  const [list, setList] = useState([]);

  return (
    <>
      <Form bone={bone} setBone={setBone} list={list} setList={setList} />
      <List list={list} setList={setList} bone={bone} />
    </>
  );
}

export default App;
