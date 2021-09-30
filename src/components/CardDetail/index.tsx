import React from "react";
import s from "./CardDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { type } from "os";
import {requestOneFilmAction} from '../../actions/getOneFilmDataAction'
import { RootState} from '../../store'
import { Link } from "react-router-dom";

const CardDetail  = () => {
  const dispatch = useDispatch();
  const oneFilmData = useSelector((state: RootState) => {
    return state.getOneFilmData.data
  });
  console.log(
    'Title', oneFilmData
  )
  const handleGetFilm = () => {
  }
  return(
    <div className={s.container}>
      <div onClick = {handleGetFilm} className={s.filmFullListCard}>
        <ul>
          <li key="1">
            <h3>{oneFilmData.Title}  </h3>
          </li>
          <li key="2">
            <span>year: {oneFilmData.Year}</span>
          </li>
          <li key="3">
            <span>type: {oneFilmData.Type}</span>
          </li>
          <li key="4">
            <span>released:{oneFilmData.Released} </span>
          </li>
          <li key="5">
            <span>runtime:{oneFilmData.Runtime} </span>
          </li>
          <li key="6">
            <span>genre:{oneFilmData.Genre} </span>
          </li>
          <li key="7">
            <span>director:{oneFilmData.Director} </span>
          </li>
          <li key="8">
            <span>actors:{oneFilmData.Actors} </span>
          </li>
          <li key="9">
            <span>plot:{oneFilmData.Plot} </span>
          </li>
          <li key="10">
            <span>country:{oneFilmData.Country} </span>
          </li>
          <li key="11">
            <span>awards:{oneFilmData.Awards} </span>
          </li>
        </ul>
        <div className={s.filmListCard_imgWrapper}>
          <img className={s.filmListCard_img} src={oneFilmData.Poster} alt={oneFilmData.Title}/>
        </div>
      </div>
    </div>

  )
}

export default CardDetail;
