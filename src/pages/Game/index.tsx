import { Stage } from '../../components/layouts/Stage';
import React, {useEffect, useRef, useState} from 'react';
import ballList from '../../balls';
import { RootState } from "../../store";
import {useDispatch, useSelector} from "react-redux";
import { setPoint } from '../../store/game';

function Game() {
  const dispatch = useDispatch();
  const player_1 = useSelector((state:RootState) => state.player_1);
  const player_2 = useSelector((state:RootState) => state.player_2);
  const player_1Ref = useRef<any>(null);
  const player_2Ref = useRef<any>(null);
  const [ gameSize, setGameSize ] = useState({ width: 0, height: 0 });
  const Player_1Component = player_1.ball ? ballList[player_1.ball] : null;
  const Player_2Component = player_2.ball ? ballList[player_2.ball] : null;
  const [isGameReady, setIsGameReady] = useState<boolean>(false);
  useEffect(() => {
    const point:number = window.innerWidth / 200;
    dispatch(setPoint(point));
    setGameSize({
      width: window.innerWidth,
      height: point * 100
    });

    document.addEventListener("keydown", _handleKeydown);
    document.addEventListener("keyup", _handleKeyup);
    document.addEventListener("keypress", _handleKeypress);

    setIsGameReady(true);
    return () => {
      document.removeEventListener("keydown", _handleKeydown);
      document.removeEventListener("keyup", _handleKeyup);
      document.removeEventListener("keypress", _handleKeypress);
    }
  }, []);

  const _handleKeydown = (event: KeyboardEvent) => {
    player_1Ref.current.onKeydown(event);
    player_2Ref.current.onKeydown(event);
  }

  const _handleKeyup = (event: KeyboardEvent) => {
    player_1Ref.current.onKeyup(event);
    player_2Ref.current.onKeyup(event);
  }

  const _handleKeypress = (event: KeyboardEvent) => {
    player_1Ref.current.onKeypress(event);
    player_2Ref.current.onKeypress (event);
  }

  return (
    <>
    {
      isGameReady ?
        <Stage width={gameSize.width} height={gameSize.height} options={{ backgroundAlpha: 0, ticker: {shared: {minFPS: 60}} }}>
          { Player_2Component ? <Player_2Component player={player_2} ref={player_2Ref} /> : null }
          { Player_1Component ? <Player_1Component player={player_1} ref={player_1Ref} /> : null }
        </Stage> :
      null
    }
        {/*<div className={'game-information'}>*/}
        {/*  <div className={'player_1 player'}>*/}
        {/*    <div>{ player_1.ball.name }</div>*/}
        {/*    <div className={'hp-bar'}>*/}
        {/*      {*/}
        {/*        player_1?.ball?.hp*/}
        {/*        ? <div className={"current"} style={{ width: `${player_1.ball.hp * 100/player_1.ball.hp}%`}} />*/}
        {/*        : null*/}
        {/*      }*/}
        {/*    </div>*/}
        {/*    <div className={'skill-list'}>*/}
        {/*      {*/}
        {/*        player_1?.ball?.skills ? player_1.ball.skills.map((item) => {*/}
        {/*          const skillImage = require('assets/balls/' + player_1.ball.id + '/skills/' + item.id + '.svg');*/}
        {/*          const keyName = player_1.ctrl[`key${item.id}`];*/}
        {/*          return (*/}
        {/*            <div key={`player_1-${item.id}`}>*/}
        {/*              <div className={'skill'}>*/}
        {/*                <img src={skillImage} alt=""/>*/}
        {/*              </div>*/}
        {/*              <div className="key clear--both">{keyName}</div>*/}
        {/*            </div>*/}
        {/*          );*/}
        {/*        }) : null*/}
        {/*      }*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className={'player_2 player'}>*/}
        {/*    <div>{ player_2.ball.name }</div>*/}
        {/*    <div className={'hp-bar'}>*/}
        {/*      {*/}
        {/*        player_2?.ball?.hp*/}
        {/*        ? <div className={"current"} style={{ width: `${player_2.ball.hp * 100/player_2.ball.hp}%`}} />*/}
        {/*        : null*/}
        {/*      }*/}
        {/*    </div>*/}
        {/*    <div className={'skill-list'}>*/}
        {/*      {*/}
        {/*        player_2?.ball?.skills ? player_2.ball.skills.map((item) => {*/}
        {/*          const skillImage = require('assets/balls/' + player_2.ball.id + '/skills/' + item.id + '.svg');*/}

        {/*          return (*/}
        {/*            <div key={`player_2-${item.id}`}>*/}
        {/*              <div className={'skill'}>*/}
        {/*                <img src={skillImage} alt=""/>*/}
        {/*              </div>*/}
        {/*              <div className="key clear--both">{player_2.ctrl['key' + item.id]}</div>*/}
        {/*            </div>*/}
        {/*          );*/}
        {/*        }) : null*/}
        {/*      }*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
    </>
  );
}

export default Game;
