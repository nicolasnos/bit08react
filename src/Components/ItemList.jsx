import React from "react";

const ItemList = ({ bName, setList }) => {
  const changeName = () => {
    console.log(bName);
  };

  const deleteBone = () => {
    console.info(bName);
  };

  return (
    <li>
      {bName}
      <input type="checkbox" name="" id="" />
      <input type="button" value="cambiar nombre" onClick={changeName} />
      <input type="button" value="eliminar" onClick={deleteBone} />
    </li>
  );
};

export default ItemList;
