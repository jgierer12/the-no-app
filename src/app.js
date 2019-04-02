import * as React from "react";
import Helmet from "react-helmet";
import "destyle.css";
import "typeface-inter";

import "./styles.css";
import { pickRandom, getClipPath, useEventListener, isBrowser } from "./utils";
import { lang } from "./lang";
import { Input } from "./components/input";
import { VolumeIcon } from "./components/volume-icon";

const getNextAnswer = current => pickRandom(lang.clips, current);

export const App = () => {
  const [currentAnswer, setCurrentAnswer] = React.useState(null);
  const [nextAnswer, setNextAnswer] = React.useState(getNextAnswer);

  const handleChange = React.useCallback(() => {
    setCurrentAnswer(null);
  }, []);

  const handleClick = React.useCallback(() => {
    setCurrentAnswer(nextAnswer);
  }, [nextAnswer]);
  React.useEffect(() => {
    setNextAnswer(getNextAnswer(currentAnswer));
  }, [currentAnswer]);

  useEventListener(isBrowser && document, `keydown`, e => {
    e.key === `Enter` && handleClick();
  });

  return (
    <>
      <Helmet>
        <title>{lang.appName}</title>
        <link rel="prefetch" href={getClipPath(nextAnswer.slug)} as="audio" />
      </Helmet>
      <main>
        <Input isCurrentAnswer={!!currentAnswer} onChange={handleChange} />
        <button onClick={handleClick}>
          {currentAnswer ? (
            <>{lang.buttonTextNext}</>
          ) : (
            <>
              {lang.buttonTextFirst} <b>{lang.appName}</b>
            </>
          )}
        </button>
        <audio
          autoPlay
          src={currentAnswer ? getClipPath(currentAnswer.slug) : ``}
        />
        <VolumeIcon />
      </main>
    </>
  );
};
