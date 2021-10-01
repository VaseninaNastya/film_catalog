import React from "react";
import Header from '../components/Header'
import AboutTheTeam from '../components/AboutTheTeam'

const TeamPage:React.FunctionComponent = () => {
  return (
    <>
      <Header hideSearch = {true} hideReturnToList = {false} hideAboutTheTeam = {true}/>
      <AboutTheTeam/>
    </>
  );
};

export default TeamPage;