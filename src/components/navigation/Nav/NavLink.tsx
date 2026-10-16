import Icon from "@/components/ui/Icon";
import clsx from "clsx";

type NavLinkProps = {
  icon: string;
  text: string;
  isActive?: boolean;
  className?: string;
};

const NavLink = ({ icon, text, isActive, className }: NavLinkProps) => {
  const colorClasses = isActive
    ? "text-neutral-primary"
    : "text-neutral-primary/50 hover:text-neutral-primary/70";

  return (
    <button
      className={clsx(
        "nav-link cursor-pointer w-full grid gap-0.5 px-0.5 py-2",
        "tracking-[.3px] items-center text-[11px]",
        colorClasses,
        className,
      )}
      type="button"
    >
      <Icon type={icon} className="text-[24px]" />
      {text}
    </button>
  );
};

export default NavLink;
