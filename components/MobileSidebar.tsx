import React from 'react'
import { useSidebarToggle } from '@/context/SidebarToggleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NAV_LIST } from '@/config';
import Link from 'next/link';

export default function MobileSidebar() {
  const { isOpen, closeSidebar } = useSidebarToggle();

  if (!isOpen) return;

  return (
    <aside className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="fixed top-0 right-0 w-64 h-full bg-[#1e0e2f] shadow-lg p-6 flex flex-col">

        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-white text-xl cursor-pointer"
            onClick={closeSidebar}
          />
        </div>

        <ul className="flex flex-col gap-4 mt-6">
          {NAV_LIST.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.href}
                className="text-white hover:text-white/80 transition"
                onClick={closeSidebar}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </aside>
  )
}
