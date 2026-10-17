import { PageLoader } from "@/components/loading";

const Starting = () => {
  return (
    <div className="grid gap-8">
      <PageLoader />
      <div className="grid gap-2 mb-10">
        <div className="text-[20px] font-semibold leading-6 tracking-[0.15px]">
          Starting instance
        </div>
        <div className="text-neutral-tertiary text-[15px] leading-5 tracking-[0.15px]">
          This will take up to 5 minutes, please wait.
        </div>
      </div>
    </div>
  );
};

export default Starting;
