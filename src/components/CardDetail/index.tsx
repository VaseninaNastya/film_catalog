import React from "react";
import s from "./CardDetail.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import filmConstants from "../../constants/film.constants";

const CardDetail = (): JSX.Element => {
  const oneFilmData = useSelector(
    (state: RootState) => state.getOneFilmData.data
  );

  const { Title, Poster } = oneFilmData;
  return (
    <div className={s.container}>
      <div className={s.filmFullListCard}>
        <ul>
          {Object.entries(filmConstants).map((film) => {
            const [filmKey] = film;
            return (
              <li key={film[1]}>
                {film[1] === "title" ? (
                  <h2>{oneFilmData[filmKey]}</h2>
                ) : (
                  <span>
                    {film[1]}
                    {oneFilmData[filmKey]}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <div className={s.filmListCard_imgWrapper}>
          <img className={s.filmListCard_img} src={Poster} alt={Title} />
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
