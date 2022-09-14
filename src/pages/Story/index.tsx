import React from "react";
import {Link, useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
import {RootState} from "../../store";
import style from './style.module.css';

export default () => {
  let { id } = useParams<string>();
  let story = useSelector((state:RootState) => {
    // @ts-ignore
    return state.story[id]
  });
  return  (
    <div className={style.storyPage}>
      <div className={style.storyContainer}>
        <div className={style.storyTitle}>Chương {id}: { story.title }</div>
        <div className={style.storyContent} dangerouslySetInnerHTML={{__html: story.content}} />
      </div>
      <div className="flex-center">
        <Link className="btn btn-lg" to={{ pathname: "/"}}>Trở về</Link>
      </div>
      </div>
  )
}
