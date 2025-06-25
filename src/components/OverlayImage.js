import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "react-bootstrap";
import "./styles/overlayImage.css";
import BackArrow from "../assets/images/arrow_back_ios.svg";
import ForwardArrow from "../assets/images/arrow_forward_ios.svg";

const OverlayImage = ({ isOpen, images, currentIndex, onClose, setCurrentIndex }) => {
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
            {/* 이미지 페이드 전환 */}
            <AnimatePresence mode="wait">
            <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt="enlarged"
                className="modal-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                />
            </AnimatePresence>
            <CloseButton className="modal-close" onClick={onClose} />
            <button className="modal-prev" onClick={() => setCurrentIndex((currentIndex - 1 + total) % total)}>
                <img src={BackArrow} alt="이전 버튼 아이콘"/>
            </button>
            <button className="modal-next" onClick={() => setCurrentIndex((currentIndex + 1) % total)}>
                <img src={ForwardArrow} alt="다음 버튼 아이콘"/>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayImage;