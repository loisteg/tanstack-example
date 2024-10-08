/* Usage
  const [currentLanguage, changeLanguage, defaultLanguageKey] = useuseCurrentLanguage();
*/

import { useEffect, useState } from "react";

import { languageActions, asyncStorage } from "../helpers";

import { storageKeys, supportedLanguages } from "../constants";

import { useCurrentLanguageTypes } from "../types";

const useCurrentLanguage: useCurrentLanguageTypes.UseCurrentLanguageHook =
  () => {
    const [prefferedLanguage, setPrefferedLanguage] = useState(
      () => supportedLanguages.languages[0].lg
    );

    useEffect(() => {
      const getLanguageKey = async () => {
        const key = await asyncStorage.getItem(storageKeys.LANGUAGE);

        if (key && key !== prefferedLanguage) {
          setPrefferedLanguage(key);
        }
      };

      getLanguageKey();
    }, []);

    const changeLanguage: useCurrentLanguageTypes.UseCurrentLanguageChangeFunc =
      async (languageKey: string) => {
        await asyncStorage.setItem(storageKeys.LANGUAGE, languageKey);
        languageActions.selectLanguage(languageKey);
        setPrefferedLanguage(languageKey);
      };

    return {
      currentLanguage: prefferedLanguage,
      changeLanguage,
      defaultLanguage: supportedLanguages.languages[0].lg,
    };
  };

export default useCurrentLanguage;
