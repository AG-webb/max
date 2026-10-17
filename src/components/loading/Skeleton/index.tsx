import clsx from "clsx";
import "./style.css";
import type { SkeletonProps } from "./types";

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={clsx("skeleton", className)}></div>;
};
