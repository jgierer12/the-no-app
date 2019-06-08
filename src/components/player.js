import * as React from "react";
import { Helmet } from "react-helmet";

import { useClipContext } from "../contexts/clip";

export const Player = () => {
  const mediaElement = React.useRef();

  const { hasCurrentClip, currentClip, nextClip } = useClipContext();

  React.useEffect(() => {
    if (!hasCurrentClip) return;
    mediaElement.current.play();
  }, [currentClip]);

  return (
    <>
      <Helmet>
        <link rel="prefetch" href={nextClip} as="audio" />
      </Helmet>
      <audio ref={mediaElement} src={currentClip || ``} />
    </>
  );
};
