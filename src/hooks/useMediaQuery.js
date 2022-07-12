/* Patched version thanks to https://codesandbox.io/s/usemediaquery-fix-je4ed?file=/src/Fixed.js */

import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import { useEnvironment } from "@chakra-ui/react-env";
import { isBrowser } from "@chakra-ui/utils";

const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default function useMediaQuery(query) {
  const env = useEnvironment();
  const queries = Array.isArray(query) ? query : [query];
  const isSupported = isBrowser && "matchMedia" in env.window;

  const [matches, setMatches] = useState(
    queries.map((query) =>
      isSupported ? !!env.window.matchMedia(query).matches : false
    )
  );
  const matchesRef = React.useRef(matches);

  useSafeLayoutEffect(() => {
    if (!isSupported) return undefined;
    const mediaQueryList = queries.map((query) => env.window.matchMedia(query));

    const listenerList = mediaQueryList.map((mediaQuery, index) => {
      const isEqual = (prev, curr) =>
        prev.length === curr.length &&
        prev.every((elem, idx) => elem === curr[idx]);

      const listener = () => {
        const currentMatches = mediaQueryList.map((query) => query.matches);

        if (!isEqual(matchesRef.current, currentMatches)) {
          matchesRef.current = currentMatches;
          setMatches(currentMatches);
        }
      };

      env.window.addEventListener("resize", listener);
      return listener;
    });

    return () => {
      mediaQueryList.forEach((_, index) => {
        env.window.removeEventListener("resize", listenerList[index]);
      });
    };
  }, [query]);

  return matches;
}
