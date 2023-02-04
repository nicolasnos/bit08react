import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";
const List = ({ list, setList }) => {
  const [first, setfirst] = useState([]);

  const items = list.map((item, i) => {
    return <ItemList bName={item.name} key={item.id} setList={setList} />;
  });
  return (
    <>
      <ul>{items}</ul>
    </>
  );
};

export { List };
