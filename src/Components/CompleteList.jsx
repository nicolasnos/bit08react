import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineCancelPresentation } from "react-icons/md";

function CommpleteList(studiedBone, deleteBone) {
  return (
    <div>
      hola <MdOutlineCancelPresentation style={{ color: "green" }} />{" "}
      <TiDeleteOutline style={{ color: "red" }} />
    </div>
  );
}

export default CommpleteList;
