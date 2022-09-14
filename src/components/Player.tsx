// import {Container, Sprite} from "@inlet/react-pixi";
// import React, {forwardRef, useEffect, useImperativeHandle, useState, KeyboardEvent, useRef} from 'react';
// import ballList from './Balls';
// import { usePlayer } from "../store/player/player_1";
//
// const Player = forwardRef((props: { playerId: number }, ref) => {
//   const player = usePlayer();
//   console.log(player);
//   const wpRef = useRef<any>(null);
//   const [containerScale, setContainerScale] = useState({x: (player?.id === 1 ? 1 : -1), y: 1});
//   const [moving, setMoving] = useState<number>(0);
//   const [movingInterval, setMovingInterval] = useState<number>(0);
//   const [jumping, setJumping] = useState<number>(0);
//   // const [jumpingInterval, setJumpingInterval] = useState<number>(0);
//   const BallComponent:any = ballList[`Ball_${player?.ball?.id}`];
//   // useEffect(() => {
//   //   if (moving) {
//   //     moveIntervalFunction();
//   //     const interval:any = setInterval(moveIntervalFunction);
//   //     setMovingInterval(interval);
//   //   }
//   // }, [moving]);
//
//   // function moveIntervalFunction () {
//   //   setData((player) => {
//   //     return {
//   //       ...player,
//   //       ball: {
//   //         ...player?.ball,
//   //         x: player?.ball.x + moving
//   //       }
//   //     }
//   //   });
//   // }
//   //
//   // useEffect(() => {
//   //   if (jumping) {
//   //     jumpIntervalFunction();
//   //     const interval:any = setInterval(jumpIntervalFunction, (1000 / Math.abs(jumping)));
//   //     setJumpingInterval(interval);
//   //   }
//   // }, [jumping]);
//
//   // function jumpIntervalFunction () {
//   //   setData((player) => {
//   //     if (((player?._ball?.y || 0) + jumping) > player?.ball.y) {
//   //       clearInterval(jumpingInterval);
//   //     }
//   //     return {
//   //       ...player,
//   //       ball: {
//   //         ...player?.ball,
//   //         y: player?.ball.y + (1000 / jumping)
//   //       }
//   //     }
//   //   });
//   // }
//
//   useImperativeHandle(ref, () => ({
//     onKeydown (event: KeyboardEvent) {
//       const key = event.key.toUpperCase();
//       if (key === player?.ctrl.left && (!moving || moving != -5)) {
//         // clearInterval(movingInterval);
//         setContainerScale({x: -1, y: 1});
//         setMoving(-5);
//       }
//       if (key === player?.ctrl.right && (!moving || moving != 5)) {
//         // clearInterval(movingInterval);
//         setContainerScale({x: 1, y: 1});
//         setMoving(5);
//       }
//     },
//     onKeyup (event: KeyboardEvent) {
//       const key = event.key.toUpperCase();
//       if (key === player?.ctrl.left || key === player?.ctrl.right && moving) {
//         clearInterval(movingInterval);
//         setMoving(0);
//       }
//     },
//     onKeypress (event: KeyboardEvent) {
//       const key = event.key.toUpperCase();
//       if (key === player?.ctrl.up && !jumping) {
//         setJumping(-100);
//       }
//       let skillId = 0;
//       if (key === player?.ctrl.key1) skillId = 1;
//       if (key === player?.ctrl.key2) skillId = 2;
//       if (key === player?.ctrl.key3) skillId = 3;
//       if (key === player?.ctrl.key4) skillId = 4;
//       if (skillId) {
//
//       }
//     }
//   }));
//
//   return (
//     <>
//       { player ?
//         // @ts-ignore
//         <Container x={player?.ball.x} y={player?.ball.y} scale={containerScale}>
//           <Sprite
//             image={ require(`assets/balls/${player?.ball.id}/ball.svg`) }
//             x={0}
//             y={0}
//             width={100}
//             height={100}
//           />
//           <Sprite
//             image={ require(`assets/balls/${player?.ball.id}/wp.svg`) }
//             x={100}
//             y={25}
//             width={50}
//             height={50}
//             ref={wpRef}
//           />
//           {/*<BallComponent player={player} />*/}
//         </Container> :
//         null
//       }
//     </>
//   )
// });
//
export default {};
