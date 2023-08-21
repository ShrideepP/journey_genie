"use client";

import {
  FC,
  useEffect,
  useRef
} from "react";
import {
  motion,
  useInView,
  useAnimation,
  Variants
} from "framer-motion";

const fadeUpVariants: Variants = {
  hidden: {
    x: 80,
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.2
    },
  }
};

interface FadeUpProps {
  children: JSX.Element;
};

const FadeUp: FC<FadeUpProps> = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const fadeUpControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      fadeUpControls.start('visible');
    };
  }, [isInView]);

  return (
    <motion.div 
      style={{ position: "relative" }}
      variants={fadeUpVariants}
      initial="hidden"
      animate={fadeUpControls}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
