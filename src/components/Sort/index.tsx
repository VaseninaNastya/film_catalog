import React from "react";
import s from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import fitler from "../../utils/fitler.utils";
import { RootState } from '../../store'
import { filmSortAction } from '../../actions/filmSortAction'

const Sort:React.FunctionComponent = () => {
  const allFetchedFilms = useSelector((state: RootState) => {
    return state.getData.data
  });
  const errorRequest = useSelector((state: RootState) => {
    return state.getData.error
  });
  const wrongRequest = useSelector((state: RootState) => {
    return state.getData.data.Response
  });
  const disabledSelect:boolean = errorRequest === true || allFetchedFilms.length === 0 || wrongRequest==="False" ? true : false
  
  const productsForSort = allFetchedFilms.Search
  type sortetType = ReturnType <typeof allFetchedFilms.Search>
  const dispatch = useDispatch();
  const handleSortChoise = function ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) {
    let sorted:sortetType = []
    productsForSort.map((item : Record <string, unknown>) => sorted.push(item))
    if(value !== 'without_sorting'){
      sorted = fitler(sorted, value) 
    } 
    
    dispatch(filmSortAction(sorted));
  };
  return (
    <div className= {s.sort_container}>
    <span className = {s.sort_title}>Sort:</span>
      <select disabled ={disabledSelect} onChange={handleSortChoise}>
        <option value="without_sorting">Without sorting</option>
        <option value="Year">Year</option>
        <option value="Title">Name</option>
        <option value="Type">Type</option>
      </select>
    </div>
  );
};

export default Sort;
