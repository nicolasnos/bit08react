import React, { useState } from "react";
import Modal from "./Modal";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

const ItemList = ({ bName, deleteBone, changeState, id }) => {
  const [modal, setModal] = useState(false);
  const changeName = () => {
    setModal(true);
  };

  return (
    <li>
      {bName}
      <span>
        <BsCheckCircle
          style={{ color: "lightgreen" }}
          onClick={() => changeState(id)}
        />
      </span>
      <MdOutlineDriveFileRenameOutline
        style={{ color: "brown" }}
        onClick={changeName}
      />
      <span>
        <TiDeleteOutline
          style={{ color: "red" }}
          onClick={() => {
            deleteBone(id);
          }}
        />
      </span>
    </li>
  );
};

export default ItemList;
