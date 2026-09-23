import clsx from "clsx";
import "./style.css";
import type { SkeletonProps } from "./types";

const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={clsx("skeleton", className)}></div>;
};

export default Skeleton;
