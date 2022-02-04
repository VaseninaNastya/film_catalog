import React from "react";
import Header from "../components/Header";
import CardDetail from "../components/CardDetail";

const FilmPage: React.FunctionComponent = () => {
  return (
    <>
      <Header
        hideSearch={true}
        hideReturnToList={false}
        hideAboutTheTeam={false}
      />
      <CardDetail />
    </>
  );
};

export default FilmPage;
