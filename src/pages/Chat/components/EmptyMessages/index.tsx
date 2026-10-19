import stickerSrc from "@/assets/images/sticker.png";
import clsx from "clsx";
import "./style.css";

export const EmptyMessages = () => {
  return (
    <div
      className={clsx(
        "empty-messages text-center grid gap-2 w-full max-w-80 border-2 backdrop-blur-xl",
        "border-stroke-glass rounded-[20px] mx-auto pt-5 px-4 pb-6",
      )}
    >
      <div className="empty-messages__title text-[17px]">No messages yet</div>
      <div className="empty-messages__text text-xs text-neutral-secondary tracking-[0.3px]">
        Write a message or send this sticker
      </div>
      <div className="empty-messages__sticker">
        <button className="w-36 h-36 cursor-pointer" aria-label="Sticker">
          <img width={144} height={144} src={stickerSrc} alt="Hello" />
        </button>
      </div>
    </div>
  );
};
