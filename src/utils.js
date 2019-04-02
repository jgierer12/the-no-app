import * as React from "react";

export const pickRandom = (arr, current) => {
  if (arr.length < 2) return arr[0] || null;

  const result = arr[Math.floor(Math.random() * arr.length)];
  return result === current ? pickRandom(arr, current) : result;
};

export const getClipPath = slug => `/clips/${slug}.mp3`;

export const useEffectAfterMount = (cb, deps) => {
  const justMounted = React.useRef(true);
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, deps);
};

export const useTimeout = (cb, ms, deps, useEffect = React.useEffect) => {
  useEffect(() => {
    const to = setTimeout(cb, ms);
    return () => clearTimeout(to);
  }, deps);
};

export const useEventListener = (node, type, cb) => {
  React.useEffect(() => {
    if (!node) return;

    node.addEventListener(type, cb);
    return () => node.removeEventListener(type, cb);
  }, []);
};

export const isBrowser = typeof window !== `undefined`;
