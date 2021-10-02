import React from "react";
import s from "./CardHolder.module.scss";
import { useSelector } from "react-redux";
import  Card  from "../Card";
import { RootState} from '../../store'
const CardHolder:React.FunctionComponent = () => {
  interface Item { imdbID: string; Title: string; Year: string; Type: string;Poster: string;}
  const allFetchedFilms = useSelector((state: RootState) => {
    return state.getData.data
  });
  const sortedFilms = useSelector((state: RootState) => {
    return state.filmSort.sortedData
  });
  const response = useSelector((state: RootState) => {
    return state.getData.error
  });
  if(Object.keys(allFetchedFilms).length  && allFetchedFilms.Response ==="True" && !response){
    const filmsForShow = sortedFilms.length ? sortedFilms : allFetchedFilms.Search
   return(
      <div className={s.container}>
        <div className={s.cardHolder_container}>
          {filmsForShow.map(({imdbID, Title, Year, Type, Poster}: Item, index:number)=>{
            return <Card key={index} id = {imdbID}  title = {Title} year = {Year} type = {Type} poster = {Poster}/>
          })}
        </div>
      </div>
    )
  } else if(allFetchedFilms.Response === "False") {
    return(
      <div className={s.container}>
        <h2 className={s.cardHolder_title}>Try changing your query.</h2>
      </div>
    )
  }else if(Object.keys(allFetchedFilms).length === 0 && response === false){
    return(
      <div className={s.container}>
        <h2 className={s.cardHolder_title}>Try to find a movie!</h2>
      </div>
    )
  } else{
    return(
      <div className={s.container}>...waiting</div>
    )
  }
};

export default CardHolder;
