import clsx from "clsx";
import type { AvatarProps } from "./types";

const Avatar = ({ size = "medium", src, name, className }: AvatarProps) => {
  return (
    <div
      className={clsx(
        "rounded-full bg-dark-secondary flex items-center justify-center",
        size === "small" ? "w-10 h-10" : "w-14 h-14",
        className,
      )}
    >
      {src ? (
        <img width={56} height={56} src={src} alt={name} />
      ) : (
        name.charAt(0).toUpperCase()
      )}
    </div>
  );
};

export default Avatar;
