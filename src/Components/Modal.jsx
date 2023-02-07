import React from "react";

const Modal = ({ list, setList, bone, setBone }) => {
  const newName = (e) => {
    setBone({ id: list.id, name: e.target.value, studied: list.studied });
  };

  const refreshBone = () => {
    console.log(bone);
  };
  console.log();
  return (
    <>
      <input type="text" placeholder={list[0].name} onChange={newName} />
      <input type="button" value="actualizar" onClick={refreshBone} />
      <input type="button" value="descartar cambios" />
    </>
  );
};

export default Modal;
