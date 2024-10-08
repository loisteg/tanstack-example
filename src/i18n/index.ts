import { initReactI18next } from "react-i18next";
import { asyncStorage } from "../helpers";

import i18n from "i18next";
import { supportedLanguages, storageKeys } from "../constants";

import { languageTypes } from "../types";

const { languages } = supportedLanguages;
const getLanguagesFolders = (acc: object, val: languageTypes.LanguageItem) =>
  Object.assign(acc, { [val.lg]: val.localizationCatalog });

const setI18N = async () => {
  try {
    let defaultLanguageKey = languages[0].lg;

    const key = await asyncStorage.getItem(storageKeys.LANGUAGE);

    if (key) {
      const neededLanguage = languages.find((item) => item.lg === key)?.lg;

      if (!neededLanguage) return;

      defaultLanguageKey = neededLanguage;
    }

    i18n.use(initReactI18next).init({
      lng: defaultLanguageKey,
      fallbackLng: defaultLanguageKey,
      resources: languages.reduce(getLanguagesFolders, {}),
      debug: __DEV__,
      compatibilityJSON: "v3",
      interpolation: {
        escapeValue: false,
      },
    });
  } catch (err) {
    console.log(
      "Error while starting to exec launch config in src/i18n/index.ts: ",
      err
    );
  }
};

export { setI18N };

export default i18n;
