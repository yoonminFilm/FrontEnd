import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/imageModal.css";

const ImageModal = ({ isOpen, images, currentIndex, onClose, setCurrentIndex }) => {
  const total = images.length;

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") setCurrentIndex((currentIndex + 1) % total);
    if (e.key === "ArrowLeft") setCurrentIndex((currentIndex - 1 + total) % total);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, currentIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={images[currentIndex]} alt="enlarged" className="modal-image" />
            <button className="modal-close" onClick={onClose}>✕</button>
            <button className="modal-prev" onClick={() => setCurrentIndex((currentIndex - 1 + total) % total)}>←</button>
            <button className="modal-next" onClick={() => setCurrentIndex((currentIndex + 1) % total)}>→</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;