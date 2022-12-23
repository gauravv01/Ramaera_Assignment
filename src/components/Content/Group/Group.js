import React from "react";
import constants from "../../../Data/Constants/Constants";
import BoxImage from "../BoxImage/BoxImage";
import Polygon from "../../../Data/img/Polygon.png";
import "./Group.css";

function Group() {
  return (
    <div>
      <BoxImage src={Polygon} />
      <div className="group-outer">
        <h2>{constants.THE_RAMAERA_EXPANSION}</h2>
        <p>{constants.GROUP_BOTTOMLINE}</p>
      </div>
    </div>
  );
}

export default Group;
