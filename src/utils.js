export const pickRandom = (arr, current) => {
  if (arr.length < 2) return arr[0] || null;

  const result = arr[Math.floor(Math.random() * arr.length)];
  return result === current ? pickRandom(arr, current) : result;
};

export const isBrowser = typeof window !== `undefined`;
