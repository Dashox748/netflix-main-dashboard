import React from "react";
import "./HomePage.scss";
import HeadingMovie from "@/modules/HomeModule/components/HeadingMovie/HeadingMovie";
import HeadingMovieData from "../../../../assets/files/HeadingMovie.json"


export const HomePage: React.FC = () => {

  return (
    <>
        <HeadingMovie
            id={HeadingMovieData.id}
            top={HeadingMovieData.top}
            description={HeadingMovieData.description}
        />
    </>
  );
};
