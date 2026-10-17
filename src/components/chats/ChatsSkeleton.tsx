import { Skeleton } from "@/components/loading";

export const ChatsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="cursor-pointer text-left w-full px-4 py-2.25 transition-colors hover:bg-card-hover"
        >
          <div className="grid gap-3 grid-cols-[64px_1fr] items-center">
            <div className="flex items-center justify-center w-16 h-16">
              <Skeleton className="w-14 h-14 rounded-full" />
            </div>
            <div className="h-full grid items-start gap-0.5">
              <div className="relative flex justify-between items-center">
                <Skeleton className="w-[60%] h-5" />
                <Skeleton className="w-10 h-4" />
              </div>
              <div className="grid gap-0.5">
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-full h-3" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
