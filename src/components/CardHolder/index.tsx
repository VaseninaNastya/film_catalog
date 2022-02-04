import React from "react";
import s from "./CardHolder.module.scss";
import { useSelector } from "react-redux";
import Card from "../Card";
import { RootState } from "../../store";

interface ICard {
  [propery: string]: string;
}

const CardHolder: React.FunctionComponent = () => {
  const allFetchedFilms = useSelector((state: RootState) => state.getData.data);

  const sortedFilms = useSelector(
    (state: RootState) => state.filmSort.sortedData
  );

  const response = useSelector((state: RootState) => state.getData.error);

  const isCorrectResponse =
    Boolean(Object.keys(allFetchedFilms)) &&
    allFetchedFilms.Response === "True" &&
    !response;

  const isNotCorrectResponse = allFetchedFilms.Response === "False";

  const isEmptyResponse = !Object.keys(allFetchedFilms).length && !response;

  const filmsForShow = sortedFilms.length
    ? sortedFilms
    : allFetchedFilms.Search;

  switch (true) {
    case isCorrectResponse:
      return (
        <div className={s.container}>
          <div className={s.cardHolder_container}>
            {filmsForShow.map(
              ({ imdbID, Title, Year, Type, Poster }: ICard, index: number) => {
                return (
                  <Card
                    key={index}
                    id={imdbID}
                    title={Title}
                    year={Year}
                    type={Type}
                    poster={Poster}
                  />
                );
              }
            )}
          </div>
        </div>
      );
    case isNotCorrectResponse:
      return (
        <div className={s.container}>
          <h2 className={s.cardHolder_title}>Try changing your query.</h2>
        </div>
      );
    case isEmptyResponse:
      return (
        <div className={s.container}>
          <h2 className={s.cardHolder_title}>Try to find a movie!</h2>
        </div>
      );
    default:
      return <div className={s.container}>...waiting</div>;
  }
};

export default CardHolder;
