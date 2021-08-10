import React from "react";
import PictureCarousel from "../Components/PictureCarousel";
import { ProfilePictures } from "../Components/ProfilePictures";

export const Home = (props) => {
  return (
    <div className="main-content">
      <PictureCarousel slides={ProfilePictures} />
    </div>
  );
};
