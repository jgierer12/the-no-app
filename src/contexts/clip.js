import * as React from "react";
import { createPureContext } from "react-shallow-context";

import { clips } from "../lang";
import { pickRandom } from "../utils";

const getNextClip = current => pickRandom(clips, current);

export const ClipContext = createPureContext();

export const useClipContext = () => React.useContext(ClipContext);

export const ClipContextProvider = ({ children }) => {
  const [currentClip, setCurrentClip] = React.useState(null);
  const [nextClip, setNextClip] = React.useState(getNextClip);

  const progressClip = React.useCallback(() => {
    setCurrentClip(nextClip);
  }, [nextClip]);

  const resetClip = React.useCallback(() => {
    setCurrentClip(null);
  }, []);

  React.useEffect(() => {
    setNextClip(getNextClip(currentClip));
  }, [currentClip]);

  const hasCurrentClip = !!currentClip;

  return (
    <ClipContext.Provider
      value={{
        currentClip,
        nextClip,
        progressClip,
        resetClip,
        hasCurrentClip,
      }}
    >
      {children}
    </ClipContext.Provider>
  );
};
