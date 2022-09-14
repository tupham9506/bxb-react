import {Sprite} from "@inlet/react-pixi";
import React from "react";

const Ball_2 = () => {
  return (
    <>
      <Sprite
        image={ require(`assets/balls/1/skills/1_fire.svg`).default }
        x={0}
        y={25}
        width={50}
        height={50}
      />
    </>
  );
}

export default Ball_2;
