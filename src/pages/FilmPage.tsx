import React from "react";
import Header from '../components/Header'
import CardDetail from '../components/CardDetail'

const FilmPage = () => {
  return (
    <>
      <Header hideSearch = {true} hideReturnToList = {false} hideAboutTheTeam = {false}/>
      <CardDetail/>
    </>
  );
};

export default FilmPage;