import I18n from "i18n-js";
import { Platform, NativeModules } from "react-native";

const normalizeTranslate = {
  en_US: "en_US",
  en: "en_US",
  pt_BR: "pt_BR",
  pt_US: "pt_BR",
};

I18n.translations = {
  en_US: require("./en-US"),
  pt_BR: require("./pt-BR"),
};

const getLanguage = () => {
  const majorVersionIOS = parseInt(Platform.Version, 10);

  let locale = null;
  if (Platform.OS === "ios") {
    if (majorVersionIOS == 13) {
      locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    } else {
      locale = NativeModules.SettingsManager.settings.AppleLocale;
    }
  } else {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  return locale;
};

export const configureLanguageToI18n = () => {
  const language = getLanguage();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize
  );

  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = "en_US");
};

export const translate = (word) => {
  return I18n.t(word);
};
