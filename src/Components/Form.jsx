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

/*techmahindra:
julian paloma: resource manager
+ 90 paises
120 personas en colombia,
comparte informacion con nuevos ingenieros, ayuda a buscar caminos para desarrollarse mejor.
participacion: talleres, panels, hackatoon,
areas: desarollo, automatizacion, devops, analisis de datos
proceso de seleccion:
1. revision de vacantes, envio hv, pre seleccion, entrevista, negociacion, contrato (15 dias)
realocation (despues de un año) jp00859390@techmahindra.com


Publicist group:
de paris, 1926, 85.000 global, 900 colombia
trabajar en equipo, trabajaconnosotros@publicisgroupe.com

Zemoga, Colombia:
clientes US, 500 personas, oficinas en principal, colombia
front end: js, react, pm, 
ayuda al front end
camila.rodriguez@zemoga.com <---- aqui pueden enviar su cv para el trainee (practica laboral)
https://www.linkedin.com/company/zemoga/jobs/ aqui pueden ver nuestras vacantes

headhunter https://www.the-bonding.com/#/*/
