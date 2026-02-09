import { useRouter } from 'next/router';
import en from '../locales/en/index.json';
import mm from '../locales/mm/index.json';
import { Locale, Messages, TranslateFn } from '@/types';

const translations: Record<Locale, Messages> = { en, mm };


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
