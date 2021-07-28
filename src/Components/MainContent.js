import React from "react";
import headline_photo from "../images/headline_photo.png";

export const MainContent = (props) => {
  return (
    <div className="MainContent">
      <p>Hej, världen!</p>
      <p>
        Det är jag som är <b>Paula</b>
      </p>
      <div>
        <img src={headline_photo} alt="headline_photo" />
      </div>
      <div>
        <button className="Magic-button">Vem är Paula?</button>
      </div>
    </div>
  );
};

export default MainContent;
