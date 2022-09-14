import React from "react";
import BallMaps from '../../data/ball-maps';
import _ from 'lodash';
import styles from './style.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {Link} from "react-router-dom";
import * as player_1Dispatch from '../../store/player_1';
import * as player_2Dispatch from '../../store/player_2';

function Selection() {
  let currentBallMaps = _.clone(BallMaps);
  const dispatch = useDispatch();
  const select_1 = randomBall(currentBallMaps);
  _.remove(currentBallMaps, value => value === select_1);
  const select_2 = randomBall(currentBallMaps);
  // @ts-ignore
  const ball_1 = useSelector((state:RootState) => state[select_1]);
  // @ts-ignore
  const ball_2 = useSelector((state:RootState) => state[select_2]);
  dispatch(player_1Dispatch.setBall(select_1));
  dispatch(player_2Dispatch.setBall(select_2));

  function randomBall(array:any) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  return (
    <>
      <div className={styles.selectionContainer}>
        <div className={styles.title}>Chế độ ngẫu nhiên</div>
        <div className={styles.ballContainer}>
          <div>
            <img className={styles.ball} src={ require(`../../balls/${select_1}/images/ball.svg`) }  alt="Ball"/>
            <div className={styles.ballTitle}>{ ball_1.name }</div>
          </div>
          <div className={styles.vsText}>
            VS
          </div>
          <div>
            <img className={styles.ball} src={ require(`../../balls/${select_2}/images/ball.svg`) }  alt="Ball"/>
            <div className={styles.ballTitle}>{ ball_2.name }</div>
          </div>
        </div>
        <div>
          <Link className={`btn btn-lg ${styles.startGameButton}`} to={{ pathname: "/game"}}>Bắt đầu</Link>
        </div>
      </div>
    </>
  );
}
export default Selection;
