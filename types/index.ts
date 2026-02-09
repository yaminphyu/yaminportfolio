import en from '@/locales/en/index.json';

export type HeaderProps = {
  toggleSidebar: () => void;
  scrolled: boolean;
  handleTheme: () => void;
};

export type Locale = 'en' | 'mm';
export type Messages = typeof en;
export type Params = {
  [key: string]: string | number;
};

export type TranslateFn = (
  key: keyof Messages,
  params?: Params
) => string;
