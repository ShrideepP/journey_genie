import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import destinationImage from "@/assets/destination.jpg";
import Image from "next/image";

const FeaturedDestination = () => {
  return (
    <div className="w-60 min-w-[15rem] h-80 relative z-0 overflow-hidden flex items-end rounded-xl">
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "tween", duration: 0.25 }}
        className="w-full h-full absolute inset-0 z-0"
      >
        <Image 
          src={destinationImage}
          alt="ABCD"
          className="w-full h-full inset-0 -z-10 pointer-events-none object-cover object-center"
        />
        <div
          className="w-full h-full absolute inset-0 z-10" 
          style={{ background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }}
        />
      </motion.div>
      <div className="w-full h-fit p-4 relative z-10 flex flex-col gap-2">
        <h4 className="text-2xl text-white font-semibold">
          Mystic Island
        </h4>
        <p className="text-xs text-muted font-normal">
          An enchanting island paradise with stunning beaches and vibrant culture.
        </p>
        <Button variant="secondary">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default FeaturedDestination;
