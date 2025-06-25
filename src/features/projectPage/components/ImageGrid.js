import React from "react";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images, onImageClick }) => (
  <div className="masonry-gallery">
    {images.map((img, index) => (
      <ImageCard key={index} src={img} index={index} onClick={onImageClick}/>
    ))}
  </div>
);

export default ImageGrid;