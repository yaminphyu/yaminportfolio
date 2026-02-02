import React from 'react'
import { useSidebarToggle } from '@/context/SidebarToggleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NAV_LIST } from '@/config';
import { handleScroll } from '@/util';

export default function MobileSidebar() {
  const { isOpen, closeSidebar } = useSidebarToggle();

  if (!isOpen) return;

  return (
    <aside className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-[#1e0e2f] shadow-lg p-6 flex flex-col">

        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[#11001F] dark:text-white text-xl cursor-pointer"
            onClick={closeSidebar}
          />
        </div>

        <ul className="flex flex-col gap-4 mt-6">
          {NAV_LIST.map((nav, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  handleScroll(nav?.id);
                  closeSidebar();
                }}
                className="text-[#11001F] dark:text-white hover:text-white/80 transition"
              >
                {nav.name}
              </button>
            </li>
          ))}
        </ul>

      </div>
    </aside>
  )
}
