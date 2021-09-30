import React, { useEffect } from "react";
import s from "./CardHolder.module.scss";
/*import { getProductListAction } from "../../actions/getProductListAction";
import { initActivePageAction } from "../../actions/paginationAction";
import { getCardProductsAction } from "../../actions/cardProductAction";
import { initNumbersOfPageAction  } from "../../actions/numbersOfPageAction";*/
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import magicNumbers from "../../constants/magicNumbers.constants";
import { RootState} from '../../store'
const CardHolder = () => {
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
console.log("sortedFilms", sortedFilms)
  if(Object.keys(allFetchedFilms).length  && allFetchedFilms.Response ==="True" && !response){
    const filmsForShow = sortedFilms.length ? sortedFilms : allFetchedFilms.Search
   return(
      <div className={s.container}>
        <div className={s.cardHolder_container}>
          {filmsForShow.map(({imdbID, Title, Year, Type, Poster}: Item)=>{
            return <Card id = {imdbID}  title = {Title} year = {Year} type = {Type} poster = {Poster}/>
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
