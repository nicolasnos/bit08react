import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ bone, setBone, list, setList }) => {
  const handleInput = (e) => {
    setBone({ id: uuidv4(), name: e.target.value, studied: bone.studied });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setList([...list, bone]);
    setBone({ id: null, name: "", studied: false });
  };

  return (
    <form onSubmit={handleSave}>
      <label htmlFor="agregar">Escribre un hueso del cuerpo humano</label>
      <input
        type="text"
        id="agregar"
        placeholder="escribe hueso"
        value={bone.name}
        onInput={handleInput}
        required
      />
      <button onClick={handleSave}>Agregar hueso</button>
    </form>
  );
};

export default Form;
