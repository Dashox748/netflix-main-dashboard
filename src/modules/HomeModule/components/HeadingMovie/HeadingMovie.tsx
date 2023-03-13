import React from "react";
import wendsday from "../../../../assets/images/wendsday.jpg";
import wendsdayTitle from "../../../../assets/images/wednsdayTitle.png";
import playIcon from "../../../../assets/images/play.svg";
import infoCircleIcon from "../../../../assets/images/info-circle.svg";
import "./HeadingMovie.scss";

interface HeadingMovieInfoProps {
  id: string;
  top: number;
  description: string;
}

const HeadingMovie: React.FC<HeadingMovieInfoProps> = ({
  id,
  top,
  description,
}) => {
  return (
    <div className="HeadingMovie-container">
      <div className="HeadingMovie-container-background">
        <img
          src={wendsday}
          className="HeadingMovie-container-background__bg-image"
          alt="bg"
        />
      </div>
      <div className="top-shadow" />
      <div className="bottom-shadow" />
      <div className="HeadingMovie-container-details">
        <div className="HeadingMovie-container-details-about">
          <div className="HeadingMovie-container-details-about-rating">
            <div className="HeadingMovie-container-details-about-rating-top-ten">
              <div className="top">TOP</div>
              <div className="ten">10</div>
            </div>
            <span className="tophow">Nr {top} wśród seriali dzisiaj</span>
          </div>
          <img src={wendsdayTitle} className="wendsday-title" alt={wendsdayTitle} />
          <p className="desc">{description}</p>
        </div>
        <div className="HeadingMovie-container-details-buttons">
          <button className="HeadingMovie-container-details-buttons__play">
            <img src={playIcon} alt="odtworz"/>
            Odtwórz
          </button>
          <button className="HeadingMovie-container-details-buttons__more-info">
            <img src={infoCircleIcon} alt={"wiecej informacj"} />
            Więcej informacji
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadingMovie;
