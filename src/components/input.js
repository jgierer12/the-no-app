import * as React from "react";

import { pickRandom, useEffectAfterMount, useTimeout } from "../utils";
import { lang } from "../lang";

const getNextQuestion = current => pickRandom(lang.questions, current);

export const Input = ({ isCurrentAnswer, ...props }) => {
  const [text, setText] = React.useState(``);
  const [question, setQuestion] = React.useState(getNextQuestion);

  useTimeout(
    () => {
      if (text === question) {
        isCurrentAnswer || setQuestion(getNextQuestion(question));
      } else {
        setText(text + question[text.length]);
      }
    },
    75,
    [text],
    useEffectAfterMount
  );

  useTimeout(
    () => {
      setText(question[0]);
    },
    1000,
    [question]
  );

  return <input type="text" placeholder={text} autoFocus {...props} />;
};
