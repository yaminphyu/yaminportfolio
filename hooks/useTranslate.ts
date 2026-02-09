// import { useRouter } from 'next/router';
// import en from '../locales/en/index.json';
// import mm from '../locales/mm/index.json';

// const translations = { en, mm };

// export const useTranslate = () => {
//   const { locale } = useRouter();
//   const messages = translations[locale as 'en' | 'mm' ];

//   return (key: keyof typeof messages) => messages[key];
// };

import { useRouter } from 'next/router';
import en from '../locales/en/index.json';
import mm from '../locales/mm/index.json';

type Locale = 'en' | 'mm';
type Messages = typeof en;
type Params = Record<string, string | number>;

const translations: Record<Locale, Messages> = { en, mm };

// export const useTranslate = () => {
//   const { locale } = useRouter();

//   const currentLocale: Locale =
//     locale === 'mm' || locale === 'en' ? locale : 'en';

//   const messages = translations[currentLocale];

//   return (
//     key: keyof Messages,
//     params?: Params
//   ): string => {
//     let text = messages[key] ?? String(key);

//     if (params) {
//       Object.entries(params).forEach(([k, v]) => {
//         text = text.replaceAll(`{${k}}`, String(v));
//       });
//     }

//     return text;
//   };
// };


type TranslateFn = (
  key: keyof Messages,
  params?: Params
) => string;


export const useTranslate = (): TranslateFn => {
  const { locale } = useRouter();

  const currentLocale: Locale =
    locale === 'mm' || locale === 'en' ? locale : 'en';

  const messages = translations[currentLocale];

  return (key, params) => {
    let text = messages[key] ?? String(key);

    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replaceAll(`{${k}}`, String(v));
      });
    }

    return text;
  };
};
