import {
  AudioMessage,
  DocumentMessage,
  ExtendedTextMessage,
  MediaMessage,
  PollMessage,
  StickerMessage,
  TextMessage,
} from "@/components/messages";
import type { ChatHistoryWithReactions } from "@/features/journals";
import type { ReactNode } from "react";

export const renderMessage = (props: ChatHistoryWithReactions): ReactNode => {
  switch (props.typeMessage) {
    case "textMessage":
      return <TextMessage text={props.textMessage} />;
    case "extendedTextMessage":
      return <ExtendedTextMessage />;
    case "imageMessage":
    case "videoMessage":
      return (
        <MediaMessage
          type={props.typeMessage}
          fileName={props.fileName}
          downloadUrl={props.downloadUrl}
        >
          {props.caption ? <TextMessage text={props.caption} /> : null}
        </MediaMessage>
      );
    case "audioMessage":
      return <AudioMessage />;
    case "documentMessage":
      return <DocumentMessage />;
    case "pollMessage":
      return (
        <PollMessage
          name={props.pollMessageData.name}
          options={props.pollMessageData.options}
          allowToChangeAnswer={props.pollMessageData.allowToChangeAnswer}
        />
      );
    case "stickerMessage":
      return <StickerMessage />;
    default:
      return <TextMessage text="Unsupported message type" />;
  }
};
