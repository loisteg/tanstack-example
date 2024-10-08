import i18n from "../i18n";
import moment from "moment";
import { supportedLanguages } from "../constants";

import { languageTypes } from "../types";

export async function selectLanguage(
  language: languageTypes.LanguageItem["lg"]
) {
  try {
    const searchedLanguageKey =
      supportedLanguages.languages.find((item) => item.lg === language)?.lg ??
      supportedLanguages.languages[0].lg;

    if (i18n.language === searchedLanguageKey) return;

    i18n.changeLanguage(searchedLanguageKey, (err, t) => {
      if (err) {
        //console.log(err)
      }
    });

    moment.locale(language);
  } catch (err) {
    await i18n.changeLanguage(supportedLanguages.languages[0].lg, (err, t) => {
      if (err) {
        // console.log('something went wrong loading', err);
      }
    });
    moment.locale(supportedLanguages.languages[0].lg);
  }
}
