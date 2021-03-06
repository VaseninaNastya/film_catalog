import React from "react";
import s from "./Card.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestOneFilmAction } from "../../actions/getOneFilmDataAction";
interface CardProps {
  id: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  year,
  type,
  poster,
}: CardProps) => {
  const dispatch = useDispatch();
  const handleGetFilm = ({
    currentTarget,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const result = currentTarget.getAttribute("id");
    dispatch(requestOneFilmAction(result));
  };
  return (
    <Link to="/film">
      <div id={id} onClick={handleGetFilm} className={s.filmListCard}>
        <ul className={s.filmListCard_header}>
          <li key={title}>
            <h3>{title}</h3>
          </li>
          <li key={year}>
            <span>year: {year}</span>
          </li>
          <li key={type}>
            <span>type: {type}</span>
          </li>
        </ul>
        <div className={s.filmListCard_imgWrapper}>
          <img className={s.filmListCard_img} src={poster} alt={title} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
