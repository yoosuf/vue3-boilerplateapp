export const extractCleanUrl = (inputUrl: string): string | null => {
  const match = inputUrl.match(/\[(.*?)\]/);
  if (match && match[1]) {
    return match[1].replace(/\\"/g, "");
  }
  return null;
};
