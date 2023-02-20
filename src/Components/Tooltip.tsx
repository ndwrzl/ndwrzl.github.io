import { motion as m, HTMLMotionProps, Variants } from "framer-motion";
type TooltipProps = {
  text: string;
  children: JSX.Element[] | JSX.Element;
} & HTMLMotionProps<"div">;

const Motion: Variants = {
  rest: {
    visibility: "hidden",
    opacity: 0,
    scale: 0,
  },
  hover: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    zIndex: 500,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  ...rest
}) => {
  return (
    <m.div
      {...rest}
      className="tooltip"
      whileHover="hover"
      animate="rest"
      initial="rest"
    >
      {children}
      <m.span variants={Motion} className="tooltip-text">
        {text}
      </m.span>
    </m.div>
  );
};
