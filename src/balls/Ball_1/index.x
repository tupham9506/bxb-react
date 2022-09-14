import {Sprite} from "@inlet/react-pixi";
import React, {useEffect, useState} from "react";

function Ball_1 (props:{ data: PLAYER, other: PLAYER })  {
  const [data, setData] = useState<PLAYER>(props.data);
  const [skill1, setSkill1] = useState({x: 100, y: 25});
  const [skill1Interval, setSkill1Interval] = useState();

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    if (data.ball.skill_id) {
      const skill1Interval = setInterval(() => {
        setSkill1( (data) => {
          return {
            ...data,
            x: data.x+10
          }
        });
      });
    }
  }, [data.ball.skill_id])

  return (
    <>
      <Sprite
        image={ require(`assets/balls/1/skills/1_fire.svg`).default }
        x={skill1.x}
        y={skill1.y}
        width={50}
        height={50}
        visible={data?.ball?.skill_id === 1}
      />
    </>
  );
}

export default Ball_1;
