import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type SidebarToggleContextType = {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
  previewImage: string | null;
  setPreviewImage: (image: string | null) => void;
};

const SidebarToggleContext = createContext<SidebarToggleContextType | undefined>(
  undefined
);

export const SidebarToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(prev => !prev);

  useEffect(() => {
    if (isOpen || previewImage) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
  }, [isOpen, previewImage]);

  return (
    <SidebarToggleContext.Provider
      value={{ isOpen, openSidebar, closeSidebar, toggleSidebar, previewImage, setPreviewImage }}
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
