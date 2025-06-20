import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageCard = ({ src, index }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView && !visible) {
      const timeout = setTimeout(() => setVisible(true), (index % 4) * 150);
      return () => clearTimeout(timeout);
    }
  }, [inView, visible, index]);

  return (
    <motion.div
      ref={ref}
      className="masonry-item"
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <LazyLoadImage
        src={src}
        alt={`image-${index}`}
        effect="blur"
        className="masonry-img"
      />
    </motion.div>
  );
};

export default ImageCard;