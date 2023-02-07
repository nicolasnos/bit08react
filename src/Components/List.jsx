import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CommpleteList from "./CompleteList";

const List = ({ list, setList, setBone }) => {
  const [studied, setStudied] = useState([]);
  const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    const remainingArr = [];
    const studiedArr = [];

    for (const bone of list) {
      if (bone.studied === true) {
        studiedArr.push(bone);
      } else {
        remainingArr.push(bone);
      }
    }
    setStudied(studiedArr);
    setRemaining(remainingArr);
    console.log(studied, remaining);
  }, [list]);

  const changeState = (id) => {
    const bList = [...list];
    const indexBone = bList.findIndex((bone) => bone.id === id);
    bList[indexBone].studied = !bList[indexBone].studied;
    setList(bList);

    if (list[indexBone].studied === true) {
      setStudied(...studied, list[indexBone]);
      setRemaining(remaining);
      console.log(studied);
    }
    if (list[indexBone].studied === false) {
      const newList = list.filter((bone) => bone.id !== id);
      setRemaining(newList);
      setStudied(studied);
      console.log(newList);
    }
  };

  const deleteBone = (id) => {
    const deleted = list.filter((hueso) => hueso.id !== id);
    setRemaining(deleted);
  };

  const studiedItems = studied.map((item) => {
    return (
      <CommpleteList
        bName={item.name}
        key={item.id}
        id={item.id}
        changeState={changeState}
        deleteBone={deleteBone}
      />
    );
  });

  const items = list.map((item, i) => {
    return (
      <ItemList
        bName={item.name}
        key={item.id}
        list={list}
        setList={setList}
        id={item.id}
        changeState={changeState}
        deleteBone={deleteBone}
      />
    );
  });
  return (
    <>
      <h2>huesos no estudiados</h2>
      <ul>{items}</ul>
      <h2>huesos estudiados</h2>
      <ul>{studiedItems}</ul>
    </>
  );
};

export { List };
