import React from 'react';
import { useLanguageSettings } from '../../hooks';

const ToggleLanguage = ({ toggleText } : { toggleText:string }) => {
  const { setLocalStorageLanguage, langSetting } = useLanguageSettings();
  // this component is temp
  return (
    <div className="my-4">
      <button
        type="button"
        className="py-2 px-4 bg-primary-500 dark:bg-primary-700 rounded-full"
        onClick={() => setLocalStorageLanguage(langSetting === 'en' ? 'es' : 'en')}
      >
        {toggleText}
      </button>
    </div>
  );
};
export default ToggleLanguage;
