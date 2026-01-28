import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type SidebarToggleContextType = {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

const SidebarToggleContext = createContext<SidebarToggleContextType | undefined>(
  undefined
);

export const SidebarToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(prev => !prev);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <SidebarToggleContext.Provider
      value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}
    >
      {children}
    </SidebarToggleContext.Provider>
  );
};

export const useSidebarToggle = () => {
  const context = useContext(SidebarToggleContext);

  if (!context) {
    throw new Error(
      'useSidebarToggle must be used within a SidebarToggleProvider'
    );
  }

  return context;
};
