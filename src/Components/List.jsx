import React from "react";
import { useState, useEffect } from "react";
const List = ({ bone, list, setList }) => {
  const [first, setfirst] = useState([]);
  console.log(list);
  return (
    <>
      <ol>hola</ol>;
      <input type="button" value="cambiar nombre" />
      <input type="button" value="eliminar" />
    </>
  );
};

export { List };
