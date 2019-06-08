import appNames from "../../../app-names.json";

export const strings = {
  appName: appNames.de,
  inputPlaceholder: `Gib Deine Frage ein...`,
  buttonTextPrefix: `Frag`,
  buttonTextNext: `Nicht überzeugt?`,
  sound: `Ton an!`,
};

export const questions = [
  `Könntest Du mir damit kurz helfen?`,
  `Machen Sie den Papierkram fertig, ja?`,
  `Hast Du eine Minute Zeit?`,
  `Haben Sie kurz Zeit, unsere Umfrage zu beantworten?`,
  `Kommst Du heute Abend auch?`,
  `Könntest Du mich später bitte vertreten?`,
  `Liebst Du mich noch?`,
  `Ich kann morgen auf Dich zählen, oder?`,
];

export const clips = [
  require(`./clips/nein-nein-nein.mp3`),
  require(`./clips/aeh-nein.mp3`),
  require(`./clips/noe.mp3`),
  require(`./clips/ich-habe-keine-zeit.mp3`),
  require(`./clips/fick-dich-donner.mp3`),
  require(`./clips/hahaha.mp3`),
  require(`./clips/ich-will-pizza.mp3`),
  require(`./clips/schoen-dass-wir-darueber-gesprochen-haben.mp3`),
  require(`./clips/kuckuck.mp3`),
  require(`./clips/mit-stolz-weitergeben.mp3`),
  require(`./clips/scheissegal.mp3`),
  require(`./clips/ach-leck-mich-doch.mp3`),
];
