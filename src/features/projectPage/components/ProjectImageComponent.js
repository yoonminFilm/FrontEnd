import React, {useState} from "react";
import ImageGrid from "./ImageGrid";
import "../styles/grid.css";
import OverlayImage from "../../../components/OverlayImage";

const ProjectImageComponent = ({ title, description, images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="content-wrapper">
      <h1 className="content-title">{title}</h1>
      <p className="content-description">{description}</p>
      <ImageGrid images={images} onImageClick={openModal} />
      <ImageGrid images={images} />
      <OverlayImage
        isOpen={modalOpen}
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ProjectImageComponent;