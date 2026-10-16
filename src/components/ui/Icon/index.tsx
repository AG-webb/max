import clsx from "clsx";

type IconProps = {
  type: string;
  className?: string;
};

const Icon = ({ type, className }: IconProps) => {
  return <i className={clsx(`icon icon-${type} `, className)}></i>;
};

export default Icon;
