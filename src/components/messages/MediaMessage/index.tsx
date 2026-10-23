import type { FileTypeHistory } from "@/features/journals";
import type { FileMessageType } from "@/types/chats";
import {
  useState,
  type CSSProperties,
  type ReactEventHandler,
  type ReactNode,
} from "react";

export const MediaMessage = ({
  downloadUrl,
  fileName = "Image",
  children,
  type,
}: Pick<FileTypeHistory, "downloadUrl" | "fileName"> & {
  children?: ReactNode;
  type: Extract<FileMessageType, "imageMessage" | "videoMessage">;
}) => {
  const [width, setWidth] = useState<number | null>(null);

  const handleLoad: ReactEventHandler = (e) => {
    setWidth(e.currentTarget.getBoundingClientRect().width);
  };

  return (
    <div
      className={"chat-message__group"}
      style={
        width
          ? ({
              "--message-text-max-width": `${Math.round(width)}px`,
            } as CSSProperties)
          : {}
      }
    >
      {type === "imageMessage" ? (
        <img
          className="max-w-full w-auto h-auto max-h-100 object-contain"
          src={downloadUrl}
          alt={fileName}
          onLoad={handleLoad}
          loading="lazy"
        />
      ) : (
        <video
          controls
          className="max-w-full w-auto h-auto max-h-100 object-contain"
          src={downloadUrl}
          onLoadedData={handleLoad}
        />
      )}
      {children}
    </div>
  );
};
