import * as React from "react";
import { useRerender, useTimeout } from "@jgierer12/hooks";

import { pickRandom } from "../utils";
import { questions } from "../lang";
import { useClipContext } from "../contexts/clip";

const getNextQuestion = current => pickRandom(questions, current);

export const Input = () => {
  const [text, setText] = React.useState(``);
  const [question, setQuestion] = React.useState(getNextQuestion);

  const { hasCurrentClip, resetClip } = useClipContext();

  useTimeout(
    () => {
      if (text === question) {
        hasCurrentClip || setQuestion(getNextQuestion(question));
      } else {
        setText(text + question[text.length]);
      }
    },
    75,
    [text],
    useRerender
  );

  useTimeout(
    () => {
      setText(question[0]);
    },
    1000,
    [question]
  );

  return (
    <input type="text" placeholder={text} autoFocus onChange={resetClip} />
  );
};
