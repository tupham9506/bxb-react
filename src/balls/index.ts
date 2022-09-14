import A from "./A";
import B from "./B";
import React from "react";

interface Interface {
  [index:string]: React.FC<any> | React.LazyExoticComponent<React.FC<any>>
}
const ballList: Interface = {
  A,
  B
}

export default ballList;
