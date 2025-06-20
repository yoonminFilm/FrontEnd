import React from "react";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images }) => (
  <div className="masonry-gallery">
    {images.map((src, index) => (
      <ImageCard key={index} src={src} index={index} />
    ))}
  </div>
);

export default ImageGrid;