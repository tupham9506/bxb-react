import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../store";
import { setPlayer } from './store';
import {Container, Sprite, useTick} from "@inlet/react-pixi";

export default forwardRef((props: { player: PlayerInterface }, ref) => {
  const dispatch = useDispatch();
  dispatch(setPlayer(props.player));
  const ball = useSelector((state: RootState) => state.A)
  const point = useSelector((state: RootState) => state.game.point);
  const [moving, setMoving] = useState<string>('');
  const [jumping, setJumping] = useState<boolean>(false);

  const [containerPosition, setContainerPosition] = useState({
    x: Math.floor((ball?.player?.x || 0) * point),
    y: Math.floor((ball?.player?.y || 0) * point)
  });

  const wpRef = useRef<any>(null);

  useTick(delta => {
    if (jumping) {
      let time = 0;
      const jumpHeight = (-1 / 2) * Math.pow(time, 2) + 20 * time;
      console.log(containerPosition.y + (jumpHeight * -1));
      setContainerPosition({
        x: containerPosition.x,
        y: containerPosition.y + (jumpHeight * -1)
      });
    }

    if (moving === ball.player?.ctrl.left) {
      setContainerPosition((containerPosition) => {
        return {
          x: containerPosition.x - (point * 2),
          y: containerPosition.y
        }
      });
    }

    if (moving === ball.player?.ctrl.right) {
      setContainerPosition((containerPosition) => {
        return {
          x: containerPosition.x + (point * 2),
          y: containerPosition.y
        }
      });
    }
  })

  useImperativeHandle(ref, () => ({
    onKeydown (event: KeyboardEvent) {
      const key = event.key.toUpperCase();
      if (key === ball.player?.ctrl.left) {
        setMoving(key);
      }
      if (key === ball.player?.ctrl.right) {
        setMoving(key);
      }
    },
    onKeyup (event: KeyboardEvent) {
      const key = event.key.toUpperCase();
      if (key === ball.player?.ctrl.left) {
        setMoving('');
      }
      if (key === ball.player?.ctrl.right) {
        setMoving('');
      }
    },
    onKeypress (event: KeyboardEvent) {
      const key = event.key.toUpperCase();
      if (key === ball.player?.ctrl.up) {
        setJumping(true);
      }
    }
  }));

  return (
    <>
      {
        // @ts-ignore
        <Container x={ containerPosition.x } y={ containerPosition.y } scale={ ball.player.scale }>
          <Sprite
            image={ require('./images/ball.svg').default }
            x={ 0 }
            y={ 0 }
            width={10 *point}
            height={10 *point}
          />
          <Sprite
            image={ require('./images/wp.svg').default }
            x={10 *point}
            y={2.5 *point}
            width={5 *point}
            height={5 *point}
            ref={wpRef}
          />
        </Container>
      }
    </>
  )
});
