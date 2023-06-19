export const filterMap: (
  map: Map<string, string>,
  keys: string[]
) => Map<any, any> = (map: Map<string, string>, keys: string[]) => {
  const filteredMap = new Map<string, string>();
  for (const key of keys) {
    filteredMap.set(key, map.get(key) as string);
  }
  return filteredMap;
};
