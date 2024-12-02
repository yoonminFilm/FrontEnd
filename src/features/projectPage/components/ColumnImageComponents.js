import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Lazy 로드 효과
import "./image-page.css";

const ColumnImageComponent = ({ images }) => {
    return (
        <div className="column">
            {images.map((url, index) => (
                <div className="column-item" key={index}>
                    <LazyLoadImage
                        src={url}
                        alt={`Image ${index}`}
                        effect="blur"
                        className="column-image"
                    />
                </div>
            ))}
        </div>
    );
};

export default ColumnImageComponent;