import React from 'react';
import { useLanguageSettings } from '../../hooks';

const ToggleLanguage = ({ toggleText } : { toggleText:string }) => {
  const { setLocalStorageLanguage, langSetting } = useLanguageSettings();

  return (
    <div>
      <button
        type="button"
        className="py-2 px-4 bg-green-500 dark:bg-green-700"
        onClick={() => setLocalStorageLanguage(langSetting === 'en' ? 'es' : 'en')}
      >
        {toggleText}
      </button>
    </div>
  );
};
export default ToggleLanguage;
