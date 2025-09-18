import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

type IconProps = SVGMotionProps<SVGSVGElement>;

const iconVariants = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(0, 0, 0, 0)', // Animate fill to transparent
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(0, 0, 0, 1)', // Animate fill to black
  },
};

const FolderIcon: React.FC<IconProps> = (props) => {
  const folderPath =
    'M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z';
  const tabPath = 'M12 7h-9v-1c0 -0.55 0.45 -1 1 -1h6z';

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* The main folder body, handling both draw and fill */}
      <motion.path
        d={folderPath}
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{
          pathLength: { duration: 0.6, ease: 'easeInOut' },
          fill: { duration: 0.5, ease: 'easeIn', delay: 0.6 },
        }}
      />
      {/* The folder tab */}
      <path d={tabPath} />
    </motion.svg>
  );
};

export default FolderIcon;
