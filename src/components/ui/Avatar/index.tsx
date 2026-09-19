import clsx from "clsx";
import type { AvatarProps } from "./types";

const Avatar = ({ src, name, className }: AvatarProps) => {
  return (
    <div
      className={clsx(
        "w-14 h-14 rounded-full bg-dark-secondary flex items-center justify-center",
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
