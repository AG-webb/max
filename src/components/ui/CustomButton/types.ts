import type { ReactNode } from "react";

export type ButtonSizes = "small" | "medium" | "large";

export type CustomButtonProps = {
  size?: ButtonSizes;
  children: ReactNode;
  loading?: boolean;
  className?: string;
};
