import spinnerSrc from "@/assets/images/spinner.svg";
import { Button, type ButtonProps } from "@headlessui/react";
import clsx from "clsx";
import "./style.css";
import type { ButtonSizes, CustomButtonProps } from "./types";

const CustomButton = ({
  size = "large",
  loading,
  className,
  children,
  ...props
}: CustomButtonProps & ButtonProps) => {
  const baseClasses = "btn cursor-pointer";
  const buttonSizes: Record<ButtonSizes, string> = {
    small: "btn_sm h-6",
    medium: "btn_md h-8",
    large: "btn_lg h-10",
  };
  const loadingClasses = "btn_loading opacity-50 pointer-events-none";

  return (
    <Button
      {...props}
      className={clsx(
        baseClasses,
        className,
        buttonSizes[size],
        loading && loadingClasses,
      )}
    >
      {loading ? (
        <span className="inline-flex justify-center items-center">
          <img width={16} height={16} src={spinnerSrc} alt="loading" />
        </span>
      ) : (
        children
      )}
    </Button>
  );
};

export default CustomButton;
