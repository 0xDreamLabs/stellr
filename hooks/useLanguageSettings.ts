import { useEffect, useState } from 'react';
import Router from 'next/router';

const getInitialLanguage = (preferredLanguage: string) => {
  const language = preferredLanguage;
  const root = window.document.documentElement;

  if (typeof window !== 'undefined' && window.localStorage) {
    // if we have a language set in local storage, return that
    const storedPrefs = window.localStorage.getItem('lang');
    if (typeof storedPrefs === 'string') {
      root.lang = storedPrefs;
      return storedPrefs;
    }

    // if no language set in local storage set language to the preferred language... if we don't have it, it should default to english
    window.localStorage.setItem('lang', language);
    root.lang = language;
  }
  return language;
};

const getPreferredLanguage = () => {
  let preferredLanguage = 'en';
  if (navigator && navigator.language) {
    preferredLanguage = navigator.language;
  }
  return preferredLanguage;
};

export const useLanguageSettings = () => {
  // lang will be set to whats found in localStorage or 'en' if nothing is found
  const [langSetting, setLangSetting] = useState<string>('');

  const setLocalStorageLanguage = (lang: string) => {
    // update local storage with the new language setting
    window.localStorage.setItem('lang', lang);
    // update the language state
    setLangSetting(lang);
    // force app reload to render new language
    Router.reload();
  };

  useEffect(() => {
    const langPreferred = getPreferredLanguage();
    const initialLanguage = getInitialLanguage(langPreferred);
    setLangSetting(initialLanguage);
  }, []);
  return { setLocalStorageLanguage, langSetting };
};
