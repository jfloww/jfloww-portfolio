export function dateFormat(date: string) {
  return `${date.substring(4, 6)}/${date.substring(6, 8)}/${date.substring(0, 4)}`;
}
