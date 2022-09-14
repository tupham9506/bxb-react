import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../store";
import {Container, Sprite, useTick} from "@inlet/react-pixi";
import { setPlayer } from "./store";

export default forwardRef((props: { player: PlayerInterface }, ref) => {
  const dispatch = useDispatch();
  dispatch(setPlayer(props.player));
  const ball = useSelector((state: RootState) => state.B)
  const point = useSelector((state: RootState) => state.game.point);
  const [moving, setMoving] = useState<string>('');

  const [containerPosition, setContainerPosition] = useState({
    x: (ball.player?.x || 0) * point,
    y:  (ball.player?.y || 0) * point
  });

  useTick(delta => {
    if (moving === ball.player?.ctrl.left) {
      setContainerPosition((containerPosition) => {
        return {
          x: containerPosition.x - (point * delta),
          y: containerPosition.y
        }
      });
    }

    if (moving === ball.player?.ctrl.right) {
      setContainerPosition((containerPosition) => {
        return {
          x: containerPosition.x + (point * delta),
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
        setContainerPosition((containerPosition) => {
          return {
            x: containerPosition.x,
            y: containerPosition.y - (point * 10)
          }
        });
      }
    }
  }));
  const wpRef = useRef<any>(null);

  return (
    <>
      {
        point > 0 ?
        // @ts-ignore
        <Container x={ containerPosition.x } y={ containerPosition.y } scale={ ball.player.scale }>
          <Sprite
            image={ require('./images/ball.svg').default }
            x={ 0 }
            y={ 0 }
            width={10*point}
            height={10*point}
          />
          <Sprite
            image={ require('./images/wp.svg').default }
            x={10*point}
            y={2.5*point}
            width={5*point}
            height={5*point}
            ref={wpRef}
          />
        </Container>
        : null
      }
    </>
  )
});
