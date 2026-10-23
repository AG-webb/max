export const TextMessage = ({ text }: { text: string }) => {
  return (
    <div className="chat-message__text max-w-(--message-text-max-width) pt-2 px-2.5 pb-2.5 relative inline-block">
      {text}
    </div>
  );
};
