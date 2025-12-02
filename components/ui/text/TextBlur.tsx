import { motion } from "framer-motion";

interface TextBlurProps {
  text: string;
  className?: string;
  speed?: number;
  animation?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
}

export default function TextBlur({
  text,
  className,
  speed = 1,
  animation = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  },
}: TextBlurProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 * speed }}
      variants={animation}
      className={className}
    >
      {text}
    </motion.div>
  );
}

