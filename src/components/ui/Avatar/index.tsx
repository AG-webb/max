import clsx from "clsx";
import type { AvatarProps } from "./types";

export const Avatar = ({ size = "medium", src, name, className }: AvatarProps) => {
  const sizeClasses = {
    "extra-small": "w-6 h-6",
    small: "w-10 h-10",
    medium: "w-14 h-14",
  };

  return (
    <div
      className={clsx(
        "rounded-full bg-dark-secondary flex items-center justify-center overflow-hidden",
        sizeClasses[size],
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