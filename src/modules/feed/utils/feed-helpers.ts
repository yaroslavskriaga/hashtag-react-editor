export const CHAR_LIMIT = 300;

export function filteredHashtags(tags: string[]): string[] {
  return tags.map((tag: string) => `#${tag}`);
}

export function normaliseValue(value: number): number {
  return (value * 100) / CHAR_LIMIT;
}
