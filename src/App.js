import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Components/Form";
import { List } from "./Components/List";

function App() {
  const [bone, setBone] = useState({ name: "", added: false });
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(bone.name);
  }, [bone]);

  return (
    <>
      <Form bone={bone} setBone={setBone} list={list} setList={setList} />
      <List list={list} setList={setList} bone={bone} />
    </>
  );
}

export default App;
