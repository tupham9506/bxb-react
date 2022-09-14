import { Link }  from "react-router-dom";
import React from 'react';
import style from './style.module.css';

export default () => {
  return (
    <>
      <div className="flex flex-column h-100 relative">
        <div className={style.header}>
          <div className={style.title}>Ball x balL</div>
          <img className={style.logo} src={require('../../assets/icons/maze-cornea.svg').default} alt=""/>
        </div>
        <div className={style.menu}>
          <Link className={`btn ${style.btn}`} to={{ pathname: "/selection"}}>Bắt đầu</Link>
          <Link className={`btn ${style.btn}`} to={{ pathname: "/story/1"}}>Cốt truyện</Link>
        </div>
        <div className={style.version}>Phiên Bản Lỗi</div>
      </div>
    </>
  );
}

