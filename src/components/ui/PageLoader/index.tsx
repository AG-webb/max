import spinnerSrc from "@/assets/images/spinner.svg";
import clsx from "clsx";

const PageLoader = ({ className }: { className?: string }) => (
  <div className={clsx("page-loader flex items-center justify-center", className)}>
    <img width={40} height={40} src={spinnerSrc} alt="loading" />
  </div>
);

export default PageLoader;
