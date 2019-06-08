import * as React from "react";
import Helmet from "react-helmet";
import "destyle.css";
import "typeface-inter";
import { useEventListener } from "@jgierer12/hooks";

import "../styles.css";
import { isBrowser } from "../utils";
import { strings } from "../lang";
import { Input } from "./input";
import { VolumeIcon } from "./volume-icon";
import { Button } from "./button";
import { Player } from "./player";
import { useClipContext } from "../contexts/clip";

export const App = () => {
  const { progressClip } = useClipContext();

  useEventListener(
    `keydown`,
    e => {
      e.key === `Enter` && progressClip();
    },
    isBrowser && document
  );

  return (
    <>
      <Helmet>
        <title>{strings.appName}</title>
      </Helmet>
      <main>
        <Input />
        <Button />
        <VolumeIcon />

        <Player />
      </main>
    </>
  );
};
