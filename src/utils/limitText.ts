export function limitText(text: string) {
  if (text.length > 13) {
    return text.substring(0, 13) + '...';
  }

  return text;
}
