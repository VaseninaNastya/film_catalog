import { useEffect } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestFilmAction, getRequestValueAction } from '../../actions/getDataAction'
import cl from "classnames";
const Header = () => {
  const dispatch = useDispatch();
  const handleGetFilm = function({target, currentTarget }: any){
    if(target.getAttribute("id") === "search_button"){
      console.log("target1111", currentTarget.querySelector("#search_input").value)
      dispatch(getRequestValueAction(currentTarget.querySelector("#search_input").value))
      dispatch(requestFilmAction(currentTarget.querySelector("#search_input").value))
      
    }

  }



  return (
    <div className={s.container}>
      <header>
        <h2>Film catalog</h2>
        <div className={s.input_container} onClick = {handleGetFilm}>
          <input  id="search_input" className={s.search_input} type="text"/>
          <div id="search_button" className={s.search_button} >
            Search
          </div>
        </div>
        <div>About the team</div>
      </header>
    </div>
  );
};

export default Header;
