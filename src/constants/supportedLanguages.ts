import en from "../i18n/eng";
// import es from '../i18n/es';
// import it from '../i18n/it';

// Don't delete! App is crashing in release mode without import!
import "moment/locale/es";
import "moment/locale/it";
////////////////////////////////////////////////

import { languageTypes } from "../types";

const languages: languageTypes.LanguageItem[] = [
  {
    title: "English",
    lg: "en",
    localizationCatalog: en,
  },
  /* {
    title: 'Spanish',
    lg: 'es',
    localizationCatalog: es
  },
  {
    title: 'Italian',
    lg: 'it',
    localizationCatalog: it
  }, */
];

export { languages };
