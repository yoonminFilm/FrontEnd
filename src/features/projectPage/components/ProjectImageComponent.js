import React from "react";
import ImageGrid from "./ImageGrid";
import "../styles/grid.css";

const ProjectImageComponent = ({ title, description, images }) => {
  return (
    <div className="content-wrapper">
      <h1 className="content-title">{title}</h1>
      <p className="content-description">{description}</p>
      <ImageGrid images={images} />
    </div>
  );
};

export default ProjectImageComponent;