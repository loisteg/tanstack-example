export type UseCurrentLanguageHook = () => {
  currentLanguage: string;
  changeLanguage: UseCurrentLanguageChangeFunc;
  defaultLanguage: string;
};

export type UseCurrentLanguageChangeFunc = (language: string) => void;
