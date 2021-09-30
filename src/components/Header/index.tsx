import { useEffect } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestFilmAction} from '../../actions/getDataAction'
import {clearFilmSortAction } from '../../actions/filmSortAction'
import cl from "classnames";
import Sort from '../Sort/index'

interface  HeaderProps {
  hideSearch: boolean,
  hideReturnToList: boolean,
  hideAboutTheTeam: boolean
}

const Header: React.FC<HeaderProps>  = ({hideSearch, hideReturnToList, hideAboutTheTeam}) => {
  const dispatch = useDispatch();
  const handleGetFilms = function({target, currentTarget }: any){
    if(target.getAttribute("id") === "search_button"){
      console.log("target1111", currentTarget.querySelector("#search_input").value)
      dispatch(clearFilmSortAction())
      dispatch(requestFilmAction(currentTarget.querySelector("#search_input").value))
    }
  }
  const inputContainerClass = cl(
    { [s.input_container_hide]: hideSearch },
    { [s.input_container]: !hideSearch }
  );
  const headerButtonClass = cl(
    { [s.header_button_hide]: hideReturnToList },
    { [s.header_button]: !hideReturnToList }
  );
  const headerAboutTheTeamButtonClass = cl(
    { [s.header_button_hide]: hideAboutTheTeam },
    { [s.header_button]: !hideAboutTheTeam }
  );

  return (
    <div className={s.container}>
      <header>
        <h2>Film catalog</h2>
        <div className={inputContainerClass} onClick = {handleGetFilms}>
          <input  id="search_input" className={s.search_input} type="text"/>
          <div className={s.header_button} id="search_button">
            Search
          </div>
          < Sort/>
        </div>
        <div className={headerButtonClass}> 
          <Link to="/">Return to list</Link>
        </div>
        <div className={headerAboutTheTeamButtonClass}> <Link to="/aboutTheTeam">About the team</Link></div>
        <div></div>
      </header>
    </div>
  );
};

export default Header;