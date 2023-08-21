"use client";

import { 
  useState,
  useRef,
  useEffect
} from "react";
import { motion } from "framer-motion";
import FeaturedDestination from "./featured-destination";

const Featured = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if(carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    };
  }, []);

  return (
    <motion.div 
      ref={carouselRef}
      whileTap={{ cursor: "grabbing" }}
      className="w-full h-fit relative overflow-hidden cursor-grab"
    >
      <motion.div 
        drag="x"
        dragConstraints={{ right: 0, left: -width }} 
        className="flex gap-x-6"
      >
        <FeaturedDestination />
      </motion.div>
    </motion.div>
  );
};

export default Featured;
