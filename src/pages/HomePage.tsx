import React from "react";
import Header from "../components/Header";
import CardHolder from "../components/CardHolder";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <Header
        hideSearch={false}
        hideReturnToList={true}
        hideAboutTheTeam={false}
      />
      <CardHolder />
    </>
  );
};

export default HomePage;
