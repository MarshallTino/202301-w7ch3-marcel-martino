import React from "react";
import "./rocketAnimationStyles.css";
const RocketAnimation: React.FC = () => {
  return (
    <div id="container">
      <div className="back"></div>
      <div className="rocket_c">
        <div className="ganch ganch_1"></div>
        <div className="ganch ganch_2"></div>
        <div className="ganch ganch_3"></div>

        <div className="sec_pop"></div>

        <div className="text">
          <img
            className="us"
            alt="spacex"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png"
          />
          <img
            className="spacex"
            alt="spacex"
            src="http://i67.tinypic.com/24q6a0k.png"
          />
        </div>
        <div className="prop"></div>

        <div className="boost">
          <div className="flame">
            <div className="top"></div>
            <div className="shadows"></div>
          </div>
        </div>

        <div className="leg leg_1"></div>
        <div className="leg leg_2"></div>
        <div className="leg leg_3"></div>

        <div className="stand stand_1"></div>
        <div className="stand stand_2"></div>
        <div className="stand stand_3"></div>
      </div>
      <div className="smoke"></div>
      <div className="platform"></div>
      <div className="sea"></div>
    </div>
  );
};

export default RocketAnimation;
