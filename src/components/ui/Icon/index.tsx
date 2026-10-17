import clsx from "clsx";

type IconProps = {
  type: string;
  className?: string;
};

export const Icon = ({ type, className }: IconProps) => {
  return <i className={clsx(`icon icon-${type} `, className)}></i>;
};
