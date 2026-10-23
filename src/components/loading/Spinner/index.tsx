import spinnerSrc from "@/assets/images/spinner.svg";
import clsx from "clsx";

export const Spinner = ({ className }: { className?: string }) => (
  <div className={clsx("spinner flex items-center justify-center", className)}>
    <img width={40} height={40} src={spinnerSrc} alt="loading" />
  </div>
);
