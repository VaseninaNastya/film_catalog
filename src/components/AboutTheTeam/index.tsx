import React from "react";
import s from "./AboutTheTeam.module.scss";
import img from '../../img/me.jpg';

const AboutTheTeam:React.FunctionComponent = () => {
  return(
    <div className={s.container}>
      <div className={s.aboutTheTeam_description}>
        <h2>Vasenina Nastya</h2>
        <p>I worked as a civil engineer from 2012 to 2020. <br/>Then, from March 2021 to August 2021, I worked as an HTML coder. <br/>From 2019 to 2021 I have been studying JavaScript. <br/>In my free time I like to program, run, meet friends, go to museums and ride a bike.</p>
      </div>
      <div className={s.aboutTheTeam_imgWrapper}>
        <img src={img} alt="me"/>
      </div>
    </div>
  )
}

export default AboutTheTeam;
