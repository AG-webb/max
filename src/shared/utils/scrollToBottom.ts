export const scrollToBottom = (element: HTMLElement | null) => {
  if (element) {
    element.scrollTo(0, element.scrollHeight);
  }
};
