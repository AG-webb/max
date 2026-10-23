import type { PollMessageData } from "@/features/journals";

export const PollMessage = ({ name, options }: PollMessageData) => {
  return (
    <div className="poll-message pt-2 px-2.5 pb-2.5 min-w-70">
      <div>{name}</div>
      <div className="text-[14px] mb-4">Poll</div>
      <div className="grid gap-3 mb-5">
        {options.map((option) => {
          return (
            <>
              <div>{option.optionName}</div>
              <div className="w-full h-1 bg-neutral-secondary"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};
