import { useRouter } from 'next/router';
import React from 'react'
import { useTranslate } from './useTranslate';
import { useSidebarToggle } from '@/context/SidebarToggleContext';
import useHandleScroll from './useHandleScroll';
import { useTheme } from 'next-themes';

export default function useIndex() {
  const { toggleSidebar } = useSidebarToggle();
  const { scrolled } = useHandleScroll();
  const { systemTheme, theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return {
    toggleSidebar,
    scrolled,
    handleTheme
  };
}
