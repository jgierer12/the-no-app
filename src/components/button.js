import * as React from "react";

import { strings } from "../lang";
import { useClipContext } from "../contexts/clip";

export const Button = () => {
  const { progressClip, hasCurrentClip } = useClipContext();
  return (
    <button onClick={progressClip}>
      {hasCurrentClip ? (
        <>{strings.buttonTextNext}</>
      ) : (
        <>
          {strings.buttonTextPrefix} <b>{strings.appName}</b>
        </>
      )}
    </button>
  );
};
