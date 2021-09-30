import React from "react";
import s from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import fitler from "../../utils/fitler.utils";
import { RootState } from '../../store'
import { filmSortAction } from '../../actions/filmSortAction'
import { type } from "os";

const Sort = () => {
  const allFetchedFilms = useSelector((state: RootState) => {
    return state.getData.data.Search
  });

  const productsForSort = allFetchedFilms
  const dispatch = useDispatch();
  const handleSortChoise = function ({target: {value}}:any) {
    let sorted: object[] = []
    productsForSort.map((item : object)=>sorted.push(item))
    if(value !== 'without_sorting'){
      sorted = fitler(sorted, value) 
    } 
    dispatch(filmSortAction(sorted));
  };

  return (
    <div className= {s.sort_container}>
    <span className = {s.sort_title}>Sort:</span>
      <select onChange={handleSortChoise}>
        <option value="without_sorting">Without sorting</option>
        <option value="Year">Year</option>
        <option value="Title">Name</option>
        <option value="Type">Type</option>
      </select>
    </div>
  );
};

export default Sort;
