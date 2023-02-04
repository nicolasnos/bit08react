<<<<<<< HEAD
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
=======
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>holi</p>
      <Button variant="primary">Primary</Button>
    </div>
>>>>>>> b9f20603b0cc55e6e9f5b14a8b39efad19b1b120
  );
}

export default App;
