import { useEffect } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmAction } from '../../actions/getDataAction'
import cl from "classnames";
const Header = () => {
  const dispatch = useDispatch();
  const handleGetFilm = function(){
    console.log("itsWork")
    dispatch(fetchFilmAction())
  }



  return (
    <div className={s.container}>
      <header>
        <h2>Film catalog</h2>
        <div className={s.input_container}>
          <input className={s.search_input} type="text"/>
          <div className={s.search_button}  onClick = {handleGetFilm}>
            Search
          </div>
        </div>
        <div>About the team</div>
      </header>
    </div>
  );
};

export default Header;
